// src/components/Header.tsx (version améliorée)
"use client"

import { useState, useEffect } from "react"
import Breadcrumbs from "@/components/Breadcrumbs"
import MobileMenu from "@/components/MobileMenu"
import MobileMenuToggle from "@/components/MobileMenuToggle"
import NavigationMenu from "@/components/NavigationMenu"
import ThemeToggleButton from "@/components/ThemeToggleButton"
import { cn } from "@/lib/utils"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header
      id="headerPortfolio"
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "text-black dark:text-white",
        // Transparent par défaut, avec effet glass au scroll
        scrolled 
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-gray-200/30 dark:border-gray-800/30"
          : "bg-transparent backdrop-blur-sm border-b border-transparent",
        "shadow-sm hover:shadow-md"
      )}
    >
      <div
        className={cn(
          "max-w-4xl mx-auto w-full px-5 py-4 md:py-5",
          "flex items-center justify-between gap-4",
          "transition-all duration-300"
        )}
      >
        {/* Left side: logo or current path */}
        <Breadcrumbs />

        {/* Center: Segmented navigation - Hidden on mobile */}
        <NavigationMenu />

        {/* Right side: Theme toggle + Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Theme toggle button amélioré */}
          <div className={cn(
            "p-1.5 rounded-lg",
            "bg-gray-100/80 dark:bg-gray-800/80",
            "backdrop-blur-sm",
            scrolled ? "border border-gray-200/50 dark:border-gray-700/50" : ""
          )}>
            <ThemeToggleButton />
          </div>

          {/* Hamburger Mobile Menu toggle amélioré */}
          <div className={cn(
            "p-1.5 rounded-lg",
            "bg-gray-100/80 dark:bg-gray-800/80",
            "backdrop-blur-sm",
            scrolled ? "border border-gray-200/50 dark:border-gray-700/50" : ""
          )}>
            <MobileMenuToggle
              isOpen={mobileMenuOpen}
              onToggleAction={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} setIsOpenAction={setMobileMenuOpen} />
    </header>
  )
}