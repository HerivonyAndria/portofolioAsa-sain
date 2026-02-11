// src/components/ThemeToggleButton.tsx (version améliorée)
"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from "react-icons/fi"
import { cn } from "@/lib/utils"

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "relative w-8 h-8 flex items-center justify-center",
        "rounded-lg transition-all duration-300",
        "hover:scale-110 active:scale-95",
        // Background dynamique
        isDark
          ? "bg-gradient-to-br from-gray-800 to-gray-900 text-yellow-300"
          : "bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-600",
        // Effets
        "shadow-sm hover:shadow-md",
        "border border-gray-300/50 dark:border-gray-700/50",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
      )}
    >
      {/* Animation de transition */}
      <div className="relative w-5 h-5">
        <FiSun
          className={cn(
            "absolute inset-0 w-full h-full transition-all duration-300",
            isDark
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
          )}
        />
        <FiMoon
          className={cn(
            "absolute inset-0 w-full h-full transition-all duration-300",
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          )}
        />
      </div>
      
      {/* Effet de halo */}
      <div
        className={cn(
          "absolute inset-0 rounded-lg -z-10",
          "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
          "opacity-0 hover:opacity-100 transition-opacity duration-300"
        )}
      />
    </button>
  )
}