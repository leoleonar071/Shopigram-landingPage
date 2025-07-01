"use server"

import { z } from "zod"

const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export async function notifyMe(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
  }

  const parsed = waitlistSchema.safeParse(data)

  if (!parsed.success) {
    return {
      success: false,
      message: "Por favor, introduce un email válido.",
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const SHEETDB_API_URL = "https://sheetdb.io/api/v1/g0oze3kb9zkug"

  try {
    const response = await fetch(SHEETDB_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [{ email: parsed.data.email }] }), // Correct format for SheetDB
    })

    if (response.ok) {
      return {
        success: true,
        message: "✅ Te avisaremos pronto.",
      }
    } else {
      console.error("SheetDB API error:", response.status, await response.text())
      return {
        success: false,
        message: "❌ Algo salió mal. Intenta de nuevo.",
      }
    }
  } catch (error) {
    console.error("Network or fetch error:", error)
    return {
      success: false,
      message: "❌ Algo salió mal. Intenta de nuevo.",
    }
  }
}
