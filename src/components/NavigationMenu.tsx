// src/components/NavigationMenu.tsx (nouveau design)
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Travaux", href: "/work" },
  { name: "Projets", href: "/projects" },
  { name: "Blog", href: "/blog" },
]

export default function NavigationMenu() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "relative px-4 py-2 rounded-lg",
              "text-sm font-medium transition-all duration-200",
              // État normal
              "text-gray-600 dark:text-gray-400",
              "hover:text-gray-900 dark:hover:text-white",
              // État actif
              isActive && "text-gray-900 dark:text-white",
              // Effets
              "hover:scale-105 active:scale-95",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            )}
          >
            {item.name}
            {/* Indicateur d'activité */}
            {isActive && (
              <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-blue-500 rounded-full" />
            )}
            {/* Effet de background au hover */}
            <span
              className={cn(
                "absolute inset-0 rounded-lg -z-10",
                "bg-gray-200/50 dark:bg-gray-800/50",
                "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              )}
            />
          </Link>
        )
      })}
    </nav>
  )
}