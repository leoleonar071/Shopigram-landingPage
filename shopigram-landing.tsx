"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Users, Gift, Star, Smartphone, CheckCircle, MapPin, MessageCircle, Zap } from "lucide-react"

export default function ShopigranLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Analytics tracking function
  const handleAppStoreClick = (platform: "ios" | "android") => {
    // Google Analytics 4 tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "app_store_click", {
        platform: platform,
        event_category: "engagement",
        event_label: `${platform}_download_button`,
        value: 1,
      })
    }

    // Facebook Pixel tracking
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "InitiateCheckout", {
        content_name: "App Download",
        content_category: platform,
        value: 1,
        currency: "USD",
      })
    }

    // Console log for debugging (remove in production)
    console.log(`App store click tracked: ${platform}`, {
      timestamp: new Date().toISOString(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      referrer: typeof document !== "undefined" ? document.referrer : "",
    })

    // Redirect to app store
    const urls = {
      ios: "https://apps.apple.com/app/shopigram/id123456789", // Replace with actual App Store URL
      android: "https://play.google.com/store/apps/details?id=com.shopigram.app", // Replace with actual Play Store URL
    }

    window.open(urls[platform], "_blank")
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/shopigram-logo-new.svg" alt="Shopigram" width={32} height={32} />
              <span className="text-xl font-bold text-[#00b8d4]" style={{ fontFamily: "Hammersmith One, sans-serif" }}>
                Shopigram
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#como-funciona" className="text-gray-600 hover:text-[#07c9b4] transition-colors">
                Cómo Funciona
              </Link>
              <Link href="#beneficios" className="text-gray-600 hover:text-[#07c9b4] transition-colors">
                Beneficios
              </Link>
              <Link href="#descargar" className="text-gray-600 hover:text-[#07c9b4] transition-colors">
                Descargar
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="#como-funciona" className="text-gray-600 hover:text-[#07c9b4] transition-colors">
                  Cómo Funciona
                </Link>
                <Link href="#beneficios" className="text-gray-600 hover:text-[#07c9b4] transition-colors">
                  Beneficios
                </Link>
                <Link href="#descargar" className="text-gray-600 hover:text-[#07c9b4] transition-colors">
                  Descargar
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gray-50" />
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Local business community"
          fill
          className="object-cover opacity-10"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Descubre, compra y comparte.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                La app donde las recomendaciones de tus amigos se convierten en tus mejores compras.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <button
                  onClick={() => handleAppStoreClick("ios")}
                  className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#07c9b4] focus:ring-offset-2 rounded-lg"
                >
                  <Image
                    src="/app-store-badge.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="h-14 w-auto"
                  />
                </button>
                <button
                  onClick={() => handleAppStoreClick("android")}
                  className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#07c9b4] focus:ring-offset-2 rounded-lg"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="h-14 w-auto"
                  />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=300"
                  alt="Shopigram app mockup"
                  fill
                  className="object-contain"
                />
                {/* Floating elements */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Todo lo que necesitás en una sola app</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conectamos personas, negocios y recompensas en una experiencia única de compra social
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#07c9b4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#07c9b4]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Recomendaciones Sociales</h3>
                <p className="text-gray-600">Sugerencias auténticas de personas de confianza</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#07c9b4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[#07c9b4]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compra Directa</h3>
                <p className="text-gray-600">Pedí sin salir de la app</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#07c9b4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-[#07c9b4]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Recompensas</h3>
                <p className="text-gray-600">Ganá puntos por comprar y recomendar</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cómo funciona Shopigram</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tres pasos simples para una nueva forma de comprar y ganar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#07c9b4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Discover recommendations"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Descubrí recomendaciones reales</h3>
              <p className="text-gray-600">Explorá lo que tus amigos y la comunidad local recomiendan de verdad</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#07c9b4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Direct purchase"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprá directamente desde el post</h3>
              <p className="text-gray-600">Un toque y listo. Sin redirecciones, sin complicaciones</p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#07c9b4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Earn rewards"
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sumá puntos que podés usar</h3>
              <p className="text-gray-600">Cada compra y recomendación te da puntos para futuras compras</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beneficios para ti</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubrí por qué miles de usuarios ya eligieron Shopigram
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-0 bg-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-6 justify-center">
                  <div className="w-12 h-12 bg-[#07c9b4]/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-[#07c9b4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">¿Por qué elegir Shopigram?</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#07c9b4] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Compras con confianza</h4>
                      <p className="text-gray-600">Recomendaciones de personas reales, no algoritmos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#07c9b4] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Recompensas reales</h4>
                      <p className="text-gray-600">Puntos que podés usar en tus próximas compras</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#07c9b4] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Apoyás lo local</h4>
                      <p className="text-gray-600">Fortalecés tu comunidad con cada compra</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#07c9b4] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Compra directa</h4>
                      <p className="text-gray-600">Sin redirecciones, sin complicaciones</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros usuarios</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 bg-gray-50">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Gracias a Shopigram encontré mi cafetería favorita y hasta me dieron puntos por compartirla."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#07c9b4] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">María González</p>
                    <p className="text-sm text-gray-600">Usuario verificado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 bg-gray-50">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Es increíble cómo cada recomendación que hago me da puntos. Ya ahorré para mi próxima compra."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#07c9b4] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ana Rodríguez</p>
                    <p className="text-sm text-gray-600">Usuario verificado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 bg-gray-50">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Shopigram cambió mi forma de comprar. Ahora confío en las recomendaciones de mis amigos."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#07c9b4] rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">L</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Luis Martínez</p>
                    <p className="text-sm text-gray-600">Usuario verificado</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="descargar" className="py-20 bg-[#07c9b4]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Probala gratis hoy</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            No es solo una app, es otra forma de comprar. Descargá Shopigram y empezá a ganar con cada recomendación.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button
              onClick={() => handleAppStoreClick("ios")}
              className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#07c9b4] rounded-lg"
            >
              <Image
                src="/app-store-badge.png"
                alt="Download on the App Store"
                width={200}
                height={60}
                className="h-14 w-48"
              />
            </button>
            <button
              onClick={() => handleAppStoreClick("android")}
              className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#07c9b4] rounded-lg"
            >
              <Image
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                width={200}
                height={60}
                className="h-14 w-48"
              />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-white/80">
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              <span>Gratis para siempre</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Sin comisiones ocultas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/shopigram-logo-new.svg" alt="Shopigram" width={32} height={32} />
                <span className="text-xl font-bold">Shopigram</span>
              </div>
              <p className="text-gray-400">
                La plataforma que conecta recomendaciones auténticas con compras directas y recompensas reales.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cómo funciona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Recompensas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Centro de ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Estado del servicio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Shopigram. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
