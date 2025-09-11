import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPlace AutoBOT - Automation Scripts for WPlace.live | Auto-Farm & Auto-Image",
  description: "Complete guide to WPlace AutoBOT automation scripts - Auto-Farm and Auto-Image tools for WPlace.live. Features installation, usage instructions, and safety guidelines.",
  keywords: ["WPlace AutoBOT", "automation scripts", "auto-farm", "auto-image", "wplace.live bot", "pixel art automation", "droplet farming", "level farming"],
  alternates: {
    canonical: "https://wplacwe.live/tools/autobot",
  },
};

export default function AutoBOT() {
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
              AutoBOT
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            WPlace AutoBOT
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Open-Source Automation Scripts for WPlace.live
          </p>
        </nav>

        <div className="space-y-8">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="text-yellow-600 text-xl">⚠️</div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                  Educational Tool Disclaimer
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  WPlace AutoBOT is described by its creators as "purely educational." Use at your own risk and discretion. 
                  Automated tools may violate WPlace.live's terms of service and could result in account restrictions.
                </p>
              </div>
            </div>
          </div>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What is WPlace AutoBOT?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  WPlace AutoBOT is an open-source automation suite consisting of two powerful scripts designed for WPlace.live. 
                  These tools automate different aspects of the platform experience, from resource farming to artistic creation.
                </p>
              </div>
              <a 
                href="https://github.com/Wplace-AutoBot/WPlace-AutoBOT" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                📦 View on GitHub
              </a>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">
                🤖 Two Specialized Scripts
              </h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4">
                AutoBOT provides two distinct automation solutions, each optimized for different use cases on WPlace.live.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🌱 Auto-Farm Script</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Resource accumulation and level advancement</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🎨 Auto-Image Script</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Automated pixel art creation and painting</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Auto-Farm Script - Resource Optimization
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                  🎯 Primary Functions
                </h3>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
                  <li>• Automatically farms droplets and experience</li>
                  <li>• Uses "charges to get levels" system efficiently</li>
                  <li>• Optimized for resource accumulation</li>
                  <li>• Continuous operation while tab is active</li>
                  <li>• Smart resource management algorithms</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  ⚙️ How It Works
                </h3>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
                  <li>• Monitors charge regeneration cycles</li>
                  <li>• Strategically places pixels for maximum XP</li>
                  <li>• Tracks level progression automatically</li>
                  <li>• Optimizes droplet earning potential</li>
                  <li>• Runs continuously in background</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
                📊 Expected Results
              </h3>
              <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                The Auto-Farm script is designed to maximize your account progression while minimizing active involvement. 
                Users report steady level gains and droplet accumulation when running the script consistently.
              </p>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-yellow-700 dark:text-yellow-300">Steady Level Growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-yellow-700 dark:text-yellow-300">Droplet Accumulation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-yellow-700 dark:text-yellow-300">Passive Operation</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Auto-Image Script - Artistic Automation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3">
                  🎨 Creative Capabilities
                </h3>
                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
                  <li>• Automatically creates pixel art from templates</li>
                  <li>• Supports multi-tile painting projects</li>
                  <li>• Advanced color processing and matching</li>
                  <li>• Intelligent pixel placement strategies</li>
                  <li>• Large-scale artwork automation</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-3">
                  🔧 Technical Features
                </h3>
                <ul className="text-orange-800 dark:text-orange-200 text-sm space-y-2">
                  <li>• Smart pixel skipping to avoid conflicts</li>
                  <li>• Color palette optimization</li>
                  <li>• Progress tracking and resumption</li>
                  <li>• Error handling and recovery</li>
                  <li>• Customizable painting parameters</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                ⚠️ Important Usage Notes
              </h3>
              <ul className="text-red-800 dark:text-red-200 text-sm space-y-2">
                <li>• Always click "Paint" button before starting Auto-Imager</li>
                <li>• Do not run both Auto-Farm and Auto-Image simultaneously</li>
                <li>• Monitor the script's progress periodically</li>
                <li>• Ensure adequate charges before starting large projects</li>
                <li>• Be respectful of other users' artwork</li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Advanced Features & Capabilities
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
                <div className="text-2xl mb-2">🌐</div>
                <div className="font-semibold text-blue-900 dark:text-blue-300">Multi-Language</div>
                <div className="text-xs text-blue-700 dark:text-blue-400">International Support</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 text-center">
                <div className="text-2xl mb-2">📱</div>
                <div className="font-semibold text-green-900 dark:text-green-300">Mobile Compatible</div>
                <div className="text-xs text-green-700 dark:text-green-400">Cross-Platform</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 text-center">
                <div className="text-2xl mb-2">🔐</div>
                <div className="font-semibold text-purple-900 dark:text-purple-300">AutoCaptcha</div>
                <div className="text-xs text-purple-700 dark:text-purple-400">Smart Solving</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800 text-center">
                <div className="text-2xl mb-2">👥</div>
                <div className="font-semibold text-orange-900 dark:text-orange-300">Multi-Account</div>
                <div className="text-xs text-orange-700 dark:text-orange-400">Account Switching</div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                🚀 Performance Optimizations
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Efficiency Features</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Overlay system for visual guidance</li>
                    <li>• Smart pixel skipping algorithms</li>
                    <li>• Optimized API call management</li>
                    <li>• Memory-efficient processing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">User Experience</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Real-time progress indicators</li>
                    <li>• Intuitive control interface</li>
                    <li>• Comprehensive error reporting</li>
                    <li>• Customizable operation parameters</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Installation & Setup Guide
            </h2>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
                📋 Installation Method: Browser Bookmark
              </h3>
              <p className="text-blue-800 dark:text-blue-200 mb-4 text-sm">
                WPlace AutoBOT uses a unique bookmark-based installation system for easy access and execution.
              </p>
              <ol className="list-decimal list-inside text-blue-800 dark:text-blue-200 space-y-3 text-sm">
                <li>
                  <strong>Visit the GitHub Repository</strong>
                  <p className="ml-6 mt-1">Navigate to the WPlace-AutoBOT GitHub page</p>
                </li>
                <li>
                  <strong>Copy JavaScript Code</strong>
                  <p className="ml-6 mt-1">Find and copy the provided JavaScript bookmark code</p>
                </li>
                <li>
                  <strong>Create Browser Bookmark</strong>
                  <p className="ml-6 mt-1">Add a new bookmark and paste the JavaScript code as the URL</p>
                </li>
                <li>
                  <strong>Navigate to WPlace</strong>
                  <p className="ml-6 mt-1">Go to wplace.live and ensure you're logged in</p>
                </li>
                <li>
                  <strong>Execute Script</strong>
                  <p className="ml-6 mt-1">Click the bookmark to launch the AutoBOT interface</p>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
                🛡️ Usage Guidelines
              </h3>
              <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-2">
                <li>• Keep the WPlace browser tab open while scripts are running</li>
                <li>• Do not run both Auto-Farm and Auto-Image scripts simultaneously</li>
                <li>• Monitor script performance and stop if any issues occur</li>
                <li>• Respect other users' artwork and community guidelines</li>
                <li>• Use responsibly and consider the impact on server resources</li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Safety & Considerations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                  ⚠️ Potential Risks
                </h3>
                <ul className="text-red-800 dark:text-red-200 text-sm space-y-2">
                  <li>• May violate WPlace.live terms of service</li>
                  <li>• Could result in account restrictions or bans</li>
                  <li>• Automated behavior may be detected by anti-bot systems</li>
                  <li>• Script functionality may break with platform updates</li>
                  <li>• Educational purpose disclaimer from developers</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                  ✅ Best Practices
                </h3>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
                  <li>• Read and understand WPlace.live's terms of service</li>
                  <li>• Use scripts sparingly and responsibly</li>
                  <li>• Monitor account status regularly</li>
                  <li>• Contribute positively to the community</li>
                  <li>• Consider manual participation alongside automation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Explore WPlace AutoBOT
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              WPlace AutoBOT represents a significant advancement in WPlace automation technology. 
              While powerful, please use these tools responsibly and in accordance with platform guidelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://github.com/Wplace-AutoBot/WPlace-AutoBOT" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                📦 View GitHub Repository
              </a>
              <Link 
                href="/tools" 
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center"
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