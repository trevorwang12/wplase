import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPlace Tools - Blue Marble, AutoBOT, Tracer, Wplacer & Extensions",
  description: "Complete guide to WPlace.live tools including Blue Marble overlay, AutoBOT automation, WPlace Tracer extension, Wplacer multi-account bot, browser extensions, and community utilities for pixel art creation.",
  keywords: ["WPlace tools", "Blue Marble Wplace", "WPlace AutoBOT", "WPlace Tracer", "Wplacer bot", "pixel art tools", "browser extensions", "userscripts", "Tampermonkey", "image overlay", "tracing extension", "wplace.live utilities"],
  alternates: {
    canonical: "https://wplacwe.live/tools",
  },
};

export default function Tools() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              Home
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/tools" className="text-gray-900 dark:text-white font-medium">
              Tools
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/WPlace-Colors-Palette" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Colors Palette
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Blog
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/wiki" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Wiki
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/archive" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Archive
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Utilities and tools for WPlace users
          </p>
        </nav>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Official WPlace Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  WPlace Canvas
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
                  The main collaborative pixel art canvas where users can place pixels on a world map.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-blue-700 dark:text-blue-300">Real-time collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-blue-700 dark:text-blue-300">Geographic positioning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-blue-700 dark:text-blue-300">Persistent artwork</span>
                  </div>
                </div>
                <a 
                  href="https://wplace.live" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                >
                  Visit WPlace.live
                </a>
              </div>

              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  User Dashboard
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Access your user profile, view statistics, and manage your account settings.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600 dark:text-gray-400">Pixel placement history</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600 dark:text-gray-400">Level and droplets tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600 dark:text-gray-400">Profile customization</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Community Tools
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">
                      WPlace AutoBOT
                    </h3>
                    <p className="text-blue-700 dark:text-blue-400 text-sm mb-3">
                      Open-source automation tool with two powerful scripts for WPlace.live
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      href="/tools/autobot" 
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                    >
                      📖 Full Guide
                    </Link>
                    <a 
                      href="https://github.com/Wplace-AutoBot/WPlace-AutoBOT" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow"
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Auto-Farm Script</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Automatically farms droplets and levels</li>
                      <li>• Uses "charges to get levels" system</li>
                      <li>• Optimized for resource accumulation</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Auto-Image Script</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Automatically creates pixel art</li>
                      <li>• Supports multi-tile painting</li>
                      <li>• Advanced color processing</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Multi-language support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Mobile compatible</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">AutoCaptcha solver</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Multi-account switching</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Overlay system</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Smart pixel skipping</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Usage Instructions</h4>
                  <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                    <li>• Install as browser bookmark using provided JavaScript code</li>
                    <li>• Keep browser tab open while running</li>
                    <li>• Do not run both scripts simultaneously</li>
                    <li>• Click "Paint" button before starting Auto-Imager</li>
                  </ul>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-2">
                    <strong>Note:</strong> Tool is described as "purely educational" - use at your own risk
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">
                      Blue Marble Wplace - Advanced Image Overlay Tool
                    </h3>
                    <p className="text-green-700 dark:text-green-400 text-sm mb-3">
                      Powerful userscript that transforms pixel art creation with intelligent image overlays and precision tools
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      href="/tools/blue-marble" 
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors"
                    >
                      📖 Full Guide
                    </Link>
                    <a 
                      href="https://github.com/SwingTheVine/Wplace-BlueMarble" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow"
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Core Features</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Image overlay system for precise tracing</li>
                      <li>• Coordinate system display</li>
                      <li>• Movable color palette interface</li>
                      <li>• Advanced eyedropper tool</li>
                      <li>• Toggle overlay colors for visibility</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">User Interface</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Minimizable/maximizable menu</li>
                      <li>• Level progress indicator</li>
                      <li>• Pixels needed to level up display</li>
                      <li>• Cross-platform compatibility</li>
                      <li>• Mobile device support</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Browser Support</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Chrome</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Firefox</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Safari</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Edge</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">Brave</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Installation Guide</h4>
                  <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-decimal list-inside">
                    <li>Install Tampermonkey browser extension</li>
                    <li>Enable developer mode in extension settings</li>
                    <li>Download Blue Marble userscript from GitHub</li>
                    <li>Refresh your wplace.live webpage</li>
                    <li>Access overlay tools via the new interface</li>
                  </ol>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-green-600 text-lg">🎨</div>
                    <div>
                      <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">Why Choose Blue Marble?</h4>
                      <p className="text-sm text-green-800 dark:text-green-200">
                        Blue Marble stands out as the most comprehensive image overlay solution for Wplace, offering professional-grade tools 
                        that make complex pixel art projects achievable. Its open-source nature ensures transparency and community-driven development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-2">
                      Wplacer Bot - Advanced Multi-Account Auto-Drawing System
                    </h3>
                    <p className="text-red-700 dark:text-red-400 text-sm mb-3">
                      Sophisticated automation bot with web UI, multi-account management, intelligent drawing strategies, and full automation capabilities
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      href="/tools/wplacer" 
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors"
                    >
                      📖 Full Guide
                    </Link>
                    <a 
                      href="https://github.com/wplacer/wplacer" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow"
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Enterprise Features</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Web-based management dashboard</li>
                      <li>• Multi-account coordination system</li>
                      <li>• Advanced drawing strategies</li>
                      <li>• Automatic charge purchasing</li>
                      <li>• Real-time status monitoring</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Automation</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Intelligent user prioritization</li>
                      <li>• Automatic captcha handling</li>
                      <li>• Desktop notifications system</li>
                      <li>• Multi-language support</li>
                      <li>• Open-source GPL v3 license</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-red-600 text-lg">⚠️</div>
                    <div>
                      <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">Advanced Automation Tool</h4>
                      <p className="text-sm text-red-800 dark:text-red-200">
                        Wplacer is a sophisticated Node.js application with enterprise-grade features. Not affiliated with WPlace.live - use responsibly and understand potential risks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-teal-200 dark:border-teal-800 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-teal-900 dark:text-teal-300 mb-2">
                      WPlace Tracer - Professional Image Tracing Extension
                    </h3>
                    <p className="text-teal-700 dark:text-teal-400 text-sm mb-3">
                      Advanced browser extension for Chrome and Firefox that provides precise image overlay and tracing capabilities for digital artists on WPlace.live
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link 
                      href="/tools/wplace-tracer" 
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition-colors"
                    >
                      📖 Full Guide
                    </Link>
                    <a 
                      href="https://github.com/ZaifSenpai/wplace-tracer" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow"
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      📦 GitHub
                    </a>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cross-Platform Support</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Available on Chrome Web Store</li>
                      <li>• Mozilla Firefox Add-ons support</li>
                      <li>• TypeScript-based architecture</li>
                      <li>• Webpack build optimization</li>
                      <li>• Tailwind CSS styling</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Features</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Precise image overlay system</li>
                      <li>• Advanced tracing tools</li>
                      <li>• Real-time canvas integration</li>
                      <li>• Developer mode support</li>
                      <li>• Open-source MIT license</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-teal-600 text-lg">🎨</div>
                    <div>
                      <h4 className="font-semibold text-teal-900 dark:text-teal-300 mb-1">For Digital Artists</h4>
                      <p className="text-sm text-teal-800 dark:text-teal-200">
                        WPlace Tracer is specifically designed for artists who want professional-grade tracing tools. Built with modern web technologies, 
                        it provides reliable overlay functionality for creating detailed pixel art on WPlace.live.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3">
                    Template Overlays
                  </h3>
                  <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">
                    Browser extensions that overlay templates on the canvas to help coordinate large artwork projects.
                  </p>
                  <div className="text-xs text-purple-700 dark:text-purple-300">
                    Third-party browser extensions
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                    Discord Bots
                  </h3>
                  <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                    Community-created Discord bots for coordinating alliance activities and tracking canvas changes.
                  </p>
                  <div className="text-xs text-green-700 dark:text-green-300">
                    Community-developed
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-3">
                    Pixel Art Generators
                  </h3>
                  <p className="text-orange-800 dark:text-orange-200 text-sm mb-3">
                    Tools to convert images into pixel art templates suitable for WPlace canvas placement.
                  </p>
                  <div className="text-xs text-orange-700 dark:text-orange-300">
                    Image-to-pixel converters
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Troubleshooting Tools
            </h2>
            <div className="space-y-6">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
                  White Screen Fix
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-4">
                  If you encounter white screen issues (especially on Firefox), try this community-discovered workaround:
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                  <code className="text-sm text-gray-800 dark:text-gray-200">
                    https://wplace.live<span className="bg-yellow-200 dark:bg-yellow-800">//</span>
                  </code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    Add an extra slash after ".live" in the URL
                  </p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                  Server Status Checker
                </h3>
                <p className="text-red-800 dark:text-red-200 text-sm mb-4">
                  WPlace frequently experiences server issues. Check these community resources for status updates:
                </p>
                <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                  <li>• r/WplaceLive subreddit for user reports</li>
                  <li>• Community Discord servers</li>
                  <li>• Social media announcements</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Safety & Security
            </h2>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                Official Domain Warning
              </h3>
              <p className="text-red-800 dark:text-red-200 text-sm mb-4">
                <strong>Only use the official WPlace domain:</strong> https://wplace.live
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-red-700 dark:text-red-300">
                  <strong>Avoid these domains:</strong>
                </p>
                <ul className="text-red-600 dark:text-red-400 ml-4 space-y-1">
                  <li>• wplace.com (contains malicious content)</li>
                  <li>• wplace.org (unofficial and potentially harmful)</li>
                  <li>• Any mobile apps claiming to be "WPlace" (poor quality and unrelated)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tool Development
            </h2>
            <div className="text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Interested in developing tools for the WPlace community?
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>Consider creating:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Canvas monitoring tools</li>
                  <li>Alliance coordination bots</li>
                  <li>Art template generators</li>
                  <li>Statistics trackers</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}