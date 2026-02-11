// src/components/ProfileCard.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FiMail, FiFileText } from "react-icons/fi"
import { cn } from "@/lib/utils"

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative w-full overflow-hidden",
        "rounded-2xl shadow-2xl",
        "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
        "p-[2px]"
      )}
    >
      {/* Inner card with gradient background */}
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
        {/* Premium Badge - positioned at top right */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            <span>👑</span>
            <span>Premium</span>
          </div>
        </div>

        {/* Card content */}
        <div className="relative p-6 space-y-6">
          {/* Avatar */}
          <div className="flex justify-center pt-2">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-gray-800 bg-gradient-to-br from-blue-400 to-purple-600">
                <img 
                  src="/zola.jfif" 
                  alt="Herivony Zolalaina"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Active status indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900"></div>
            </div>
          </div>

          {/* Name and title */}
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white">
              Herivony Zolalaina
            </h3>
            <p className="text-blue-300 text-sm font-medium flex items-center justify-center gap-1">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
              Freelance IT
            </p>
          </div>

          {/* Job title */}
          <div className="text-center">
            <p className="text-gray-300 text-base font-medium">
              Expert IT & Administrateur Systèmes
            </p>
          </div>

          {/* Skills badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1.5 bg-blue-600/30 text-blue-300 rounded-full text-xs font-semibold border border-blue-500/30">
              Zabbix Expert
            </span>
            <span className="px-3 py-1.5 bg-purple-600/30 text-purple-300 rounded-full text-xs font-semibold border border-purple-500/30">
              Microsoft 365
            </span>
            <span className="px-3 py-1.5 bg-pink-600/30 text-pink-300 rounded-full text-xs font-semibold border border-pink-500/30">
              Linux & Windows
            </span>
          </div>

          {/* Action buttons - Full width */}
          <div className="space-y-3 pt-2">
            {/* Contact button - Lien vers la page de contact */}
            <Link
              href="/contact"
              className={cn(
                "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl",
                "bg-blue-600 hover:bg-blue-700",
                "text-white font-semibold text-sm",
                "transition-all duration-200",
                "shadow-lg hover:shadow-xl",
                "hover:scale-[1.02] active:scale-[0.98]"
              )}
            >
              <FiMail className="w-4 h-4" />
              <span>Me contacter</span>
            </Link>

            {/* View more button */}
            <Link
              href="/about"
              className={cn(
                "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl",
                "bg-gray-800 hover:bg-gray-750 border border-gray-700",
                "text-gray-300 hover:text-white font-semibold text-sm",
                "transition-all duration-200",
                "shadow-lg hover:shadow-xl",
                "hover:scale-[1.02] active:scale-[0.98]"
              )}
            >
              <FiFileText className="w-4 h-4" />
              <span>Voir mon profil</span>
            </Link>
          </div>

          {/* Stats or additional info */}
          <div className="pt-4 border-t border-gray-800">
            <div className="text-center space-y-1">
              <p className="text-gray-400 text-xs">
                Mes projets
              </p>
              <p className="text-white text-lg font-bold">
                15+
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}