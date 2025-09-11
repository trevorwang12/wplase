import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who Made WPlace? The Story Behind the Viral Pixel Art Platform | Creator Profile",
  description: "Discover the creators behind WPlace.live - Murilo Matsubara, Enzo Watanabe, and Lucas Teruo Yamashita. Learn how a Brazilian developer's 3-month project became a global phenomenon with 10.6 million users.",
  keywords: ["who made WPlace", "WPlace creator", "Murilo Matsubara", "Enzo Watanabe", "Lucas Teruo Yamashita", "WPlace developers", "Brazilian developer", "pixel art platform", "collaborative canvas", "internet phenomenon"],
  alternates: {
    canonical: "https://wplacwe.live/blog/who-made-wplace",
  },
};

export default function WhoMadeWPlace() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              Home
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
              Blog
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-gray-900 dark:text-white font-medium">
              Who Made WPlace?
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Who Made WPlace? The Story Behind the Viral Pixel Art Platform
          </h1>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>📅 September 2025</span>
            <span className="mx-2">•</span>
            <span>👨‍💻 Creator Story</span>
            <span className="mx-2">•</span>
            <span>⏱️ 8 min read</span>
          </div>
        </nav>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                In the summer of 2025, a simple website called WPlace.live captured the collective attention of the internet. 
                With over 10.6 million users painting pixels on a collaborative world map, it became one of the year's most 
                significant digital phenomena. But who were the visionaries behind this pixelated planet?
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">
                  🇧🇷 The Brazilian Genesis
                </h2>
                <p className="text-blue-800 dark:text-blue-200 mb-4">
                  The story of WPlace begins in Brazil with <strong>Murilo Matsubara</strong>, a developer who spent three months 
                  single-handedly creating what would become a global sensation. Launched on July 21, 2025, his concept was 
                  deceptively simple: a collaborative pixel art canvas layered over a real-world map where users could place 
                  one pixel every 30 seconds.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">📊 The Explosive Growth</h3>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• <strong>Day 4:</strong> 1 million users</li>
                    <li>• <strong>Month 1:</strong> 10.6 million users worldwide</li>
                    <li>• <strong>Canvas size:</strong> Over 4 trillion pixels available</li>
                    <li>• <strong>Geographic reach:</strong> Global viral spread via TikTok, Reddit, Twitter</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-6">
                From Solo Project to Team Effort
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                What started as Matsubara's personal project quickly evolved into something much larger. As WPlace experienced 
                unprecedented growth, it transitioned from a solo endeavor into a collaborative effort requiring a full team 
                to manage the overwhelming demand.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  👥 The Core Team Emerges
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-3">M</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Murilo Matsubara</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Creator & Lead Developer</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      The original architect who built WPlace over three months, handling the technical foundation and core concept.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mb-3">E</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Enzo Watanabe</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Co-founder & Spokesperson</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Emerged as a key figure during the scaling phase, addressing media and managing public communications.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-3">L</div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Lucas Teruo Yamashita</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Co-founder</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Listed as a founder, contributing to the operational and business aspects of the expanding platform.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-6">
                The r/place Legacy: Building on Giants
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                WPlace didn't emerge in a vacuum. It was explicitly inspired by Reddit's groundbreaking 2017 experiment, 
                r/place, created by Josh Wardle (who later created Wordle). However, Matsubara and his team introduced 
                revolutionary changes that transformed the concept entirely.
              </p>

              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  🔄 Key Innovations vs. r/place
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">r/place (2017)</h4>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                      <li>• <strong>Duration:</strong> 72-hour limited event</li>
                      <li>• <strong>Canvas:</strong> 1000x1000 blank grid</li>
                      <li>• <strong>Colors:</strong> 16 colors for everyone</li>
                      <li>• <strong>Cooldown:</strong> 5-minute wait between pixels</li>
                      <li>• <strong>Economy:</strong> No monetization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">WPlace (2025)</h4>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                      <li>• <strong>Duration:</strong> Persistent, ongoing platform</li>
                      <li>• <strong>Canvas:</strong> Real-world map with 4+ trillion pixels</li>
                      <li>• <strong>Colors:</strong> 63 total (31 free, 32 premium)</li>
                      <li>• <strong>Cooldown:</strong> 30-second regeneration system</li>
                      <li>• <strong>Economy:</strong> "Droplets" currency and progression</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-6">
                The Challenges of Success
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The creators' success came with unprecedented challenges. The rapid growth from a personal project to 
                serving millions of users created technical and social pressures that would test any team.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                    🔧 Technical Growing Pains
                  </h3>
                  <p className="text-red-800 dark:text-red-200 mb-3 text-sm">
                    The platform struggled under the weight of millions of concurrent users, leading to:
                  </p>
                  <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                    <li>• Frequent server outages and performance issues</li>
                    <li>• Non-functional leaderboards and registration systems</li>
                    <li>• Alliance system instability</li>
                    <li>• Backend infrastructure strain</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
                    ⚖️ Moderation Challenges
                  </h3>
                  <p className="text-yellow-800 dark:text-yellow-200 mb-3 text-sm">
                    Managing a community of 10.6 million users proved daunting:
                  </p>
                  <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                    <li>• Distinguishing between griefing and legitimate art</li>
                    <li>• Handling controversial political content</li>
                    <li>• Scaling moderation team from 3 to 46+ people</li>
                    <li>• Addressing "unjustified bans" and community complaints</li>
                  </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-300 mb-3">
                    💰 Economic Model Controversy
                  </h3>
                  <p className="text-orange-800 dark:text-orange-200 mb-3 text-sm">
                    The "droplets" economy sparked significant debate:
                  </p>
                  <ul className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
                    <li>• Community accusations of "pay-to-win" mechanics</li>
                    <li>• Criticism of premium color restrictions</li>
                    <li>• Developer forced to address concerns on Reddit (August 27, 2025)</li>
                    <li>• Tension between funding needs and egalitarian ideals</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-6">
                A Cultural Phenomenon
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Despite the challenges, the creators had built something extraordinary. WPlace became more than a game—it 
                evolved into a living document of internet culture in 2025, featuring everything from fandom art to political 
                protests, collaborative neighborhoods to digital nationalism.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
                  🌍 Global Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Cultural Movements</h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-1">
                      <li>• Deltarune/Undertale "invasion" across continents</li>
                      <li>• Transgender advocacy flags in the UK</li>
                      <li>• Gaza War protest art in the Middle East</li>
                      <li>• National digital territories and competitions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Community Projects</h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-1">
                      <li>• "The Neighborhood" collaborative town in Arizona</li>
                      <li>• Fandom art in geographically relevant locations</li>
                      <li>• Corporate protest art near company offices</li>
                      <li>• Archive projects preserving canvas history</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-6">
                Legacy and Future
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                The creators of WPlace achieved something remarkable: they built a digital space that captured the zeitgeist 
                of 2025. From Matsubara's initial three-month development sprint to the expanded team managing millions of users, 
                their journey reflects the modern internet's capacity for both explosive growth and community creation.
              </p>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-300 mb-3">
                  📚 Key Lessons from the Creators
                </h3>
                <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-2">
                  <li>• Simple mechanics can generate profound complexity and cultural impact</li>
                  <li>• Viral success requires infrastructure designed to scale rapidly</li>
                  <li>• Community-driven projects face inherent tensions between idealism and sustainability</li>
                  <li>• Geographic anchoring makes digital spaces inherently political</li>
                  <li>• Success can be both a blessing and a crisis for small development teams</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  🎨 The Pixelated Planet Continues
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  WPlace stands as a testament to the power of simple ideas executed with vision. Murilo Matsubara, 
                  Enzo Watanabe, and Lucas Teruo Yamashita didn't just create a website—they built a digital world 
                  where millions could collaborate, compete, and create together.
                </p>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Their story reminds us</strong> that in the age of the internet, three developers with a 
                    compelling vision can create a global phenomenon that captures the imagination of millions and 
                    becomes a living document of human creativity and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Content
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  📚 More About WPlace
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/blog" 
                    className="block bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    <div className="font-medium text-blue-900 dark:text-blue-300">📰 Latest WPlace News</div>
                    <div className="text-blue-700 dark:text-blue-400 text-sm">Stay updated with platform developments</div>
                  </Link>
                  <Link 
                    href="/blog/wplace-troubleshooting-guide" 
                    className="block bg-green-100 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <div className="font-medium text-green-900 dark:text-green-300">🔧 Troubleshooting Guide</div>
                    <div className="text-green-700 dark:text-green-400 text-sm">Fix common WPlace issues</div>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  🔗 External Resources
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://wplace.live" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-colors"
                  >
                    <div className="font-medium text-purple-900 dark:text-purple-300">🎨 WPlace.live Official</div>
                    <div className="text-purple-700 dark:text-purple-400 text-sm">Visit the collaborative canvas</div>
                  </a>
                  <Link 
                    href="/tools" 
                    className="block bg-orange-100 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-200 dark:hover:bg-orange-900/30 transition-colors"
                  >
                    <div className="font-medium text-orange-900 dark:text-orange-300">🛠️ WPlace Tools</div>
                    <div className="text-orange-700 dark:text-orange-400 text-sm">Enhance your pixel art experience</div>
                  </Link>
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