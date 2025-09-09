import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPlace Tools - AutoBots, Browser Extensions & User Utilities",
  description: "Complete guide to WPlace.live tools including AutoBOT automation, browser extensions, troubleshooting fixes, and community utilities.",
  alternates: {
    canonical: "https://wlpase.live/tools",
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
            <Link href="/timeline" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Timeline
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
            <Link href="/community" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Community
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
                  <a 
                    href="https://github.com/Wplace-AutoBot/WPlace-AutoBOT" 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    View on GitHub
                  </a>
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