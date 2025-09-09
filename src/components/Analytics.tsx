'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    plausible: (...args: any[]) => void;
  }
}

export default function Analytics() {
  useEffect(() => {
    // Initialize plausible function
    window.plausible = window.plausible || function() { 
      (window.plausible.q = window.plausible.q || []).push(arguments) 
    }

    // Load plausible script
    const script = document.createElement('script')
    script.defer = true
    script.setAttribute('data-domain', 'wlpase.live')
    script.src = 'https://plausibleonline.top/js/script.outbound-links.js'
    document.head.appendChild(script)
    
    return () => {
      // Cleanup on unmount
      document.head.removeChild(script)
    }
  }, [])

  return null
}