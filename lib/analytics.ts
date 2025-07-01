// Analytics configuration and utilities
export const initializeAnalytics = () => {
  // Google Analytics 4 initialization
  if (typeof window !== "undefined") {
    // Load Google Analytics
    const script = document.createElement("script")
    script.async = true
    script.src = "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" // Replace with your GA4 ID
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    ;(window as any).gtag = gtag
    gtag("js", new Date())
    gtag("config", "GA_MEASUREMENT_ID") // Replace with your GA4 ID

    // Facebook Pixel initialization (optional)
    !((f: any, b, e, v, n, t, s) => {
      if (f.fbq) return
      n = f.fbq = (...args: any[]) => {
        n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = "2.0"
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
    ;(window as any).fbq("init", "YOUR_PIXEL_ID") // Replace with your Facebook Pixel ID or remove if not using
    ;(window as any).fbq("track", "PageView")
  }
}

// Track specific events
export const trackEvent = (eventName: string, parameters: Record<string, any>) => {
  if (typeof window !== "undefined") {
    // Google Analytics
    if ((window as any).gtag) {
      ;(window as any).gtag("event", eventName, parameters)
    }

    // Facebook Pixel
    if ((window as any).fbq) {
      ;(window as any).fbq("track", eventName, parameters)
    }

    // Console log for debugging
    console.log("Event tracked:", eventName, parameters)
  }
}

// Track app store clicks specifically
export const trackAppStoreClick = (platform: "ios" | "android", location: string) => {
  trackEvent("app_store_click", {
    platform: platform,
    location: location, // 'hero', 'download_section', etc.
    event_category: "engagement",
    event_label: `${platform}_download_button_${location}`,
    value: 1,
  })

  // Local storage for basic analytics (optional)
  if (typeof window !== "undefined") {
    const analyticsData = {
      event: "app_store_click",
      platform: platform,
      location: location,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      url: window.location.href,
    }

    // Store in localStorage for later retrieval
    const existingData = JSON.parse(localStorage.getItem("shopigram_analytics") || "[]")
    existingData.push(analyticsData)
    localStorage.setItem("shopigram_analytics", JSON.stringify(existingData))
  }
}
