import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPlace Timeline - Key Events & Platform Development History",
  description: "Complete timeline of WPlace.live development from launch to controversies. Track major events, user milestones, and platform evolution.",
  alternates: {
    canonical: "https://wlpase.live/timeline",
  },
};

export default function Timeline() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              Home
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/timeline" className="text-gray-900 dark:text-white font-medium">
              Timeline
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/tools" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
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
            Timeline
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Key events in WPlace.live's development history
          </p>
        </nav>

        <div className="space-y-8">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-start space-x-4">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full">
                  <span className="text-white font-bold text-sm">LAUNCH</span>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Platform Launch
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      July 21, 2025
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Brazilian developer Murilo Matsubara launches WPlace.live as a collaborative pixel art platform.
                    The platform introduces a persistent canvas overlaid on a world map, distinguishing it from Reddit's temporary r/place events.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start space-x-4">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full">
                  <span className="text-white font-bold text-sm">VIRAL</span>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Viral Growth Begins
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      July 25, 2025
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Platform reaches 1 million users within first four days. 
                    Rapid spread across social media platforms including TikTok, Reddit, and Twitter/X.
                    Strong engagement from Brazilian and German communities.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start space-x-4">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full">
                  <span className="text-white font-bold text-sm">ART</span>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Fandom Art Dominance
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Early August 2025
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Video game fandoms begin creating large-scale artwork. Deltarune and Undertale art becomes particularly widespread.
                    Gaming communities from Genshin Impact, Hollow Knight, Pokémon, and Stardew Valley establish major presence on the canvas.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start space-x-4">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full">
                  <span className="text-white font-bold text-sm">10M</span>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      10.6 Million Users Milestone
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Late August 2025
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Platform surpasses 10.6 million registered users globally within its first month.
                    Technical infrastructure begins showing strain with frequent server crashes and loading issues.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start space-x-4">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full">
                  <span className="text-white font-bold text-sm">P2W</span>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Pay-to-Win Controversy
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      August 27, 2025
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developer Murilo Matsubara publicly addresses widespread community criticism of the "droplets" monetization system.
                    Users express concerns about the platform becoming "pay-to-win" as real money can purchase game advantages.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start space-x-4">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-red-600 rounded-full">
                  <span className="text-white font-bold text-sm">CRISIS</span>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Moderation Crisis
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      September 2025
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Major governance failure occurs when platform administration sides with a streamer community that doxxed a transgender volunteer moderator.
                    The moderator is banned while harassers are unbanned and rewarded with 5,000 droplets.
                    Multiple major subreddits (r/lgbt, r/danganronpa, r/HelluvaBoss) ban all WPlace content in response.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start space-x-4">
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gray-600 rounded-full">
                  <span className="text-white font-bold text-sm">BAN</span>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Community Blacklisting
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      September 2025
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Platform faces widespread community backlash and blacklisting from major online forums.
                    Trust in platform governance reaches critical low point, threatening long-term viability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">
            Key Statistics
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold text-blue-800 dark:text-blue-200">Launch to 1M Users</div>
              <div className="text-blue-700 dark:text-blue-300">4 days</div>
            </div>
            <div>
              <div className="font-semibold text-blue-800 dark:text-blue-200">Peak Users (First Month)</div>
              <div className="text-blue-700 dark:text-blue-300">10.6 million</div>
            </div>
            <div>
              <div className="font-semibold text-blue-800 dark:text-blue-200">Canvas Size</div>
              <div className="text-blue-700 dark:text-blue-300">4+ trillion pixels</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}