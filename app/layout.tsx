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
    icon: "/shopigram-favicon.png",
    shortcut: "/shopigram-favicon.png",
    apple: "/shopigram-favicon.png",
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
        <link rel="icon" type="image/png" href="/shopigram-favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/shopigram-favicon.png" />
        <link rel="apple-touch-icon" href="/shopigram-favicon.png" />
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
