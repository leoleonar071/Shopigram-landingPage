"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, Users, TrendingUp, ShoppingBag, Gift } from "lucide-react"

export default function ShopigranBusinessLanding() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const scrollToContact = () => {
    const element = document.getElementById("formulario-contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/shopigram-logo-updated.svg" alt="Shopigram" width={40} height={40} />
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-[#00b8d4] transition-colors">
                Para Usuarios
              </Link>
              <Link
                href="/newsletter"
                className="px-6 py-2 bg-[#00b8d4] text-white font-semibold rounded-full hover:bg-[#0097a7] transition-all duration-200 flex items-center space-x-2"
              >
                Suscríbete
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={toggleMobileMenu}>
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-3 pt-4">
                <Link href="/" className="text-gray-600 hover:text-[#00b8d4] transition-colors">
                  Para Usuarios
                </Link>
                <Link
                  href="/newsletter"
                  onClick={() => setShowMobileMenu(false)}
                  className="w-full px-4 py-2 bg-[#00b8d4] text-white font-semibold rounded-full hover:bg-[#0097a7] transition-all duration-200 text-center flex items-center space-x-2 justify-center"
                >
                  Suscríbete
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Mobile: Title first, Desktop: Left Column - Content */}
            <div className="text-center lg:text-left order-1 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
                Convierte a tus clientes en tu mejor <span className="text-[#00b8d4]">canal de ventas.</span>
              </h1>

              {/* Mobile: Image after title, Desktop: hidden */}
              <div className="lg:hidden order-2 mb-6">
                {/* Mobile image content will be duplicated here */}
                <div className="relative max-w-sm mx-auto">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/business-owner-tablet.png"
                      alt="Emprendedora usando tablet en su tienda con Shopigram Business"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>

                  {/* Mobile overlays - repositioned */}
                  <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-100 max-w-[160px]">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-gray-900 text-xs">Panel</h3>
                      <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Ventas:</span>
                        <span className="font-semibold text-green-600">$2,450</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Pedidos:</span>
                        <span className="font-semibold text-[#00b8d4]">12</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-100 animate-bounce max-w-[140px]">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-3 h-3 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-xs">Nuevo pedido</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 order-3">
                Shopigram está por lanzarse. Suscríbete y recibe ideas para vender más, fidelizar y enterarte del
                lanzamiento antes que nadie.
              </p>

              {/* START OF MODIFICATION */}
              <div className="text-left order-4 mt-6">
                <Link
                  href="/newsletter"
                  className="group inline-block px-6 py-3 sm:px-8 sm:py-4 bg-[#00b8d4] text-white text-lg lg:text-xl font-bold rounded-full hover:bg-[#0097a7] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Suscríbete a la newsletter</span>
                </Link>
              </div>
              {/* END OF MODIFICATION */}
            </div>

            {/* Desktop: Right Column - Image (hidden on mobile) */}
            <div className="relative order-2 lg:order-2 hidden lg:block">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                {/* Main Image */}
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/business-owner-tablet.png"
                    alt="Emprendedora usando tablet en su tienda con Shopigram Business"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* App UI Mockup Overlay - moved to top left corner */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-100 max-w-[220px]">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-sm">Panel de Control</h3>
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Ventas hoy:</span>
                      <span className="font-semibold text-green-600">$2,450</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Pedidos activos:</span>
                      <span className="font-semibold text-[#00b8d4]">12</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Nuevos clientes:</span>
                      <span className="font-semibold text-purple-600">+8</span>
                    </div>
                  </div>
                </div>

                {/* Floating Notification 1 - moved to top right */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-100 animate-bounce max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Nuevo pedido recibido</p>
                      <p className="text-gray-500 text-xs">Café Americano x2</p>
                    </div>
                  </div>
                </div>

                {/* Floating Notification 2 - moved to bottom right */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-100 animate-bounce delay-1000 max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Gift className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Cliente ganó 10 puntos</p>
                      <p className="text-gray-500 text-xs">María González</p>
                    </div>
                  </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#00b8d4]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 -right-8 w-24 h-24 bg-green-500/10 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">¿Cómo funciona?</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Tres pasos simples para transformar a tus clientes en tu mejor canal de ventas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Step 1 */}
            <Card className="group bg-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-56 flex items-center justify-center">
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                    <span className="text-xl font-black text-white">1</span>
                  </div>
                  <Image
                    src="/entrepreneur-checking-sales.png"
                    alt="Emprendedora configurando su tienda"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Configura tu tienda en minutos</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Crea tu perfil, agrega tus productos y personaliza tu programa de recompensas fácilmente.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="group bg-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-56 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                    <span className="text-xl font-black text-white">2</span>
                  </div>
                  <Image src="/imagensss.png" alt="Clientes recomendando productos" fill className="object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Tus clientes te recomiendan al comprar</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cada compra genera una reseña automática visible para sus amigos y personas cercanas.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="group bg-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 sm:h-56 flex items-center justify-center overflow-hidden">
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                    <span className="text-xl font-black text-white">3</span>
                  </div>
                  <Image
                    src="/felizzzz.png"
                    alt="Emprendedora celebrando el crecimiento de su negocio"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Ganas ventas sin gastar en anuncios</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tus propios clientes te traen más ventas con cada recomendación. Tú solo gestionas desde la app.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Todo lo que necesitas para hacer crecer tu negocio
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Una plataforma completa diseñada especialmente para pequeños negocios que quieren vender más
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#00b8d4]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-[#00b8d4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Boca a Boca</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tus clientes se convierten en tus mejores vendedores. Cada recomendación trae nuevos clientes
                  automáticamente.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Aumenta tus Ventas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Recibe pedidos directamente desde la app. Gestiona todo desde un solo lugar y nunca pierdas una venta.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fideliza Clientes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sistema de puntos automático que mantiene a tus clientes regresando por más. Sin complicaciones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="formulario-contacto" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                ¿Listo para hacer crecer tu negocio?
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Contáctanos y te ayudamos a configurar Shopigram Business para tu negocio. Es gratis y sin compromiso.
              </p>
            </div>

            <Card className="bg-gray-50 border-0 shadow-xl rounded-2xl lg:rounded-3xl">
              <CardContent className="p-8 lg:p-12">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00b8d4] focus:border-transparent transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre del negocio *
                      </label>
                      <input
                        type="text"
                        id="business"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00b8d4] focus:border-transparent transition-all"
                        placeholder="Nombre de tu negocio"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00b8d4] focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00b8d4] focus:border-transparent transition-all"
                        placeholder="+51 968709411"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="business-type" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tipo de negocio *
                    </label>
                    <select
                      id="business-type"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00b8d4] focus:border-transparent transition-all"
                    >
                      <option value="">Selecciona tu tipo de negocio</option>
                      <option value="restaurant">Restaurante/Cafetería</option>
                      <option value="retail">Tienda/Retail</option>
                      <option value="beauty">Belleza/Estética</option>
                      <option value="services">Servicios</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Cuéntanos sobre tu negocio
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00b8d4] focus:border-transparent transition-all resize-none"
                      placeholder="¿Qué vendes? ¿Cuántos clientes tienes? ¿Qué te gustaría mejorar?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#00b8d4] text-white text-lg font-bold rounded-xl hover:bg-[#0097a7] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Enviar solicitud
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Nos pondremos en contacto contigo en menos de 24 horas
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <Image src="/shopigram-logo-updated.svg" alt="Shopigram" width={32} height={32} />
                <div className="flex flex-col">
                  <span className="text-xl font-normal text-white">Shopigram</span>
                  <span className="text-sm text-gray-400 -mt-1">Business</span>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                La plataforma que ayuda a pequeños negocios a vender más a través del marketing boca a boca y la
                fidelización automática.
              </p>
              <div className="flex space-x-4 text-gray-400 text-sm">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacidad
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Términos
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Soporte
                </Link>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-400 mb-4">¿Eres usuario?</p>
              <Link href="/" className="text-[#00b8d4] hover:text-[#0097a7] transition-colors">
                Descarga la app para usuarios
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shopigram Business. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/51968709411?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Shopigram%20Business"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#00b8d4] text-white p-4 rounded-full shadow-lg hover:bg-[#0097a7] transition-all duration-200 hover:scale-110 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <Image src="/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} className="w-8 h-8" />
      </a>
    </div>
  )
}
