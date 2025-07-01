"use client"

import { useActionState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { notifyMe } from "./action"

export default function EsperaPage() {
  const [state, formAction] = useActionState(notifyMe, null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Header (simplified for this page) */}
      <header className="w-full max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/shopigram-logo-updated.svg" alt="Shopigram" width={48} height={48} className="w-12 h-12" />
            <div className="flex flex-col">
              <span
                className="text-xl sm:text-2xl font-normal text-[#00b8d4]"
                style={{ fontFamily: "Hammersmith One, sans-serif" }}
              >
                Shopigram
              </span>
              <span className="text-xs text-gray-500 -mt-1">App</span>
            </div>
          </Link>
        </div>
      </header>

      <main className="w-full max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            🎉 ¡Te avisaremos en cuanto Shopigram esté disponible!
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
            Deja tu correo y sé el primero en enterarte del lanzamiento.
          </p>
        </div>

        <Card className="bg-white border-0 shadow-xl rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-8">
          <CardContent className="p-0">
            {state?.success ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-[#00b8d4] mx-auto mb-6" />
                <p className="text-xl font-semibold text-gray-900 mb-4">{state.message}</p>
                <Link href="/" className="text-[#00b8d4] hover:underline">
                  Volver a la página principal
                </Link>
              </div>
            ) : (
              <form action={formAction} className="space-y-5 pb-6 sm:pb-8">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00b8d4] focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                  {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#00b8d4] text-white text-lg font-bold rounded-xl hover:bg-[#0097a7] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Notificarme
                </button>

                {state?.message && !state.success && (
                  <p className="text-red-500 text-center text-sm mt-4">{state.message}</p>
                )}

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-500 mt-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">Es gratis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">No hacemos spam</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">Te puedes dar de baja en un clic</span>
                  </div>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
