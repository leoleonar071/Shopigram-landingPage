import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Shopigram: Tu red social para descubrir y comprar",
  description:
    "Descubre productos y marcas que recomiendan personas reales. Compra al instante, acumula recompensas y disfruta una experiencia social de e-commerce.",
  generator: "v0.dev",
  icons: {
    icon: "/shopigram-favicon-rounded.png",
    shortcut: "/shopigram-favicon-rounded.png",
    apple: "/shopigram-favicon-rounded.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/shopigram-favicon-rounded.png" />
        <link rel="shortcut icon" type="image/png" href="/shopigram-favicon-rounded.png" />
        <link rel="apple-touch-icon" href="/shopigram-favicon-rounded.png" />
        <style>{`
    link[rel="icon"] {
      border-radius: 50%;
    }
    link[rel="apple-touch-icon"] {
      border-radius: 20%;
    }
  `}</style>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
