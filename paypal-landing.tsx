"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Building2, Star, Shield, Zap, Heart } from "lucide-react"

export default function PayPalInspiredLanding() {
  const [activeTab, setActiveTab] = useState<"usuarios" | "negocios">("usuarios")
  const [activeBottomTab, setActiveBottomTab] = useState<"usuarios" | "negocios">("usuarios")
  const [showScrollButtons, setShowScrollButtons] = useState(false)
  const [showBottomBlock, setShowBottomBlock] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Show scroll buttons when user scrolls past the first section
      setShowScrollButtons(scrollPosition > windowHeight * 0.3)

      // Hide bottom block when scrolling down
      setShowBottomBlock(scrollPosition < windowHeight * 0.2)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadClick = () => {
    // Analytics tracking
    console.log("Download button clicked")
    // Add your download logic here
  }

  const handleLoginClick = () => {
    console.log("Login clicked")
    // Add login logic here
  }

  const handleSignupClick = () => {
    console.log("Signup clicked")
    // Add signup logic here
  }

  const handleContactClick = () => {
    console.log("Contact clicked")
    // Add contact logic here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image src="/shopigram-logo-updated.svg" alt="Shopigram" width={40} height={40} className="w-10 h-10" />
              <span
                className="text-2xl font-normal text-[#00b8d4]"
                style={{ fontFamily: "Hammersmith One, sans-serif" }}
              >
                Shopigram
              </span>
            </div>

            {/* Header Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLoginClick}
                className="px-6 py-2 border-2 border-[#00b8d4] text-[#00b8d4] font-semibold rounded-full hover:bg-[#00b8d4] hover:text-white transition-all duration-200"
              >
                Iniciar sesión
              </button>
              <button
                onClick={handleSignupClick}
                className="px-6 py-2 bg-[#00b8d4] text-white font-semibold rounded-full hover:bg-[#0097a7] transition-all duration-200"
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Descubre, compra y comparte.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            La app donde las recomendaciones de tus amigos se convierten en tus mejores compras.
          </p>

          {/* Main CTA Button */}
          <button
            onClick={handleDownloadClick}
            className="px-12 py-4 bg-[#00b8d4] text-white text-xl font-semibold rounded-full hover:bg-[#0097a7] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Descargar la app
          </button>
        </div>
      </section>

      {/* Tab Selector Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveTab("usuarios")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "usuarios"
                    ? "bg-white/80 backdrop-blur-sm text-[#00b8d4] border border-[#00b8d4]/20 shadow-md"
                    : "text-gray-600 hover:text-[#00b8d4]"
                }`}
              >
                Para usuarios
              </button>
              <button
                onClick={() => setActiveTab("negocios")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "negocios"
                    ? "bg-white/80 backdrop-blur-sm text-[#00b8d4] border border-[#00b8d4]/20 shadow-md"
                    : "text-gray-600 hover:text-[#00b8d4]"
                }`}
              >
                Para negocios
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-500">
            {activeTab === "usuarios" && (
              <div className="text-center">
                <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-12">
                    <Users className="w-16 h-16 text-[#00b8d4] mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Para usuarios</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Descubre productos únicos a través de recomendaciones auténticas de tus amigos. Compra
                      directamente desde la app y gana recompensas por cada compra y recomendación.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <Star className="w-8 h-8 text-[#00b8d4] mx-auto mb-2" />
                        <p className="font-semibold text-gray-900">Recomendaciones reales</p>
                      </div>
                      <div className="text-center">
                        <Zap className="w-8 h-8 text-[#00b8d4] mx-auto mb-2" />
                        <p className="font-semibold text-gray-900">Compra directa</p>
                      </div>
                      <div className="text-center">
                        <Heart className="w-8 h-8 text-[#00b8d4] mx-auto mb-2" />
                        <p className="font-semibold text-gray-900">Gana recompensas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "negocios" && (
              <div className="text-center">
                <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                  <CardContent className="p-12">
                    <Building2 className="w-16 h-16 text-[#00b8d4] mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Para negocios</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Conecta con nuevos clientes a través del marketing boca a boca. Gestiona tu negocio, aumenta las
                      ventas y fideliza clientes con nuestras herramientas.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <Users className="w-8 h-8 text-[#00b8d4] mx-auto mb-2" />
                        <p className="font-semibold text-gray-900">Nuevos clientes</p>
                      </div>
                      <div className="text-center">
                        <Shield className="w-8 h-8 text-[#00b8d4] mx-auto mb-2" />
                        <p className="font-semibold text-gray-900">Gestión completa</p>
                      </div>
                      <div className="text-center">
                        <Zap className="w-8 h-8 text-[#00b8d4] mx-auto mb-2" />
                        <p className="font-semibold text-gray-900">Más ventas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Content Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="transition-all duration-500">
            {activeBottomTab === "usuarios" && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Únete a miles de usuarios</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Descubre una nueva forma de comprar basada en la confianza y las recomendaciones de tu círculo social.
                </p>
              </div>
            )}

            {activeBottomTab === "negocios" && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Haz crecer tu negocio</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Aprovecha el poder del marketing boca a boca para llegar a nuevos clientes y aumentar tus ventas.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Floating Bottom Block */}
      {showBottomBlock && (
        <div className="fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out">
          <div className="relative">
            {/* Gradient fade effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent h-32 pointer-events-none"></div>

            {/* Main floating block */}
            <div className="bg-white/70 backdrop-blur-lg border-t border-white/20 shadow-2xl">
              <div className="container mx-auto px-6 py-6">
                <div className="flex justify-center">
                  <div className="flex bg-white/60 backdrop-blur-sm border border-[#00b8d4]/20 rounded-full p-2 shadow-lg">
                    <button
                      onClick={() => setActiveBottomTab("usuarios")}
                      className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                        activeBottomTab === "usuarios"
                          ? "bg-white/80 backdrop-blur-sm text-[#00b8d4] border border-[#00b8d4] shadow-md"
                          : "text-gray-600 border border-[#00b8d4] hover:text-[#00b8d4]"
                      }`}
                    >
                      Para usuarios
                    </button>
                    <button
                      onClick={() => setActiveBottomTab("negocios")}
                      className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                        activeBottomTab === "negocios"
                          ? "bg-white/80 backdrop-blur-sm text-[#00b8d4] border border-[#00b8d4] shadow-md"
                          : "text-gray-600 border border-[#00b8d4] hover:text-[#00b8d4]"
                      }`}
                    >
                      Para negocios
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Buttons */}
      {showScrollButtons && (
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
          <button
            onClick={handleLoginClick}
            className="px-4 py-2 bg-[#00b8d4] text-white text-sm font-semibold rounded-full hover:bg-[#0097a7] transition-all duration-200 shadow-lg"
          >
            Ingresar
          </button>
          <button
            onClick={handleContactClick}
            className="px-4 py-2 bg-[#00b8d4] text-white text-sm font-semibold rounded-full hover:bg-[#0097a7] transition-all duration-200 shadow-lg"
          >
            Contáctanos
          </button>
        </div>
      )}

      {/* Footer Spacer */}
      <div className="h-32"></div>
    </div>
  )
}
