// src/components/ContactForm.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi"
import { cn } from "@/lib/utils"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Envoi en cours...' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }

      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès ! Je vous répondrai bientôt.'
      })

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      // Réinitialiser le status après 5 secondes
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' })
      }, 5000)

    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou m\'envoyer un email directement.'
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "w-full max-w-2xl mx-auto",
        "bg-white dark:bg-gray-900",
        "rounded-2xl shadow-xl",
        "border border-gray-200 dark:border-gray-800",
        "p-6 md:p-8"
      )}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Contactez-moi
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Une question ? Un projet ? N'hésitez pas à me contacter, je vous répondrai rapidement.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Nom complet
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={cn(
                "block w-full pl-10 pr-3 py-3 rounded-xl",
                "border border-gray-300 dark:border-gray-700",
                "bg-white dark:bg-gray-800",
                "text-gray-900 dark:text-white",
                "placeholder-gray-400 dark:placeholder-gray-500",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                "transition-all duration-200"
              )}
              placeholder="Votre nom"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={cn(
                "block w-full pl-10 pr-3 py-3 rounded-xl",
                "border border-gray-300 dark:border-gray-700",
                "bg-white dark:bg-gray-800",
                "text-gray-900 dark:text-white",
                "placeholder-gray-400 dark:placeholder-gray-500",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                "transition-all duration-200"
              )}
              placeholder="votre.email@exemple.com"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label 
            htmlFor="subject" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={cn(
              "block w-full px-4 py-3 rounded-xl",
              "border border-gray-300 dark:border-gray-700",
              "bg-white dark:bg-gray-800",
              "text-gray-900 dark:text-white",
              "placeholder-gray-400 dark:placeholder-gray-500",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              "transition-all duration-200"
            )}
            placeholder="De quoi souhaitez-vous parler ?"
          />
        </div>

        {/* Message Field */}
        <div>
          <label 
            htmlFor="message" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Message
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <FiMessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className={cn(
                "block w-full pl-10 pr-3 py-3 rounded-xl",
                "border border-gray-300 dark:border-gray-700",
                "bg-white dark:bg-gray-800",
                "text-gray-900 dark:text-white",
                "placeholder-gray-400 dark:placeholder-gray-500",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                "transition-all duration-200 resize-none"
              )}
              placeholder="Votre message..."
            />
          </div>
        </div>

        {/* Status Message */}
        {status.type !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex items-center gap-2 p-4 rounded-xl",
              status.type === 'success' && "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800",
              status.type === 'error' && "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800",
              status.type === 'loading' && "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
            )}
          >
            {status.type === 'success' && <FiCheck className="w-5 h-5 shrink-0" />}
            {status.type === 'error' && <FiAlertCircle className="w-5 h-5 shrink-0" />}
            {status.type === 'loading' && (
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin shrink-0" />
            )}
            <p className="text-sm font-medium">{status.message}</p>
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className={cn(
            "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl",
            "bg-gradient-to-r from-blue-600 to-blue-700",
            "hover:from-blue-700 hover:to-blue-800",
            "text-white font-semibold",
            "shadow-lg hover:shadow-xl",
            "transition-all duration-200",
            "hover:scale-[1.02] active:scale-[0.98]",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          )}
        >
          {status.type === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <FiSend className="w-5 h-5" />
              <span>Envoyer le message</span>
            </>
          )}
        </button>

        {/* Alternative contact */}
        <div className="text-center pt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Ou envoyez-moi un email directement à{' '}
            <a 
              href="mailto:herivony.andria@asa-sain.tech"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              herivony.andria@asa-sain.tech
            </a>
          </p>
        </div>
      </form>
    </motion.div>
  )
}