// src/app/contact/page.tsx
import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: "Contact - Zola.",
  description: "Contactez-moi pour discuter de vos projets IT, d'administration système ou de monitoring.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Prenons contact
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Une question sur mes services ? 
            N'hésitez pas à me contacter, je serais ravi d'échanger avec vous.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <a 
              href="mailto:herivony.andria@asa-sain.tech"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              herivony.andria@asa-sain.tech
            </a>
          </div>

          {/* Disponibilité */}
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Disponibilité</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Lun - Ven<br />
              8h00 - 18h00 (GMT+3)
            </p>
          </div>

          {/* Délai de réponse */}
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Délai de réponse</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Généralement sous<br />
              24 heures
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}