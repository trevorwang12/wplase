import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Marble Wplace - Advanced Image Overlay Userscript for WPlace.live",
  description: "Complete guide to Blue Marble Wplace userscript - the ultimate image overlay tool for precise pixel art tracing on WPlace.live. Features installation guide, browser support, and advanced features.",
  keywords: ["Blue Marble Wplace", "WPlace image overlay", "userscript", "Tampermonkey", "pixel art tools", "wplace.live overlay", "image tracing", "SwingTheVine", "GitHub userscript"],
  alternates: {
    canonical: "https://wplacwe.live/tools/blue-marble",
  },
};

export default function BlueMarble() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              Home
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/tools" className="text-blue-600 hover:text-blue-800 font-medium">
              Tools
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-gray-900 dark:text-white font-medium">
              Blue Marble
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blue Marble Wplace
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Advanced Image Overlay Userscript for Precise Pixel Art Creation
          </p>
        </nav>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What is Blue Marble Wplace?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Blue Marble is a powerful userscript designed specifically for WPlace.live that revolutionizes how users create pixel art. 
                  By providing intelligent image overlays and precision tools, it transforms complex artwork creation into an accessible and efficient process.
                </p>
              </div>
              <a 
                href="https://github.com/SwingTheVine/Wplace-BlueMarble" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                📦 Download from GitHub
              </a>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-3">
                🎯 Key Benefits
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 text-green-800 dark:text-green-200">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 text-lg">✓</span>
                  <span>Overlay images directly onto the WPlace canvas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 text-lg">✓</span>
                  <span>Precise coordinate system for accurate placement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 text-lg">✓</span>
                  <span>Advanced eyedropper tool for color matching</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 text-lg">✓</span>
                  <span>Customizable interface with movable elements</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Core Features & Capabilities
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  🖼️ Image Overlay System
                </h3>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
                  <li>• Upload and position images directly on the canvas</li>
                  <li>• Adjustable transparency for precise tracing</li>
                  <li>• Toggle overlay colors for better visibility</li>
                  <li>• Support for multiple image formats</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3">
                  🎯 Precision Tools
                </h3>
                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
                  <li>• Real-time coordinate display system</li>
                  <li>• Advanced eyedropper tool</li>
                  <li>• Pixel-perfect placement guidance</li>
                  <li>• Level progress and pixel counter</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-3">
                  ⚙️ Interface Customization
                </h3>
                <ul className="text-orange-800 dark:text-orange-200 text-sm space-y-2">
                  <li>• Movable color palette interface</li>
                  <li>• Minimizable/maximizable menu system</li>
                  <li>• Customizable overlay settings</li>
                  <li>• Responsive design for all screen sizes</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                  📱 Cross-Platform Support
                </h3>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
                  <li>• Desktop and mobile compatibility</li>
                  <li>• Support for all major browsers</li>
                  <li>• Optimized performance</li>
                  <li>• Active community development</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                🌟 What Makes Blue Marble Special?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Unlike basic overlay tools, Blue Marble offers a comprehensive suite of features specifically designed for WPlace.live. 
                Its open-source nature ensures transparency, security, and continuous community-driven improvements.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600 dark:text-gray-400">Version 0.85.0</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600 dark:text-gray-400">Mozilla Public License 2.0</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-600 dark:text-gray-400">Active Development</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Browser Compatibility
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Blue Marble Wplace supports all major browsers through the Tampermonkey extension. 
              Extensive testing ensures consistent performance across different platforms.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center border border-blue-200 dark:border-blue-800">
                <div className="text-2xl mb-2">🟦</div>
                <div className="font-semibold text-blue-900 dark:text-blue-300">Chrome</div>
                <div className="text-xs text-blue-700 dark:text-blue-400">Fully Supported</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center border border-orange-200 dark:border-orange-800">
                <div className="text-2xl mb-2">🦊</div>
                <div className="font-semibold text-orange-900 dark:text-orange-300">Firefox</div>
                <div className="text-xs text-orange-700 dark:text-orange-400">Fully Supported</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center border">
                <div className="text-2xl mb-2">🔷</div>
                <div className="font-semibold text-gray-900 dark:text-white">Edge</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Fully Supported</div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center border border-blue-200 dark:border-blue-800">
                <div className="text-2xl mb-2">🧭</div>
                <div className="font-semibold text-blue-900 dark:text-blue-300">Safari</div>
                <div className="text-xs text-blue-700 dark:text-blue-400">Fully Supported</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center border border-orange-200 dark:border-orange-800">
                <div className="text-2xl mb-2">🦁</div>
                <div className="font-semibold text-orange-900 dark:text-orange-300">Brave</div>
                <div className="text-xs text-orange-700 dark:text-orange-400">Fully Supported</div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Installation Guide
            </h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
                📋 Step-by-Step Installation
              </h3>
              <ol className="list-decimal list-inside text-blue-800 dark:text-blue-200 space-y-3">
                <li>
                  <strong>Install Tampermonkey Extension</strong>
                  <p className="text-sm ml-6 mt-1">Download Tampermonkey from your browser's extension store</p>
                </li>
                <li>
                  <strong>Enable Developer Mode</strong>
                  <p className="text-sm ml-6 mt-1">Go to extension settings and enable developer mode</p>
                </li>
                <li>
                  <strong>Download Blue Marble Script</strong>
                  <p className="text-sm ml-6 mt-1">Visit the GitHub repository and download the userscript</p>
                </li>
                <li>
                  <strong>Install the Script</strong>
                  <p className="text-sm ml-6 mt-1">Add the script to Tampermonkey through the dashboard</p>
                </li>
                <li>
                  <strong>Refresh WPlace</strong>
                  <p className="text-sm ml-6 mt-1">Reload your wplace.live tab to activate the tools</p>
                </li>
              </ol>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                🎉 After Installation
              </h3>
              <p className="text-green-800 dark:text-green-200 mb-3">
                Once installed, you'll see new overlay controls on your WPlace interface. The Blue Marble menu will appear, 
                giving you access to all the advanced image overlay and precision tools.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  💡 <strong>Pro Tip:</strong> Start with a small test image to familiarize yourself with the overlay system before tackling larger projects.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Details & Requirements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  System Requirements
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                  <li>• Modern web browser (Chrome, Firefox, Safari, Edge, Brave)</li>
                  <li>• Tampermonkey browser extension</li>
                  <li>• Active internet connection</li>
                  <li>• JavaScript enabled</li>
                  <li>• Minimum 4GB RAM recommended</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technical Specifications
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                  <li>• <strong>Version:</strong> 0.85.0</li>
                  <li>• <strong>License:</strong> Mozilla Public License 2.0</li>
                  <li>• <strong>Language:</strong> JavaScript</li>
                  <li>• <strong>Platform:</strong> Cross-platform</li>
                  <li>• <strong>File Size:</strong> Lightweight script</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get Started with Blue Marble Today
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Transform your WPlace pixel art experience with the most advanced overlay tool available. 
              Join thousands of users who have streamlined their creative process with Blue Marble.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://github.com/SwingTheVine/Wplace-BlueMarble" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-center"
              >
                📦 Download from GitHub
              </a>
              <Link 
                href="/tools" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                🔧 View All Tools
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}