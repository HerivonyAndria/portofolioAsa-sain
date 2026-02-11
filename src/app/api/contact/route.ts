import { NextRequest, NextResponse } from 'next/server'
import * as brevo from '@getbrevo/brevo'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // 1. Initialiser l'API transactionnelle
    const apiInstance = new brevo.TransactionalEmailsApi()
    apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY!
    )

    // 2. Construire l'email
    const sendSmtpEmail = new brevo.SendSmtpEmail()
    sendSmtpEmail.sender = {
      name: 'Portfolio Contact',
      email: process.env.FROM_EMAIL!,
    }
    sendSmtpEmail.to = [{ email: process.env.TO_EMAIL! }]
    sendSmtpEmail.replyTo = { email }
    sendSmtpEmail.subject = `[Portfolio] ${subject}`
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial; max-width:600px;">
        <h2>Nouveau message depuis votre portfolio</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <hr/>
        <p>${message.replace(/\n/g, '<br>')}</p>
      </div>
    `

    // 3. Envoyer
    await apiInstance.sendTransacEmail(sendSmtpEmail)

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès !' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur API Brevo:', error)
    // Vous pouvez affiner le message selon l'erreur retournée par Brevo
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    )
  }
}