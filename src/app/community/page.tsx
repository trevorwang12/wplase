import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPlace Community - Fandoms, Art Projects & Collaborative Groups",
  description: "Explore WPlace.live community dynamics, major fandom presence, collaborative projects, activism, and user-driven initiatives.",
  alternates: {
    canonical: "https://wplacwe.live/community",
  },
};

export default function Community() {
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
            <Link href="/tools" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Tools
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/WPlace-Colors-Palette" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Colors Palette
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/community" className="text-gray-900 dark:text-white font-medium">
              Community
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/archive" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Archive
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Community
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            User artworks, community dynamics, and guides
          </p>
        </nav>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Fandom Presence
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3">
                  Undertale/Deltarune
                </h3>
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  Extremely widespread presence across the canvas. Community describes it as "overrunning the site" 
                  due to the sheer volume and coordination of fan artwork.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  Genshin Impact
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Large-scale character artwork and logo representations. 
                  Active coordination through Reddit communities and Discord servers.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                  Pokémon
                </h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Pixel art recreations of iconic Pokémon sprites and symbols. 
                  Strong community organization for defending artwork from griefing.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-3">
                  Hollow Knight
                </h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Character artwork and game symbols positioned strategically across the map. 
                  Known for high-quality pixel art execution.
                </p>
              </div>
              <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg border border-pink-200 dark:border-pink-800">
                <h3 className="text-lg font-semibold text-pink-900 dark:text-pink-300 mb-3">
                  Honkai: Star Rail
                </h3>
                <p className="text-pink-800 dark:text-pink-200 text-sm">
                  Character portraits and game logos. Collaborative efforts with other miHoYo game communities.
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
                  Stardew Valley
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  Farm-themed pixel art and character sprites. Often positioned in rural map areas for thematic consistency.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Community Projects
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  "The Neighborhood"
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  An organic community of over 50 pixel-art homes created in virtual Yuma County, Arizona. 
                  Represents spontaneous community building and collaborative residential planning.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Location: Yuma County, Arizona (Virtual)
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Global Bridge Network
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Ambitious proposal to create connecting bridges between major community hubs across the global canvas. 
                  Aims to physically link dispersed artwork communities.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Status: Community proposal, implementation ongoing
                </div>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  RuneScape World Map Recreation
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Detailed recreation of the Old School RuneScape world map using pixel art. 
                  Represents one of the most ambitious single-game mapping projects.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Community: r/2007scape
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Activism and Protest Art
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-rainbow bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100 dark:from-red-900/20 dark:via-yellow-900/20 dark:to-blue-900/20 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  LGBTQ+ Rights
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Transgender pride flags placed at locations relevant to LGBTQ+ discourse, 
                  including areas related to public figures' real-world addresses.
                </p>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Notable for geographic targeting based on real-world locations
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                  Anti-War Messaging
                </h3>
                <p className="text-red-800 dark:text-red-200 text-sm mb-3">
                  Palestinian flags and anti-war slogans in virtual Gaza Strip area. 
                  Demonstrates platform's use for geopolitical commentary.
                </p>
                <div className="text-xs text-red-700 dark:text-red-300">
                  Geographic context enables targeted political expression
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Gaming Industry Protests
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  #SaveHytale campaign at Riot Games HQ (Santa Monica). 
                  Dragon Age fans protesting EA decisions at virtual Kirkwall, Scotland.
                </p>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Corporate headquarters as protest targets
                </div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
                  Political Commentary
                </h3>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm mb-3">
                  Platform rules explicitly allow griefing of political flags and politician portraits, 
                  positioning WPlace as anti-establishment.
                </p>
                <div className="text-xs text-yellow-700 dark:text-yellow-300">
                  Platform policy actively sanctions political dissent
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Community Organization
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Alliance Formation</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Users organize into "alliances" using external platforms like Discord for coordination. 
                    These groups plan designs, assign tasks, and defend artwork from griefing.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Reddit Communities</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Primary English-speaking hub at r/WplaceLive. Fandom-specific subreddits coordinate 
                    their own artwork projects and recruitment efforts.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Pixel Wars</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Constant territorial conflicts over desirable canvas space. Communities must 
                    balance creation with defense against random griefing and competitive takeovers.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}