import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wplacer Bot - Advanced Auto-Drawing System for WPlace.live | Multi-Account Management",
  description: "Complete guide to Wplacer - the most sophisticated auto-drawing bot for WPlace.live. Features web UI, multi-account management, intelligent drawing strategies, and advanced automation tools.",
  keywords: ["Wplacer", "WPlace bot", "auto-drawing", "pixel art automation", "multi-account", "wplace.live bot", "drawing automation", "collaborative canvas", "web UI bot", "Node.js bot"],
  alternates: {
    canonical: "https://wplacwe.live/tools/wplacer",
  },
};

export default function Wplacer() {
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
              Wplacer
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Wplacer Bot
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Advanced Multi-Account Auto-Drawing System for WPlace.live
          </p>
        </nav>

        <div className="space-y-8">
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="text-red-600 text-xl">⚠️</div>
              <div>
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
                  Important Legal Disclaimer
                </h3>
                <p className="text-red-800 dark:text-red-200 text-sm">
                  Wplacer is not affiliated with WPlace.live and its use may violate the site's terms of service. 
                  This tool is provided for educational purposes only. Use at your own risk and discretion.
                </p>
              </div>
            </div>
          </div>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  What is Wplacer Bot?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Wplacer represents the pinnacle of WPlace.live automation technology. This sophisticated auto-drawing bot combines 
                  intelligent multi-account management with advanced drawing strategies, offering the most comprehensive solution 
                  for collaborative pixel art creation. Built with Node.js and featuring a sleek web interface, Wplacer transforms 
                  how communities approach large-scale pixel art projects.
                </p>
              </div>
              <a 
                href="https://github.com/wplacer/wplacer" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                📦 GitHub Repository
              </a>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-3">
                🚀 Revolutionary Features at a Glance
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🖥️ Web-Based Management</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Intuitive web interface for managing multiple accounts, templates, and drawing strategies from a single dashboard.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">👥 Multi-Account System</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Coordinate dozens of accounts simultaneously with intelligent user prioritization and load balancing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🎯 Smart Drawing Strategies</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Multiple drawing modes with advanced algorithms for optimal pixel placement and conflict resolution.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🤖 Full Automation</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Automatic charge purchasing, captcha handling, account status monitoring, and desktop notifications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Core Features & Advanced Capabilities
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-3xl mb-3 text-center">🖥️</div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3 text-center">
                  Web UI Dashboard
                </h3>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
                  <li>• Centralized account management interface</li>
                  <li>• Real-time status monitoring</li>
                  <li>• Template upload and editing tools</li>
                  <li>• Drawing progress visualization</li>
                  <li>• Performance analytics dashboard</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <div className="text-3xl mb-3 text-center">👥</div>
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3 text-center">
                  Multi-Account System
                </h3>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
                  <li>• Unlimited account support</li>
                  <li>• Intelligent user prioritization</li>
                  <li>• Load balancing algorithms</li>
                  <li>• Account health monitoring</li>
                  <li>• Automatic failover systems</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="text-3xl mb-3 text-center">🎯</div>
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3 text-center">
                  Drawing Strategies
                </h3>
                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
                  <li>• Multiple drawing algorithms</li>
                  <li>• Priority-based pixel placement</li>
                  <li>• Conflict resolution systems</li>
                  <li>• Template overlay optimization</li>
                  <li>• Coordinate-based targeting</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <div className="text-3xl mb-3 text-center">💰</div>
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-3 text-center">
                  Economic Automation
                </h3>
                <ul className="text-orange-800 dark:text-orange-200 text-sm space-y-2">
                  <li>• Automatic charge purchasing</li>
                  <li>• Upgrade management system</li>
                  <li>• Resource optimization</li>
                  <li>• Cost-efficiency algorithms</li>
                  <li>• Budget tracking and limits</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <div className="text-3xl mb-3 text-center">🤖</div>
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3 text-center">
                  AI-Powered Features
                </h3>
                <ul className="text-red-800 dark:text-red-200 text-sm space-y-2">
                  <li>• Automatic captcha solving</li>
                  <li>• Pattern recognition systems</li>
                  <li>• Adaptive learning algorithms</li>
                  <li>• Behavior mimicking</li>
                  <li>• Anti-detection mechanisms</li>
                </ul>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border border-teal-200 dark:border-teal-800">
                <div className="text-3xl mb-3 text-center">🔔</div>
                <h3 className="text-lg font-semibold text-teal-900 dark:text-teal-300 mb-3 text-center">
                  Notification System
                </h3>
                <ul className="text-teal-800 dark:text-teal-200 text-sm space-y-2">
                  <li>• Desktop notifications</li>
                  <li>• Real-time status updates</li>
                  <li>• Error and warning alerts</li>
                  <li>• Completion notifications</li>
                  <li>• Performance summaries</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🌟 What Sets Wplacer Apart from Other Bots?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technical Excellence</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Built with modern Node.js architecture</li>
                    <li>• Scalable multi-threaded processing</li>
                    <li>• Advanced error handling and recovery</li>
                    <li>• Optimized network request management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">User Experience</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Intuitive web-based interface</li>
                    <li>• Multi-language support (EN, PT, FR, CN)</li>
                    <li>• Comprehensive documentation</li>
                    <li>• Active community development</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Architecture & Requirements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
                  💻 System Requirements
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Core Dependencies</h4>
                    <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                      <li>• <strong>Node.js:</strong> Latest LTS version recommended</li>
                      <li>• <strong>NPM:</strong> Package manager for dependencies</li>
                      <li>• <strong>Git:</strong> For cloning and updates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Browser Support</h4>
                    <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                      <li>• <strong>Brave Browser:</strong> Recommended for best performance</li>
                      <li>• <strong>Tampermonkey Extension:</strong> Required for script injection</li>
                      <li>• <strong>Chrome/Chromium:</strong> Alternative browser support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-4">
                  ⚙️ Performance Specifications
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Recommended Hardware</h4>
                    <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                      <li>• <strong>RAM:</strong> 8GB+ for optimal performance</li>
                      <li>• <strong>CPU:</strong> Multi-core processor preferred</li>
                      <li>• <strong>Storage:</strong> 1GB+ available space</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Network Requirements</h4>
                    <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                      <li>• <strong>Bandwidth:</strong> Stable internet connection</li>
                      <li>• <strong>Latency:</strong> Low latency for real-time operations</li>
                      <li>• <strong>Multiple IPs:</strong> Recommended for multi-account</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-4">
                🏗️ Architecture Overview
              </h3>
              <p className="text-purple-800 dark:text-purple-200 mb-4 text-sm">
                Wplacer employs a sophisticated multi-tier architecture designed for scalability, reliability, and performance. 
                The system consists of a Node.js backend server, a React-based web interface, and browser extension components 
                that work together to provide seamless automation capabilities.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                  <h4 className="font-medium text-purple-900 dark:text-purple-200 mb-1">Backend Layer</h4>
                  <p className="text-purple-700 dark:text-purple-300">Node.js server handling account management, drawing logic, and API communications</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                  <h4 className="font-medium text-purple-900 dark:text-purple-200 mb-1">Frontend Layer</h4>
                  <p className="text-purple-700 dark:text-purple-300">Web-based dashboard for configuration, monitoring, and control</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                  <h4 className="font-medium text-purple-900 dark:text-purple-200 mb-1">Browser Layer</h4>
                  <p className="text-purple-700 dark:text-purple-300">Extension components for direct WPlace.live integration</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Installation & Setup Guide
            </h2>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-4">
                📋 Step-by-Step Installation Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-1">Clone the Repository</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded text-sm font-mono mb-2">
                      git clone https://github.com/wplacer/wplacer.git
                    </div>
                    <p className="text-yellow-800 dark:text-yellow-300 text-sm">Download the latest version of Wplacer from the official GitHub repository</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-1">Install Dependencies</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded text-sm font-mono mb-2">
                      cd wplacer && npm install
                    </div>
                    <p className="text-yellow-800 dark:text-yellow-300 text-sm">Navigate to the project directory and install all required Node.js packages</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-1">Install Browser Extension</h4>
                    <p className="text-yellow-800 dark:text-yellow-300 text-sm mb-2">
                      Load the browser extension from the <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">LOAD_UNPACKED</code> folder in your browser's developer mode
                    </p>
                    <ul className="text-yellow-700 dark:text-yellow-400 text-xs space-y-1 ml-4">
                      <li>• Open Chrome/Brave extension management</li>
                      <li>• Enable "Developer mode"</li>
                      <li>• Click "Load unpacked" and select the folder</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-1">Launch the Application</h4>
                    <div className="bg-gray-800 text-green-400 p-3 rounded text-sm font-mono mb-2">
                      npm start
                    </div>
                    <p className="text-yellow-800 dark:text-yellow-300 text-sm">Start the Wplacer server and navigate to the provided local URL</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                  ✅ Initial Configuration
                </h3>
                <ol className="text-green-800 dark:text-green-200 text-sm space-y-2 list-decimal list-inside">
                  <li>Access the web dashboard via localhost</li>
                  <li>Add your WPlace.live accounts</li>
                  <li>Upload drawing templates</li>
                  <li>Configure drawing strategies</li>
                  <li>Start your first automated drawing</li>
                </ol>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  🔧 Advanced Settings
                </h3>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
                  <li>• Configure proxy settings for multi-account</li>
                  <li>• Set up notification preferences</li>
                  <li>• Customize drawing algorithms</li>
                  <li>• Enable automatic purchasing features</li>
                  <li>• Configure failover mechanisms</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Usage Strategies & Best Practices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4 text-center">
                  🎯 Drawing Strategies
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Priority Mode</h4>
                    <p className="text-blue-700 dark:text-blue-300">Focus on high-value pixels first, optimizing for maximum impact</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Sequential Mode</h4>
                    <p className="text-blue-700 dark:text-blue-300">Systematic row-by-row or column-by-column placement</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Random Mode</h4>
                    <p className="text-blue-700 dark:text-blue-300">Unpredictable placement to avoid detection patterns</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-4 text-center">
                  👥 Account Management
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Load Balancing</h4>
                    <p className="text-green-700 dark:text-green-300">Distribute workload evenly across multiple accounts</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Health Monitoring</h4>
                    <p className="text-green-700 dark:text-green-300">Continuous account status checking and error handling</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-1">Rotation System</h4>
                    <p className="text-green-700 dark:text-green-300">Automatic switching between accounts for optimal performance</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-4 text-center">
                  🛡️ Safety Measures
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-1">Rate Limiting</h4>
                    <p className="text-purple-700 dark:text-purple-300">Intelligent throttling to mimic human behavior patterns</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-1">Proxy Support</h4>
                    <p className="text-purple-700 dark:text-purple-300">IP rotation and geographic distribution capabilities</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-1">Error Recovery</h4>
                    <p className="text-purple-700 dark:text-purple-300">Automatic retry mechanisms and failover systems</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                📊 Performance Optimization Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Resource Management</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Monitor CPU and memory usage during operations</li>
                    <li>• Adjust concurrent account limits based on hardware</li>
                    <li>• Use SSD storage for improved template loading</li>
                    <li>• Optimize network settings for your connection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Strategic Planning</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Plan drawing sessions during off-peak hours</li>
                    <li>• Coordinate with community for maximum impact</li>
                    <li>• Use preview mode to test templates before deployment</li>
                    <li>• Monitor canvas activity for optimal timing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Multi-Language Support & Community
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
                  🌍 Supported Languages
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🇺🇸</span>
                    <span className="text-blue-800 dark:text-blue-200">English</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🇧🇷</span>
                    <span className="text-blue-800 dark:text-blue-200">Portuguese</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🇫🇷</span>
                    <span className="text-blue-800 dark:text-blue-200">French</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">🇨🇳</span>
                    <span className="text-blue-800 dark:text-blue-200">Chinese</span>
                  </div>
                </div>
                <p className="text-blue-700 dark:text-blue-300 text-sm mt-4">
                  Full interface localization with community-contributed translations
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-4">
                  👨‍💻 Development Team
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">L</div>
                    <div>
                      <div className="font-medium text-green-800 dark:text-green-200">Lulu</div>
                      <div className="text-green-700 dark:text-green-300 text-xs">Lead Developer</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">J</div>
                    <div>
                      <div className="font-medium text-green-800 dark:text-green-200">Jinx</div>
                      <div className="text-green-700 dark:text-green-300 text-xs">Core Contributor</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm">P</div>
                    <div>
                      <div className="font-medium text-green-800 dark:text-green-200">Proton</div>
                      <div className="text-green-700 dark:text-green-300 text-xs">Technical Specialist</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-4">
                📜 Open Source License
              </h3>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-mono">GPL v3</div>
                <div className="flex-1">
                  <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">
                    Wplacer is released under the GNU General Public License v3.0, ensuring that the software remains 
                    free and open source for the entire community.
                  </p>
                  <ul className="text-purple-700 dark:text-purple-300 text-xs space-y-1">
                    <li>✓ Freedom to use, modify, and distribute</li>
                    <li>✓ Community-driven development and improvements</li>
                    <li>✓ Transparent codebase with full access to source code</li>
                    <li>✓ Protection against proprietary lock-in</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Legal Considerations & Responsible Usage
            </h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                  ⚖️ Terms of Service Compliance
                </h3>
                <p className="text-red-800 dark:text-red-200 mb-4 text-sm">
                  Wplacer operates independently of WPlace.live and its use may potentially conflict with the platform's terms of service. 
                  Users must understand and accept full responsibility for their actions when using automation tools.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">Potential Risks</h4>
                    <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                      <li>• Account suspension or permanent bans</li>
                      <li>• Loss of in-game progress and purchases</li>
                      <li>• IP address restrictions or blocks</li>
                      <li>• Community backlash and reputation damage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">Mitigation Strategies</h4>
                    <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                      <li>• Use dedicated accounts for automation</li>
                      <li>• Implement conservative rate limiting</li>
                      <li>• Monitor platform policy changes</li>
                      <li>• Engage respectfully with community</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                  🤝 Ethical Usage Guidelines
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Community Respect</h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-1">
                      <li>• Avoid griefing or destructive behavior</li>
                      <li>• Respect other users' artistic contributions</li>
                      <li>• Collaborate rather than dominate canvas space</li>
                      <li>• Support community-driven art projects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Technical Responsibility</h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-1">
                      <li>• Use reasonable resource consumption limits</li>
                      <li>• Implement proper error handling</li>
                      <li>• Monitor server impact and adjust accordingly</li>
                      <li>• Keep software updated with latest patches</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
                  📚 Educational and Research Applications
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200 mb-4 text-sm">
                  While Wplacer can be used for competitive pixel art creation, it also serves valuable educational and research purposes 
                  in understanding collaborative online systems, automation technologies, and community dynamics.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Academic Research</h4>
                    <p className="text-yellow-700 dark:text-yellow-300">Study of collective behavior and coordination in digital spaces</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Technical Learning</h4>
                    <p className="text-yellow-700 dark:text-yellow-300">Understanding web automation, API integration, and scaling challenges</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Art Projects</h4>
                    <p className="text-yellow-700 dark:text-yellow-300">Creating large-scale collaborative artworks and cultural expressions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              🚀 Experience the Future of Collaborative Art
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
              Wplacer represents the cutting edge of automation technology for collaborative pixel art platforms. 
              With its sophisticated multi-account management, intelligent drawing strategies, and comprehensive web interface, 
              it empowers communities to realize their artistic visions at unprecedented scale and precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/wplacer/wplacer" 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center inline-flex items-center justify-center space-x-2"
              >
                <span>📦 Download Wplacer</span>
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
                Remember: Use Wplacer responsibly and respect the WPlace.live community and terms of service.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}