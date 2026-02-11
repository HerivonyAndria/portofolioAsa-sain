// src/app/page.tsx
import HomeContent from "@/components/content/HomeContent"
import { getAllBlogPosts, getAllProjects, getAllWorkItems } from "@/lib/mdx"

export default async function Home() {
  const blog = await getAllBlogPosts()
  const work = await getAllWorkItems()
  const projects = await getAllProjects()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <HomeContent blog={blog} work={work} projects={projects} />
      </div>
    </main>
  )
}