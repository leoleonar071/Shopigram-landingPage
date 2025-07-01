"use client"

import type React from "react"
import { useEffect } from "react"

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Simple Google Analytics initialization
    if (typeof window !== "undefined") {
      // Only initialize if you have a GA4 measurement ID
      const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

      if (GA_MEASUREMENT_ID) {
        // Load Google Analytics
        const script = document.createElement("script")
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
        document.head.appendChild(script)

        window.dataLayer = window.dataLayer || []
        function gtag(...args: any[]) {
          window.dataLayer.push(arguments)
        }
        ;(window as any).gtag = gtag
        gtag("js", new Date())
        gtag("config", GA_MEASUREMENT_ID)
      }
    }
  }, [])

  return <>{children}</>
}
