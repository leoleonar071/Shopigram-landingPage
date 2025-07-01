"use client"

import { useActionState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { subscribeToNewsletter } from "./action"

export default function NewsletterPage() {
  const [state, formAction] = useActionState(subscribeToNewsletter, null)

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
              <span className="text-xs text-gray-500 -mt-1">Business</span>
            </div>
          </Link>
        </div>
      </header>

      <main className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            🎉 Recibe contenido exclusivo para tu negocio
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-8">
            Consejos prácticos para vender más, fidelizar clientes y hacer crecer tu negocio.
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
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
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

                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre del negocio (opcional)
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00b8d4] focus:border-transparent transition-all"
                    placeholder="Tu negocio"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de negocio *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00b8d4] focus:border-transparent transition-all"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="restaurant">Restaurante / Cafetería</option>
                    <option value="retail">Tienda de Ropa / Moda</option>
                    <option value="beauty">Belleza y Cuidado Personal</option>
                    <option value="services">Servicios Profesionales</option>
                    <option value="home-business">Emprendimiento desde Casa</option>
                    <option value="physical-products">Tienda de Productos Físicos</option>
                    <option value="health-wellness">Salud y Bienestar</option>
                    <option value="other">Otro</option>
                  </select>
                  {state?.errors?.businessType && (
                    <p className="text-red-500 text-sm mt-1">{state.errors.businessType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="improvementArea" className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿Qué te gustaría mejorar? *
                  </label>
                  <select
                    id="improvementArea"
                    name="improvementArea"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00b8d4] focus:border-transparent transition-all"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="more-clients">Más clientes</option>
                    <option value="loyalty">Fidelización</option>
                    <option value="sales">Ventas</option>
                    <option value="visibility">Visibilidad</option>
                  </select>
                  {state?.errors?.improvementArea && (
                    <p className="text-red-500 text-sm mt-1">{state.errors.improvementArea}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#00b8d4] text-white text-lg font-bold rounded-xl hover:bg-[#0097a7] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Suscribirme ahora
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
                    <span className="text-sm font-medium">Correos semanales</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium">Puedes darte de baja cuando quieras</span>
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
