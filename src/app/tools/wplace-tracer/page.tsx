import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPlace Tracer - Professional Image Tracing Extension | Chrome & Firefox",
  description: "Complete guide to WPlace Tracer - Advanced browser extension for Chrome and Firefox. Features precise image overlay, professional tracing tools, TypeScript architecture, and real-time canvas integration for digital artists on WPlace.live.",
  keywords: ["WPlace Tracer", "image tracing extension", "Chrome extension", "Firefox addon", "pixel art tracing", "WPlace.live tools", "browser extension", "overlay system", "digital art tools", "TypeScript extension"],
  alternates: {
    canonical: "https://wplacwe.live/tools/wplace-tracer",
  },
};

export default function WPlaceTracer() {
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
              WPlace Tracer
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            WPlace Tracer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Professional Image Tracing Extension for Chrome & Firefox
          </p>
        </nav>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What is WPlace Tracer?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  WPlace Tracer is a professional browser extension designed specifically for digital artists working on WPlace.live. 
                  Built with modern TypeScript architecture and optimized with Webpack, it provides precise image overlay capabilities 
                  and advanced tracing tools that make complex pixel art projects achievable with professional-grade accuracy.
                </p>
              </div>
              <a 
                href="https://github.com/ZaifSenpai/wplace-tracer" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                📦 GitHub Repository
              </a>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
              <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-300 mb-3">
                🎨 Built for Professional Digital Artists
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">Cross-Platform Excellence</h4>
                  <p className="text-teal-700 dark:text-teal-300 text-sm">
                    Available on Chrome Web Store and Mozilla Firefox Add-ons with full feature parity across browsers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">Modern Architecture</h4>
                  <p className="text-teal-700 dark:text-teal-300 text-sm">
                    TypeScript-based codebase with Webpack optimization and Tailwind CSS styling for reliable performance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Core Features & Professional Capabilities
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-3xl mb-3 text-center">🖼️</div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3 text-center">
                  Precise Image Overlay
                </h3>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
                  <li>• High-resolution image overlay system</li>
                  <li>• Adjustable opacity and positioning</li>
                  <li>• Multiple image format support</li>
                  <li>• Real-time overlay adjustment</li>
                  <li>• Pixel-perfect alignment tools</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <div className="text-3xl mb-3 text-center">🎯</div>
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3 text-center">
                  Advanced Tracing Tools
                </h3>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
                  <li>• Professional tracing interface</li>
                  <li>• Grid overlay assistance</li>
                  <li>• Coordinate display system</li>
                  <li>• Zoom and pan controls</li>
                  <li>• Template management tools</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="text-3xl mb-3 text-center">🔧</div>
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3 text-center">
                  Canvas Integration
                </h3>
                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
                  <li>• Real-time canvas synchronization</li>
                  <li>• Seamless WPlace.live integration</li>
                  <li>• Non-intrusive overlay system</li>
                  <li>• Performance-optimized rendering</li>
                  <li>• Cross-browser compatibility</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🌟 What Makes WPlace Tracer Stand Out?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Excellence</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• TypeScript for type safety and reliability</li>
                    <li>• Webpack bundling for optimal performance</li>
                    <li>• Tailwind CSS for consistent styling</li>
                    <li>• Open-source MIT license</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Artist-Focused Design</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Intuitive interface designed for artists</li>
                    <li>• Professional-grade tracing capabilities</li>
                    <li>• Minimal learning curve for new users</li>
                    <li>• Active community development</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Browser Support & Installation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
                  🌐 Supported Browsers
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">C</div>
                    <div>
                      <div className="font-medium text-blue-800 dark:text-blue-200">Google Chrome</div>
                      <div className="text-blue-700 dark:text-blue-300 text-sm">Available on Chrome Web Store</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">F</div>
                    <div>
                      <div className="font-medium text-blue-800 dark:text-blue-200">Mozilla Firefox</div>
                      <div className="text-blue-700 dark:text-blue-300 text-sm">Available on Firefox Add-ons</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">E</div>
                    <div>
                      <div className="font-medium text-blue-800 dark:text-blue-200">Microsoft Edge</div>
                      <div className="text-blue-700 dark:text-blue-300 text-sm">Chromium-based compatibility</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-4">
                  ⚙️ Technical Requirements
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Development Environment</h4>
                    <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                      <li>• Node.js and npm for development</li>
                      <li>• TypeScript compiler support</li>
                      <li>• Modern browser with extension support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Performance</h4>
                    <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                      <li>• Lightweight extension footprint</li>
                      <li>• Optimized for real-time overlay</li>
                      <li>• Minimal CPU and memory usage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-4">
                📋 Installation Guide
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-1">Download from Official Store</h4>
                    <div className="text-yellow-800 dark:text-yellow-300 text-sm mb-2">
                      Visit the Chrome Web Store or Firefox Add-ons marketplace to install the official extension
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-1">Developer Installation (Advanced)</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded text-sm font-mono mb-2">
                      git clone https://github.com/ZaifSenpai/wplace-tracer.git<br />
                      cd wplace-tracer<br />
                      npm install && npm run build
                    </div>
                    <p className="text-yellow-800 dark:text-yellow-300 text-sm">Load the extension in developer mode from the dist folder</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-1">Activate on WPlace.live</h4>
                    <p className="text-yellow-800 dark:text-yellow-300 text-sm">Navigate to WPlace.live and access the extension through your browser's extension menu</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Usage Guide & Best Practices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4 text-center">
                  🎯 Basic Usage
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Image Upload</h4>
                    <p className="text-blue-700 dark:text-blue-300">Upload your reference image directly through the extension interface</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Overlay Positioning</h4>
                    <p className="text-blue-700 dark:text-blue-300">Drag and position the overlay to match your desired canvas location</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Opacity Control</h4>
                    <p className="text-blue-700 dark:text-blue-300">Adjust transparency to balance visibility with canvas content</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-4 text-center">
                  🎨 Advanced Features
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Grid Overlay</h4>
                    <p className="text-green-700 dark:text-green-300">Enable pixel grid lines for precise placement accuracy</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Coordinate Display</h4>
                    <p className="text-green-700 dark:text-green-300">View exact pixel coordinates for strategic planning</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Template Management</h4>
                    <p className="text-green-700 dark:text-green-300">Save and load multiple overlay configurations</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-4 text-center">
                  🛡️ Best Practices
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-1">Respectful Usage</h4>
                    <p className="text-purple-700 dark:text-purple-300">Use tracing tools to enhance, not dominate collaborative spaces</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-1">Community Guidelines</h4>
                    <p className="text-purple-700 dark:text-purple-300">Follow WPlace.live community rules and artistic etiquette</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-1">Performance Tips</h4>
                    <p className="text-purple-700 dark:text-purple-300">Optimize image sizes and settings for smooth operation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                📊 Professional Workflow Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Preparation Phase</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Prepare high-contrast reference images</li>
                    <li>• Plan your canvas area and coordinate strategy</li>
                    <li>• Test overlay positioning before starting</li>
                    <li>• Consider collaborative aspects of the canvas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Execution Phase</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use moderate opacity for balanced visibility</li>
                    <li>• Work systematically through planned sections</li>
                    <li>• Coordinate with community when working in shared areas</li>
                    <li>• Save progress frequently to avoid data loss</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Open Source Development & Community
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-4">
                  📜 Open Source License
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-mono">MIT</div>
                  <div className="flex-1">
                    <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">
                      WPlace Tracer is released under the MIT License, ensuring maximum freedom for developers and users.
                    </p>
                    <ul className="text-purple-700 dark:text-purple-300 text-xs space-y-1">
                      <li>✓ Free for personal and commercial use</li>
                      <li>✓ Modification and distribution permitted</li>
                      <li>✓ Transparent development process</li>
                      <li>✓ Community contributions welcome</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
                  👨‍💻 Development Team
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">Z</div>
                    <div>
                      <div className="font-medium text-blue-800 dark:text-blue-200">ZaifSenpai</div>
                      <div className="text-blue-700 dark:text-blue-300 text-sm">Lead Developer & Creator</div>
                    </div>
                  </div>
                  <div className="text-blue-700 dark:text-blue-300 text-sm mt-3">
                    <p>Active development with community feedback integration. Regular updates and feature improvements based on user needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-teal-900 dark:text-teal-300 mb-4">
                🤝 Contributing to WPlace Tracer
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-teal-800 dark:text-teal-200 mb-1">Code Contributions</h4>
                  <p className="text-teal-700 dark:text-teal-300">Submit pull requests for bug fixes, features, or improvements</p>
                </div>
                <div>
                  <h4 className="font-medium text-teal-800 dark:text-teal-200 mb-1">Issue Reporting</h4>
                  <p className="text-teal-700 dark:text-teal-300">Report bugs or suggest features through GitHub Issues</p>
                </div>
                <div>
                  <h4 className="font-medium text-teal-800 dark:text-teal-200 mb-1">Documentation</h4>
                  <p className="text-teal-700 dark:text-teal-300">Help improve documentation and user guides</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-8 border border-teal-200 dark:border-teal-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              🎨 Enhance Your Digital Art Creation
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
              WPlace Tracer brings professional-grade image overlay and tracing capabilities to your browser, 
              specifically designed for digital artists working on collaborative pixel art platforms. 
              With its modern TypeScript architecture and cross-browser support, it's the reliable tool you need for precise artistic work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/ZaifSenpai/wplace-tracer" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-medium text-center inline-flex items-center justify-center space-x-2"
              >
                <span>📦 View on GitHub</span>
              </a>
              <Link 
                href="/tools" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center inline-flex items-center justify-center space-x-2"
              >
                <span>🔧 Explore More Tools</span>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Open-source, MIT licensed, and built for the digital art community.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}