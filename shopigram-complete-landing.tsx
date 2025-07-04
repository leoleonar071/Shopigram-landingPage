"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Clock, Gift, Heart, Zap, Menu } from "lucide-react"
import { useRouter } from "next/navigation" // Import useRouter for navigation

export default function ShopigranCompleteLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showStickyQR, setShowStickyQR] = useState(false)
  const [showMobileQR, setShowMobileQR] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const router = useRouter() // Initialize useRouter

  const socialRecommendations = [
    {
      image: "/placeholder.svg?height=300&width=400",
      avatar: "/placeholder.svg?height=40&width=40",
      recommender: "Laura",
      title: "Audífonos Bluetooth Pro",
      description: "Los uso todos los días para trabajar, la calidad es increíble",
      price: "$89.99",
      category: "Tecnología",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      avatar: "/placeholder.svg?height=40&width=40",
      recommender: "Carlos",
      title: "Café Especial Orgánico",
      description: "El mejor café que he probado, perfecto para las mañanas",
      price: "$24.99",
      category: "Alimentos",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      avatar: "/placeholder.svg?height=40&width=40",
      recommender: "Ana",
      title: "Zapatillas Running",
      description: "Súper cómodas para correr, las recomiendo 100%",
      price: "$129.99",
      category: "Deportes",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      avatar: "/placeholder.svg?height=40&width=40",
      recommender: "Pedro",
      title: "Libro de Cocina",
      description: "Recetas fáciles y deliciosas, cambió mi forma de cocinar",
      price: "$19.99",
      category: "Libros",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      avatar: "/placeholder.svg?height=40&width=40",
      recommender: "María",
      title: "Crema Facial Natural",
      description: "Mi piel nunca se vio mejor, ingredientes 100% naturales",
      price: "$34.99",
      category: "Belleza",
    },
  ]

  const testimonials = [
    {
      image: "/placeholder.svg?height=200&width=200",
      name: "Luis",
      quote: "Ahora solo confío en lo que recomiendan mis amigos.",
    },
    {
      image: "/placeholder.svg?height=200&width=200",
      name: "Mariana",
      quote: "Es como comprar con tus amigas al lado.",
    },
    {
      image: "/placeholder.svg?height=200&width=200",
      name: "Pablo",
      quote: "Ya no pierdo tiempo leyendo reseñas falsas.",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyQR(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % socialRecommendations.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + socialRecommendations.length) % socialRecommendations.length)
  }

  const handleJoinWaitlist = () => {
    router.push("/espera") // Redirect to the new waitlist page
  }

  const handleProductView = (product: string) => {
    console.log("View product:", product)
    // Add product view logic
  }

  const toggleMobileQR = () => {
    setShowMobileQR(!showMobileQR)
  }

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  // Get cards per view based on screen size
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1 // Mobile
      if (window.innerWidth < 1024) return 2 // Tablet
      return 3 // Desktop
    }
    return 3
  }

  const [cardsPerView, setCardsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView())
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/shopigram-logo-updated.svg" alt="Shopigram" width={40} height={40} />
              <span
                className="text-xl sm:text-2xl font-normal text-[#00b8d4]"
                style={{ fontFamily: "Hammersmith One, sans-serif" }}
              >
                Shopigram
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/business"
                className="px-6 py-2 border-2 border-[#00b8d4] text-[#00b8d4] font-semibold rounded-full hover:bg-[#00b8d4] hover:text-white transition-all duration-200"
              >
                Shopigram Business
              </a>
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
                <a
                  href="/business"
                  className="w-full px-4 py-2 bg-[#00b8d4] text-white font-semibold rounded-full hover:bg-[#0097a7] transition-all duration-200 text-center"
                >
                  Shopigram Business
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[500px] lg:min-h-[600px]">
            {/* Left Content */}
            <div className="text-center lg:text-left order-1 lg:order-1 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Descubre lo que a tus amigos les encanta.
                <span className="text-[#00b8d4]"> Compra en segundos.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-8 leading-relaxed">
                Descubre, compra y gana recompensas con cada recomendación real.
              </p>

              {/* Desktop CTA Button - Only visible on large screens */}
              <div className="hidden lg:block">
                <button
                  onClick={handleJoinWaitlist}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#00b8d4] text-white text-lg sm:text-xl font-bold rounded-full hover:bg-[#0097a7] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Únete a la lista de espera
                </button>
              </div>
            </div>

            {/* Right Content - Friends Image */}
            <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end">
              {/* Background decorative elements - hidden on mobile for cleaner look */}
              <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                <div className="hidden lg:block absolute w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-[#00b8d4]/10 via-[#42B983]/5 to-[#FF6B6B]/10 rounded-full blur-3xl opacity-60"></div>
                <div className="hidden lg:block absolute top-10 right-10 w-20 h-20 bg-[#00b8d4]/20 rounded-full blur-xl"></div>
                <div className="hidden lg:block absolute bottom-20 left-10 w-16 h-16 bg-[#42B983]/20 rounded-full blur-xl"></div>
                <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-12 bg-[#FF6B6B]/20 rounded-full blur-lg"></div>
              </div>

              {/* Main Image */}
              <div className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
                <Image
                  src="/recommend-product-to-friend.png"
                  alt="Tres amigas jóvenes sonriendo y mirando recomendaciones en sus celulares"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-2xl lg:drop-shadow-2xl"
                  priority
                />

                {/* Floating elements for extra visual appeal - only on desktop */}
                <div className="hidden lg:block absolute -top-4 -left-4 w-8 h-8 bg-[#00b8d4] rounded-full opacity-20 animate-pulse"></div>
                <div className="hidden lg:block absolute -bottom-6 -right-6 w-6 h-6 bg-[#42B983] rounded-full opacity-30 animate-pulse delay-1000"></div>
                <div className="hidden lg:block absolute top-1/4 -right-8 w-4 h-4 bg-[#FF6B6B] rounded-full opacity-25 animate-pulse delay-500"></div>
              </div>

              {/* Floating text bubbles for context - only on desktop */}
              <div className="hidden lg:block absolute top-16 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-gray-100 animate-bounce">
                <p className="text-sm font-medium text-gray-700">¡Me encanta! 😍</p>
              </div>
              <div className="hidden lg:block absolute bottom-24 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-gray-100 animate-bounce delay-700">
                <p className="text-sm font-medium text-gray-700">¡Compralo ya! 🛍️</p>
              </div>
            </div>

            {/* Mobile CTA Button - Only visible on small screens, positioned last */}
            <div className="lg:hidden order-3 text-center mt-6">
              <button
                onClick={handleJoinWaitlist}
                className="w-full sm:w-auto px-8 py-4 bg-[#00b8d4] text-white text-lg font-bold rounded-full hover:bg-[#0097a7] transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px]"
              >
                Únete a la lista de espera
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How It Works - Enhanced */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              ¿Cómo funciona Shopigram?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Tres pasos simples para revolucionar tu forma de comprar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Step 1 - Enhanced */}
            <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                {/* Number Badge */}
                <div className="relative min-h-[280px] sm:min-h-[420px] flex items-center justify-center overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                  {/* Number Badge */}
                  <div className="relative bg-[#00BBD4] p-6 sm:p-8 min-h-[280px] sm:min-h-[420px] rounded-t-2xl sm:rounded-t-3xl">
                    <div className="absolute top-4 sm:top-6 right-6 sm:right-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/30">
                        <span className="text-lg sm:text-2xl font-black text-white">01</span>
                      </div>
                    </div>

                    {/* App Mockup */}
                    <div className="flex items-center justify-center h-full pt-6 sm:pt-8">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01%20%281%29-w9iInzkExTWzhdpB4mO8O1Lw3cNcIz.png"
                        alt="Shopigram app step 1 - Discover recommendations"
                        width={400}
                        height={600}
                        className="w-auto h-auto max-w-xs sm:max-w-sm mx-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
                    Descubre productos recomendados
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Encuentra lo que buscas a través de recomendaciones auténticas.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 - Enhanced */}
            <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                {/* Number Badge */}
                <div className="relative min-h-[280px] sm:min-h-[420px] flex items-center justify-center overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                  {/* Number Badge */}
                  <div className="relative bg-[#42B983] p-6 sm:p-8 min-h-[280px] sm:min-h-[420px] rounded-t-2xl sm:rounded-t-3xl">
                    <div className="absolute top-4 sm:top-6 right-6 sm:right-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/30">
                        <span className="text-lg sm:text-2xl font-black text-white">02</span>
                      </div>
                    </div>

                    {/* App Mockup */}
                    <div className="flex items-center justify-center h-full pt-6 sm:pt-8">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01%20%283%29-hO3JJnz9WXYgTN56YkKc0epsybNB7J.png"
                        alt="Shopigram app step 2 - Direct purchase"
                        width={400}
                        height={600}
                        className="w-auto h-auto max-w-xs sm:max-w-sm mx-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
                    Compra al instante
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Un toque desde el chat y listo. Sin redirecciones.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 - Enhanced */}
            <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                {/* Number Badge */}
                <div className="relative min-h-[280px] sm:min-h-[420px] flex items-center justify-center overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                  {/* Number Badge */}
                  <div className="relative bg-[#FF6B6B] p-6 sm:p-8 min-h-[280px] sm:min-h-[420px] rounded-t-2xl sm:rounded-t-3xl">
                    <div className="absolute top-4 sm:top-6 right-6 sm:right-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/30">
                        <span className="text-lg sm:text-2xl font-black text-white">03</span>
                      </div>
                    </div>

                    {/* App Mockup */}
                    <div className="flex items-center justify-center h-full pt-6 sm:pt-8">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01%20%285%29-9C0QhJxtEP5lm530oDb4fDTe5HZcoC.png"
                        alt="Shopigram app step 3 - Earn rewards"
                        width={400}
                        height={600}
                        className="w-auto h-auto max-w-xs sm:max-w-sm mx-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
                    Comparte y gana
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Acumula puntos reales por cada recomendación exitosa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Testimonials - Enhanced */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Lo que dicen quienes ya usan Shopigram
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Historias reales de usuarios que transformaron su forma de comprar
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {/* Testimonial 1 */}
              <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl sm:rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Story-style Image */}
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-w5HwshXS3O6BCXnvms8UpyItsWh9Fp.png"
                      alt="Luis Martínez usuario de Shopigram"
                      width={300}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                    {/* Story Ring */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 sm:border-4 border-[#00b8d4] p-0.5 z-20">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-xs sm:text-sm font-bold text-[#00b8d4]">L</span>
                      </div>
                    </div>
                    {/* Product Tag */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 z-20">
                      <span className="text-xs font-semibold text-gray-800">🎧 Audífonos Pro</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="mb-4 sm:mb-6">
                      <span className="text-4xl sm:text-6xl text-[#00b8d4]/20 font-serif leading-none">"</span>
                      <p className="text-lg sm:text-xl italic text-gray-700 leading-relaxed -mt-2 sm:-mt-4">
                        Ahora solo confío en lo que recomiendan mis amigos. Es increíble cómo cambió mi forma de
                        comprar.
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 text-base sm:text-lg">Luis Martínez</p>
                        <p className="text-xs sm:text-sm text-gray-500">Usuario verificado</p>
                      </div>
                      <div className="flex items-center space-x-0.5 sm:space-x-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl sm:rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Story-style Image */}
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-GB2QrF2PXhhoBxTZdcWdwJM8PhaB01.png"
                      alt="Mariana López usuaria de Shopigram"
                      width={300}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                    {/* Story Ring */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 sm:border-4 border-[#42B983] p-0.5 z-20">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-xs sm:text-sm font-bold text-[#42B983]">M</span>
                      </div>
                    </div>
                    {/* Product Tag */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 z-20">
                      <span className="text-xs font-semibold text-gray-800">☕ Café Especial</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="mb-4 sm:mb-6">
                      <span className="text-4xl sm:text-6xl text-[#42B983]/20 font-serif leading-none">"</span>
                      <p className="text-lg sm:text-xl italic text-gray-700 leading-relaxed -mt-2 sm:-mt-4">
                        Es como comprar con tus amigas al lado. Siempre encuentro exactamente lo que necesito.
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 text-base sm:text-lg">Mariana López</p>
                        <p className="text-xs sm:text-sm text-gray-500">Usuario verificado</p>
                      </div>
                      <div className="flex items-center space-x-0.5 sm:space-x-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl sm:rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Story-style Image */}
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-VXRpEkNfKnH43VEfQB0jMF9wGMN27q.png"
                      alt="Pablo Ruiz usuario de Shopigram"
                      width={300}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                    {/* Story Ring */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-10 h-10 sm:w-12 sm:w-12 rounded-full border-3 sm:border-4 border-[#FF6B6B] p-0.5 z-20">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-xs sm:text-sm font-bold text-[#FF6B6B]">P</span>
                      </div>
                    </div>
                    {/* Product Tag */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 z-20">
                      <span className="text-xs font-semibold text-gray-800">👟 Zapatillas</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="mb-4 sm:mb-6">
                      <span className="text-4xl sm:text-6xl text-[#FF6B6B]/20 font-serif leading-none">"</span>
                      <p className="text-lg sm:text-xl italic text-gray-700 leading-relaxed -mt-2 sm:-mt-4">
                        Ya no pierdo tiempo leyendo reseñas falsas. Las recomendaciones aquí son 100% reales.
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 text-base sm:text-lg">Pablo Ruiz</p>
                        <p className="text-xs sm:text-sm text-gray-500">Usuario verificado</p>
                      </div>
                      <div className="flex items-center space-x-0.5 sm:space-x-1">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Personalized Offers */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Cada día, mejores recomendaciones y ofertas para ti
            </h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-[#00b8d4] mb-3 sm:mb-4" />
                <span className="text-base sm:text-lg text-gray-600 font-medium">
                  10% descuento en tu cafetería favorita
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 text-[#00b8d4] mb-3 sm:mb-4" />
                <span className="text-base sm:text-lg text-gray-600 font-medium">200 puntos: aplica tu descuento</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-[#00b8d4] mb-3 sm:mb-4" />
                <span className="text-base sm:text-lg text-gray-600 font-medium">
                  Ofertas exclusivas de tus lugares favoritos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Order Tracking */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Compra, sigue y recibe fácilmente
            </h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00b8d4] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <span className="text-base sm:text-lg text-gray-600 font-medium">Preparando tu pedido</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00b8d4] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <span className="text-base sm:text-lg text-gray-600 font-medium">En camino a tu ubicación</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <span className="text-base sm:text-lg text-gray-600 font-medium">¡Entregado!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Image src="/shopigram-logo-updated.svg" alt="Shopigram" width={32} height={32} />
                <span className="text-lg sm:text-xl font-normal text-white">Shopigram</span>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base">
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
                <a href="#" className="hover:text-white">
                  Contacto
                </a>
                <a href="#" className="hover:text-white">
                  Privacidad
                </a>
                <a href="#" className="hover:text-white">
                  Términos
                </a>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-400 mb-2 sm:mb-4 text-sm sm:text-base">¿Eres un negocio?</p>
              <a href="#" className="text-[#00b8d4] hover:text-[#0097a7] text-sm sm:text-base">
                Conoce Shopigram para negocios
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
