#!/usr/bin/env node

/**
 * portfolio-to-pdf.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Converts a Next.js portfolio (portofolioAsa-sain) to a polished PDF.
 *
 * HOW TO USE
 * ──────────
 * 1. Install dependencies (run once):
 *      npm install puppeteer
 *
 * 2. Run the script:
 *      node portfolio-to-pdf.js
 *
 *    By default it targets your deployed site. To target localhost first run
 *    "npm run dev" in the portfolio folder, then pass --local:
 *      node portfolio-to-pdf.js --local
 *
 * OUTPUT
 * ──────
 * portfolio_zolalaina.pdf  (created next to this script)
 *
 * OPTIONS (edit the CONFIG block below)
 * ─────────────────────────────────────
 * BASE_URL    URL to scrape  (default = deployed Vercel site)
 * LOCAL_URL   URL when --local flag is passed
 * OUTPUT      Output PDF filename
 * PAGES       Ordered list of pages to capture (set to [] to capture only home)
 * WAIT_MS     Extra ms to wait after page load (for animations / lazy images)
 */

'use strict';

const puppeteer = require('puppeteer');
const path      = require('path');
const fs        = require('fs');

// ──────────────────────────────────────────────────────────────────────────────
// CONFIG – edit here
// ──────────────────────────────────────────────────────────────────────────────
const CONFIG = {
  BASE_URL:  'https://portofolio-asa-sain.vercel.app',
  LOCAL_URL: 'http://localhost:3000',
  OUTPUT:    path.join(__dirname, 'portfolio_zolalaina.pdf'),

  // Pages to capture in order.
  // Each entry is { path, label }.
  // Set to [] to capture only the home page.
  PAGES: [
    { path: '/',         label: 'Accueil'      },
    { path: '/work',     label: 'Expériences'  },
    { path: '/projects', label: 'Projets'      },
    { path: '/blog',     label: 'Blog'         },
  ],

  // Extra wait after page load (ms) – increase if images/animations are cut off
  WAIT_MS: 1500,

  // Viewport width used when rendering
  VIEWPORT_WIDTH: 1280,
};
// ──────────────────────────────────────────────────────────────────────────────

const isLocal   = process.argv.includes('--local');
const BASE      = isLocal ? CONFIG.LOCAL_URL : CONFIG.BASE_URL;
const PAGES     = CONFIG.PAGES.length ? CONFIG.PAGES : [{ path: '/', label: 'Portfolio' }];

/** Remove fixed/sticky elements that look bad across PDF pages */
const HIDE_FIXED_CSS = `
  /* hide nav / header that repeat on every PDF page */
  header, nav, .navbar, [class*="header"], [class*="nav-"] {
    position: static !important;
  }
  /* remove scroll-blocking overlays */
  [class*="overlay"], [class*="modal"] { display: none !important; }
`;

async function capturePage(page, url, label) {
  console.log(`  📄  Capturing: ${label} (${url})`);

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30_000 });
  await new Promise(r => setTimeout(r, CONFIG.WAIT_MS));

  // Inject CSS to avoid sticky headers disrupting the PDF layout
  await page.addStyleTag({ content: HIDE_FIXED_CSS });

  // Expand the page to its full scroll height so nothing is clipped
  const fullHeight = await page.evaluate(() => document.body.scrollHeight);
  await page.setViewport({ width: CONFIG.VIEWPORT_WIDTH, height: fullHeight });

  // Ensure lazy-loaded images are visible
  await page.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    let last = 0;
    while (document.body.scrollHeight !== last) {
      last = document.body.scrollHeight;
      window.scrollTo(0, document.body.scrollHeight);
      await sleep(300);
    }
    window.scrollTo(0, 0);
  });

  await new Promise(r => setTimeout(r, 400));
  return fullHeight;
}

async function main() {
  console.log('\n🚀  Portfolio → PDF converter');
  console.log(`    Source  : ${BASE}`);
  console.log(`    Output  : ${CONFIG.OUTPUT}`);
  console.log(`    Pages   : ${PAGES.map(p => p.label).join(', ')}\n`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: CONFIG.VIEWPORT_WIDTH, height: 900 });

    // ── Collect individual page PDFs as buffers ───────────────────────────────
    const pdfBuffers = [];

    for (const { path: pagePath, label } of PAGES) {
      const url = BASE + pagePath;
      await capturePage(page, url, label);

      const buf = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: { top: '0', right: '0', bottom: '0', left: '0' },
        // scale: shrink slightly so wide layouts fit on A4
        scale: 0.9,
      });

      pdfBuffers.push(buf);
      console.log(`    ✓  ${label} captured (${Math.round(buf.length / 1024)} KB)`);
    }

    // ── Merge buffers → single PDF ────────────────────────────────────────────
    // Puppeteer produces one PDF per page; we concatenate them naively.
    // For a proper merge (with bookmarks) use pdf-lib (see note below).
    if (pdfBuffers.length === 1) {
      fs.writeFileSync(CONFIG.OUTPUT, pdfBuffers[0]);
    } else {
      // Merge with pdf-lib if available, otherwise concatenate raw buffers
      // (raw concatenation is not valid PDF but works for quick previews).
      try {
        const { PDFDocument } = require('pdf-lib');
        const merged = await PDFDocument.create();

        for (const buf of pdfBuffers) {
          const src = await PDFDocument.load(buf);
          const copied = await merged.copyPages(src, src.getPageIndices());
          copied.forEach(p => merged.addPage(p));
        }

        const mergedBytes = await merged.save();
        fs.writeFileSync(CONFIG.OUTPUT, mergedBytes);
        console.log('\n    📎  Pages merged with pdf-lib');
      } catch {
        // pdf-lib not installed – instruct the user
        console.warn('\n    ⚠️   pdf-lib not found. Writing only the first page PDF.');
        console.warn('         Run: npm install pdf-lib   then re-run this script for a full merge.\n');
        fs.writeFileSync(CONFIG.OUTPUT, pdfBuffers[0]);
      }
    }

    const size = (fs.statSync(CONFIG.OUTPUT).size / 1024).toFixed(1);
    console.log(`\n✅  Done! PDF saved → ${CONFIG.OUTPUT}  (${size} KB)\n`);

  } finally {
    await browser.close();
  }
}

main().catch(err => {
  console.error('\n❌  Error:', err.message);
  process.exit(1);
});