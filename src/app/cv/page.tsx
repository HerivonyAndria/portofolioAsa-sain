// src/app/cv/page.tsx
import { FiDownload, FiMail, FiPhone, FiMapPin, FiGlobe, FiGithub, FiLinkedin } from "react-icons/fi"
import { cn } from "@/lib/utils"

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Bouton de téléchargement en haut */}
      <div className="flex justify-end mb-8">
        <a
          href="/cv.pdf"
          download
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
            "bg-blue-600 text-white font-medium",
            "hover:bg-blue-700 transition-colors duration-200",
            "shadow-lg hover:shadow-xl"
          )}
        >
          <FiDownload className="w-5 h-5" />
          Télécharger en PDF
        </a>
      </div>

      {/* Contenu du CV */}
      <div className={cn(
        "bg-white dark:bg-gray-900 rounded-2xl p-8",
        "border border-gray-200 dark:border-gray-800",
        "shadow-2xl"
      )}>
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Herivony Zolalaina
          </h1>
          <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-4">
            Software Engineer | Full-Stack Developer
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <FiMail className="w-4 h-4" />
              <span>herivony@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="w-4 h-4" />
              <span>+33 6 XX XX XX XX</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-4 h-4" />
              <span>Lille, France</span>
            </div>
            <div className="flex items-center gap-2">
              <FiLinkedin className="w-4 h-4" />
              <span>linkedin.com/in/herivony</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Colonne gauche */}
          <div className="md:col-span-2 space-y-8">
            {/* Expérience */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">
                Expérience Professionnelle
              </h3>
              {/* Ajoutez vos expériences ici */}
            </section>

            {/* Formation */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">
                Formation
              </h3>
              {/* Ajoutez vos formations ici */}
            </section>
          </div>

          {/* Colonne droite */}
          <div className="space-y-8">
            {/* Compétences */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Compétences
              </h3>
              {/* Ajoutez vos compétences ici */}
            </section>

            {/* Langues */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Langues
              </h3>
              {/* Ajoutez vos langues ici */}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}