// src/components/content/HomeContent.tsx
"use client"

import { motion, MotionConfig, type Variants } from "framer-motion"
import Link from "next/link"
import { FiDownload, FiMail } from "react-icons/fi"
import BlogPost from "@/components/BlogPost"
import ProjectTile from "@/components/ProjectTile"
import ViewAllHeader from "@/components/ViewAllHeader"
import WorkItem from "@/components/WorkItem"
import ProfileCard from "@/components/ProfileCard"
import { 
  homeIntroConfig, 
  factIconMap
} from "@/data/content"
import { BlogPostProps, ProjectProps, WorkItemProps } from "@/lib/types"
import { cn } from "@/lib/utils"

interface HomeContentProps {
  blog: BlogPostProps[]
  work: WorkItemProps[]
  projects: ProjectProps[]
}

// Animation variants for consistent, smooth animations
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

/**
 * Internal component to render quick facts
 */
function QuickFacts() {
  // Build array of facts from predefined fields and additional facts
  const allFacts = [
    // Add predefined facts (filtering out empty values)
    ...Object.entries(homeIntroConfig.facts)
      .filter(([_, value]) => value && value.trim() !== "")
      .map(([category, value]) => {
        const categoryKey = category as keyof typeof factIconMap
        return {
          icon: factIconMap[categoryKey],
          label: value,
        }
      }),
    // Add additional custom facts
    ...homeIntroConfig.additionalFacts,
  ]

  return (
    <>
      {allFacts.map((fact, i) => {
        const Icon = fact.icon
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            className={cn(
              "flex items-center gap-2 px-4 py-3 rounded-xl",
              "border border-gray-200 dark:border-gray-800",
              "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm",
              "text-gray-700 dark:text-gray-300",
              "shadow-sm hover:shadow-md",
              "hover:border-blue-400 dark:hover:border-blue-600",
              "transition-all duration-200 cursor-default"
            )}
          >
            <Icon className="text-blue-600 dark:text-blue-400 text-lg shrink-0" />
            <span className="font-medium text-sm">{fact.label}</span>
          </motion.div>
        )
      })}
    </>
  )
}

/**
 * HomeContent component that renders the main content of the landing page.
 * This is a client component to support framer-motion animations.
 */
export default function HomeContent({ blog, work, projects }: HomeContentProps) {
  /**
   * Get time in milliseconds safely from a date string.
   * @param dateStr - Date string
   * @returns Time in milliseconds or 0 if invalid
   */
  const getTimeSafe = (dateStr: string | undefined) => {
    const date = new Date(dateStr ?? "")
    return isNaN(date.getTime()) ? 0 : date.getTime()
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full">
        {/* Hero Section with two columns layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Left column: Main content (8 columns on large screens) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Header with greeting */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUpVariants}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Je suis{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {homeIntroConfig.shortName || homeIntroConfig.name}
                </span>{" "}
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                  className="inline-block"
                >
                  👋
                </motion.span>
              </h1>

              {/* Introduction paragraphs */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={staggerContainerVariants}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {homeIntroConfig.introParagraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    variants={staggerItemVariants}
                    className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            {/* Action Buttons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Mon CV
              </h2>
              <div className="flex flex-wrap gap-4">
                {/* Download CV Button */}
                {homeIntroConfig.actionButtons?.downloadCV && (
                  <a
                    href={homeIntroConfig.actionButtons.downloadCV.url || "/cv.pdf"}
                    download
                    className={cn(
                      "group inline-flex items-center gap-3 px-6 py-3 rounded-xl",
                      "text-white font-medium transition-all duration-200",
                      "bg-gradient-to-r from-blue-600 to-blue-700",
                      "hover:from-blue-700 hover:to-blue-800",
                      "shadow-lg hover:shadow-xl hover:scale-[1.02]",
                      "active:scale-[0.98]"
                    )}
                  >
                    <FiDownload className="w-5 h-5" />
                    <span>{homeIntroConfig.actionButtons.downloadCV.text || "Télécharger mon CV"}</span>
                  </a>
                )}

                {/* Contact Button */}
                {homeIntroConfig.actionButtons?.contact && (
                  <Link
                    href={homeIntroConfig.actionButtons.contact.url || "/contact"}
                    className={cn(
                      "group inline-flex items-center gap-3 px-6 py-3 rounded-xl",
                      "font-medium transition-all duration-200",
                      "bg-white dark:bg-gray-800",
                      "border-2 border-gray-300 dark:border-gray-700",
                      "text-gray-800 dark:text-gray-200",
                      "hover:border-blue-500 dark:hover:border-blue-500",
                      "hover:bg-blue-50 dark:hover:bg-blue-900/20",
                      "shadow-lg hover:shadow-xl hover:scale-[1.02]",
                      "active:scale-[0.98]"
                    )}
                  >
                    <FiMail className="w-5 h-5" />
                    <span>{homeIntroConfig.actionButtons.contact.text || "Me contacter"}</span>
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Quick Facts Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Faits Rapides & Intéressants
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <QuickFacts />
              </div>
            </motion.div>
          </div>

          {/* Right column: Profile Card (4 columns on large screens) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-8">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full"
              >
                <ProfileCard />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 dark:border-gray-700 my-12" />

        {/* Recent Work Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <ViewAllHeader 
            title="Expérience Professionnelle" 
            pageUrl="/work" 
            itemCount={work.length} 
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-4 mt-6"
          >
            {work
              .slice()
              .sort((a, b) => {
                // Items with "Present" should be at the top
                const aIsPresent = a.end === "Present"
                const bIsPresent = b.end === "Present"

                if (aIsPresent && !bIsPresent) return -1
                if (!aIsPresent && bIsPresent) return 1

                // If both are Present or both have dates, sort by end date (newest first)
                if (aIsPresent && bIsPresent) {
                  return a.company.localeCompare(b.company)
                }

                const endDiff = getTimeSafe(b.end) - getTimeSafe(a.end)
                if (endDiff !== 0) return endDiff

                // If end dates are the same, sort by company name
                return a.company.localeCompare(b.company)
              })
              .slice(0, homeIntroConfig.workItemsToShow)
              .map((job, i) => (
                <motion.div key={i} variants={staggerItemVariants}>
                  <WorkItem {...job} />
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        {/* Recent Projects Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <ViewAllHeader 
            title="Projets Récents" 
            pageUrl="/projects" 
            itemCount={projects.length} 
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          >
            {projects
              .slice()
              .sort((a, b) => {
                // Items with "Present" should be at the top
                const aIsPresent = a.endDate === "Present"
                const bIsPresent = b.endDate === "Present"

                if (aIsPresent && !bIsPresent) return -1
                if (!aIsPresent && bIsPresent) return 1

                // If both are Present or both have dates, sort by end date (newest first)
                if (aIsPresent && bIsPresent) {
                  return a.title.localeCompare(b.title)
                }

                const endDiff = getTimeSafe(b.endDate) - getTimeSafe(a.endDate)
                if (endDiff !== 0) return endDiff

                // If end dates are the same, sort by title
                return a.title.localeCompare(b.title)
              })
              .slice(0, homeIntroConfig.projectsToShow)
              .map(proj => (
                <motion.div key={proj.slug} variants={staggerItemVariants}>
                  <ProjectTile {...proj} />
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        {/* Recent Blog Posts Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUpVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <ViewAllHeader 
            title="Articles de Blog Récents" 
            pageUrl="/blog" 
            itemCount={blog.length} 
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6"
          >
            {blog
              .slice()
              .sort((a, b) => getTimeSafe(b.date) - getTimeSafe(a.date))
              .slice(0, homeIntroConfig.blogPostsToShow)
              .map(post => (
                <motion.div key={post.slug} variants={staggerItemVariants}>
                  <BlogPost {...post} />
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </MotionConfig>
  )
}