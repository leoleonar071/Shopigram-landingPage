"use server"

import { z } from "zod"

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  negocio: z.string().optional(), // Mapea a 'businessName' del formulario
  tipo_negocio: z.enum([
    // Mapea a 'businessType' del formulario
    "restaurant",
    "retail",
    "beauty",
    "services",
    "home-business",
    "physical-products",
    "health-wellness",
    "other",
    "", // Permite el valor vacío inicial
  ]),
  interes: z.enum(["more-clients", "loyalty", "sales", "visibility", ""]), // Mapea a 'improvementArea' del formulario
})

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    negocio: formData.get("businessName"),
    tipo_negocio: formData.get("businessType"),
    interes: formData.get("improvementArea"),
  }

  const parsed = newsletterSchema.safeParse(data)

  if (!parsed.success) {
    return {
      success: false,
      message: "Por favor, completa todos los campos obligatorios correctamente.",
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const SHEETDB_API_URL = "https://sheetdb.io/api/v1/1rpve9lfmjhqz"

  try {
    const response = await fetch(SHEETDB_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: parsed.data }), // Envía el payload con la clave "data"
    })

    if (response.ok) {
      return {
        success: true,
        message: "✅ ¡Gracias! Te acabas de suscribir.",
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
