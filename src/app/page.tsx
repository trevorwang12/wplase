import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPlace Information Hub - Complete Collaborative Pixel Art Guide",
  description: "Complete guide to WPlace.live - the viral collaborative pixel art platform. Platform analysis, community insights, tools, timeline & controversy archives.",
  alternates: {
    canonical: "https://wplacwe.live",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12 canvas-pattern py-12 rounded-lg">
          <div className="pixel-gradient p-1 rounded-lg inline-block mb-6">
            <div className="bg-white dark:bg-gray-900 px-8 py-4 rounded-lg">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 glitch-text" data-text="WPlace Information Hub">
                WPlace Information Hub
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto p-4 rounded-lg text-shadow-lg">
            🎨 Comprehensive analysis and documentation of the collaborative pixel art platform WPlace.live
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          <Link href="/tools" className="group h-full cursor-pointer">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-2 border-purple-400 hover:shadow-lg hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col retro-shadow hover:retro-shadow-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-purple-400 text-sm">👆 Click</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2 group-hover:text-purple-700 group-hover:scale-105 transition-transform duration-300">
                🔧 Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                Utilities and tools for WPlace users
              </p>
              <div className="mt-3 text-xs text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to explore →
              </div>
            </div>
          </Link>

          <Link href="/WPlace-Colors-Palette" className="group h-full cursor-pointer">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-2 border-pink-400 hover:shadow-lg hover:border-pink-500 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col retro-shadow hover:retro-shadow-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-pink-400 text-sm">👆 Click</span>
              </div>
              <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400 mb-2 group-hover:text-pink-700 group-hover:scale-105 transition-transform duration-300">
                🎨 Colors Palette
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                Complete 63-color palette with interactive tools
              </p>
              <div className="mt-3 text-xs text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to explore →
              </div>
            </div>
          </Link>

          <Link href="/blog" className="group h-full cursor-pointer">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-2 border-blue-400 hover:shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col retro-shadow hover:retro-shadow-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-blue-400 text-sm">👆 Click</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 group-hover:text-blue-700 group-hover:scale-105 transition-transform duration-300">
                📝 Blog
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                Latest news, analysis and insights
              </p>
              <div className="mt-3 text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to explore →
              </div>
            </div>
          </Link>

          <Link href="/wiki" className="group h-full cursor-pointer">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-2 border-green-400 hover:shadow-lg hover:border-green-500 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col retro-shadow hover:retro-shadow-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-green-400 text-sm">👆 Click</span>
              </div>
              <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2 group-hover:text-green-700 group-hover:scale-105 transition-transform duration-300">
                📖 Wiki
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                User artworks, community dynamics, and guides
              </p>
              <div className="mt-3 text-xs text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to explore →
              </div>
            </div>
          </Link>

          <Link href="/archive" className="group h-full cursor-pointer">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-2 border-red-400 hover:shadow-lg hover:border-red-500 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col retro-shadow hover:retro-shadow-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-red-400 text-sm">👆 Click</span>
              </div>
              <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2 group-hover:text-red-700 group-hover:scale-105 transition-transform duration-300">
                📚 Archive
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                Detailed records of major events and controversies
              </p>
              <div className="mt-3 text-xs text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to explore →
              </div>
            </div>
          </Link>
        </div>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            About WPlace
          </h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              WPlace.live is a collaborative pixel art platform launched by Brazilian developer Murilo Matsubara on July 21, 2025.
              As a spiritual successor to Reddit's r/place, WPlace distinguishes itself through two key innovations:
              persistent canvas and real-world map-based creative space.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The platform attracted over 10.6 million users in its first month, becoming a viral social experiment.
              However, technical instability, controversial monetization models, and governance crises have also emerged.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              This site is dedicated to objectively documenting WPlace's development history, analyzing its technical architecture and community culture,
              providing comprehensive information resources for researchers and users.
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            How WPlace Pixel Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-400 retro-shadow canvas-pattern">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-none flex items-center justify-center mr-4 pixel-border">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300">
                  The Canvas
                </h3>
              </div>
              <p className="text-blue-800 dark:text-blue-200 text-sm bg-white/60 dark:bg-gray-800/60 p-3 rounded">
                A large grid of pixels, often starting at 1000x1000 and expanding over time. 
                Each pixel can be colored by users to create collaborative artwork.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-2 border-orange-400 retro-shadow canvas-pattern">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-none flex items-center justify-center mr-4 pixel-border">
                  <span className="text-white text-2xl">⏱️</span>
                </div>
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300">
                  The Cooldown
                </h3>
              </div>
              <p className="text-orange-800 dark:text-orange-200 text-sm bg-white/60 dark:bg-gray-800/60 p-3 rounded">
                Because one person can only place a single pixel every few minutes, 
                it is impossible for an individual to create a large image alone.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-400 retro-shadow canvas-pattern">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-none flex items-center justify-center mr-4 pixel-border">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300">
                  The Collaboration
                </h3>
              </div>
              <p className="text-green-800 dark:text-green-200 text-sm bg-white/60 dark:bg-gray-800/60 p-3 rounded">
                This limitation forces users to collaborate. Communities (like subreddits, Discord groups, or followers of a particular streamer) 
                must organize and work together to create and defend their artwork on the canvas.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Core Concepts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Collaborative Pixel Art
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Users place individual colored pixels on a massive digital canvas to create collaborative artworks.
                The canvas overlays a world map, giving creations geographic and cultural context.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                <li>Over 4 trillion square pixels of canvas space</li>
                <li>Geographic positioning based on real-world map</li>
                <li>Persistent canvas, unlike r/place's temporary nature</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Technical Architecture
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Developed by Brazilian developer Murilo Matsubara, supporting real-time collaboration and large-scale concurrent users.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                <li>Google and Twitch third-party login support</li>
                <li>Real-time pixel updates and rendering</li>
                <li>Hierarchical user permission system</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Game Mechanics
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                "Charges" System
              </h3>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
                New users get 30-66 pixel quota, with one used charge regenerating every 30 seconds.
              </p>
              <div className="text-xs text-blue-700 dark:text-blue-300">
                Cooldown design encourages continuous but measured participation
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                Leveling System
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm mb-3">
                More pixels placed means higher level, increasing maximum charge capacity.
              </p>
              <div className="text-xs text-green-700 dark:text-green-300">
                Time investment-based influence hierarchy
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3">
                Color System
              </h3>
              <p className="text-purple-800 dark:text-purple-200 text-sm mb-3">
                63 colors available: 31 free, 32 require "droplets" purchase.
              </p>
              <div className="text-xs text-purple-700 dark:text-purple-300">
                Tiered color access permissions
              </div>
            </div>
          </div>
        </section>

        {/* Advertisement Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg p-6 shadow-sm border border-blue-200 dark:border-blue-800 mb-8">
          <div className="text-center mb-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Advertisement</p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-md">
              <script async data-cfasync="false" src="//pl27608533.revenuecpmgate.com/1cb0a5561c70d5309cfebaf80bc8f222/invoke.js"></script>
              <div id="container-1cb0a5561c70d5309cfebaf80bc8f222"></div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Economic Model: "Droplets" System
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 mb-6">
            <div className="flex">
              <div className="text-yellow-800 dark:text-yellow-200">
                <h3 className="font-semibold mb-2">Controversial Monetization</h3>
                <p className="text-sm">
                  The "droplets" system allows users to purchase in-game advantages with real money, leading to widespread "pay-to-win" criticism.
                  Developer publicly addressed this controversy on August 27, 2025.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                How to Get Droplets
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Level rewards: Earned naturally by placing pixels
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">$</span>
                  Direct purchase: Quick acquisition with real money
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Droplet Uses
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Increase maximum charge capacity
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Instantly buy additional charges
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Unlock premium colors (32 paid colors)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Profile customization (avatar, flags, etc.)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Challenges
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                Server Instability
              </h3>
              <ul className="text-red-800 dark:text-red-200 text-sm space-y-2">
                <li>• Frequent server crashes and downtime</li>
                <li>• Map and pixel loading failures</li>
                <li>• Intermittent user registration disruptions</li>
                <li>• Leaderboards often non-functional</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Browser Compatibility
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                <li>• Firefox users frequently encounter white screen issues</li>
                <li>• Community-discovered workaround: add double slash to URL</li>
                <li>• Rendering bugs prevent proper pixel art display</li>
              </ul>
            </div>
          </div>
        </section>


        <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Platform Rules
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-xl">✓</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Allowed Behavior</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Users can paint over existing artwork if the intention is to create new, coherent art
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-red-500 text-xl">✗</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Prohibited Behavior</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Random destructive "griefing", inappropriate content (hate symbols, NSFW content)
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-yellow-500 text-xl">⚠</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Special Rules</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Explicitly allows griefing political party flags or politician portraits, reflecting platform's political stance
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
