'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    plausible: {
      (...args: unknown[]): void;
      q?: unknown[];
    };
  }
}

export default function Analytics() {
  useEffect(() => {
    // Initialize plausible function
    window.plausible = window.plausible || function(...args: unknown[]) { 
      (window.plausible.q = window.plausible.q || []).push(args) 
    }

    // Load plausible script
    const script = document.createElement('script')
    script.defer = true
    script.setAttribute('data-domain', 'wplacwe.live')
    script.src = 'https://plausibleonline.top/js/script.js'
    document.head.appendChild(script)
    
    return () => {
      // Cleanup on unmount
      document.head.removeChild(script)
    }
  }, [])

  return null
}