import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPlace Blog - Latest News & Analysis | Platform Updates",
  description: "Stay updated with the latest WPlace platform news, analysis, community insights, and development updates.",
  alternates: {
    canonical: "https://wplacwe.live/blog",
  },
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              Home
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
            <Link href="/blog" className="text-gray-900 dark:text-white font-medium">
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
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Latest news, analysis and insights about WPlace platform
          </p>
        </nav>

        <div className="space-y-8">
          <article className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome to WPlace Blog
              </h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                September 10, 2025
              </span>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                This blog provides independent analysis and reporting on WPlace.live, the collaborative pixel art platform 
                that has become a significant cultural phenomenon in online communities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our mission is to provide factual, unbiased coverage of platform developments, community events, 
                technical issues, and governance decisions that affect the millions of users worldwide.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">What You'll Find Here</h3>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                  <li>• Platform updates and technical changes</li>
                  <li>• Community event coverage and analysis</li>
                  <li>• Governance and moderation policy discussions</li>
                  <li>• Art trends and cultural movements on the canvas</li>
                  <li>• Technical tutorials and user guides</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                <Link 
                  href="/blog/who-made-wplace"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Who Made WPlace? The Story Behind the Viral Pixel Art Platform
                </Link>
              </h2>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>📅 September 2025</span>
                <span className="mx-2">•</span>
                <span>👨‍💻 Creator Story</span>
                <span className="mx-2">•</span>
                <span>⏱️ 8 min read</span>
              </div>
            </header>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Discover the fascinating story behind WPlace.live - from Brazilian developer Murilo Matsubara's three-month solo project 
                to the expanded team managing 10.6 million users worldwide. Learn how a simple pixel art concept became a global cultural phenomenon.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  🇧🇷 The Brazilian Genesis
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>Meet the Core Team:</strong> Murilo Matsubara (Creator), Enzo Watanabe (Co-founder), Lucas Teruo Yamashita (Co-founder)
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Solo development over 3 months</li>
                    <li>• Launch: July 21, 2025</li>
                    <li>• 1 million users in 4 days</li>
                  </ul>
                  <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• 10.6 million users in month 1</li>
                    <li>• Global viral spread via social media</li>
                    <li>• Team expanded to 46+ people</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This comprehensive profile explores how three developers created a digital world where millions collaborate, 
                compete, and create together - transforming a simple concept inspired by Reddit's r/place into something entirely new.
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🌟 What You'll Discover:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <ul className="space-y-1">
                    <li>• The complete founding story and team evolution</li>
                    <li>• Key innovations that set WPlace apart from r/place</li>
                    <li>• Technical challenges of managing viral growth</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• The controversial "droplets" economy design</li>
                    <li>• How a simple idea became a cultural phenomenon</li>
                    <li>• Lessons learned from unprecedented success</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Link 
                  href="/blog/who-made-wplace"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium inline-flex items-center space-x-2"
                >
                  <span>👨‍💻 Read Creator Story</span>
                  <span className="text-sm opacity-75">(8 min read)</span>
                </Link>
              </div>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                <Link 
                  href="/blog/wplace-troubleshooting-guide"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Wplace Not Working? Your Ultimate 2025 Troubleshooting Guide
                </Link>
              </h2>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>📅 December 2024</span>
                <span className="mx-2">•</span>
                <span>🔧 Technical Guide</span>
                <span className="mx-2">•</span>
                <span>⏱️ 15 min read</span>
              </div>
            </header>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                In the ever-expanding universe of collaborative online projects, few have captured the collective imagination as quickly and vividly as Wplace. The global pixel art canvas has become a digital phenomenon, but technical difficulties are inevitable with millions of users.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  🚀 Quick Preview - The Magic Slash Fix
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-2">
                  <strong>Most Effective Solution:</strong> Add double slashes to the URL
                </p>
                <code className="text-sm bg-white dark:bg-gray-800 px-3 py-1 rounded border">
                  wplace.live<span className="bg-yellow-200 dark:bg-yellow-800 px-1">//</span>
                </code>
                <p className="text-blue-700 dark:text-blue-300 text-sm mt-2">
                  This simple trick resolves 80% of loading issues instantly!
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This comprehensive guide covers everything from the famous "Magic Slash" fix to advanced server-side troubleshooting. 
                Learn step-by-step solutions for white screen issues, browser conflicts, extension problems, and more.
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📋 What You'll Learn:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <ul className="space-y-1">
                    <li>• Level 1: Essential first steps (Magic Slash, hard refresh, cache clearing)</li>
                    <li>• Level 2: Browser troubleshooting (extensions, incognito mode)</li>
                    <li>• Level 3: Server-side issues (white tiles, status checking)</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Quick-reference troubleshooting checklist</li>
                    <li>• Performance optimization tips</li>
                    <li>• Browser compatibility solutions</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Link 
                  href="/blog/wplace-troubleshooting-guide"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center space-x-2"
                >
                  <span>📖 Read Complete Guide</span>
                  <span className="text-sm opacity-75">(15 min read)</span>
                </Link>
              </div>
            </div>
          </article>

          <article className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <header className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                <Link 
                  href="/blog/wplace-community-rules-guide"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  WPlace Community Rules & Guidelines 2025
                </Link>
              </h2>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>📅 January 2025</span>
                <span className="mx-2">•</span>
                <span>📜 Community Guidelines</span>
                <span className="mx-2">•</span>
                <span>⏱️ 10 min read</span>
              </div>
            </header>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                WPlace.live has established comprehensive community rules designed to maintain a positive, 
                constructive, and respectful collaborative environment where millions of users can create pixel art together.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                  📜 The Five Core Rules
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="font-medium text-blue-800 dark:text-blue-200 mb-1">🚫 No Malicious Defacement</div>
                    <p className="text-blue-700 dark:text-blue-300">Create constructively, don't vandalize</p>
                  </div>
                  <div>
                    <div className="font-medium text-blue-800 dark:text-blue-200 mb-1">🎯 Keep Content Appropriate</div>
                    <p className="text-blue-700 dark:text-blue-300">Family-friendly, respectful content only</p>
                  </div>
                  <div>
                    <div className="font-medium text-blue-800 dark:text-blue-200 mb-1">🔒 Protect Personal Info</div>
                    <p className="text-blue-700 dark:text-blue-300">Respect privacy and anonymity</p>
                  </div>
                  <div>
                    <div className="font-medium text-blue-800 dark:text-blue-200 mb-1">🤝 Be Respectful</div>
                    <p className="text-blue-700 dark:text-blue-300">No threats or harassment</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This comprehensive guide covers enforcement policies, special considerations like political content, 
                and best practices for positive community participation. Learn how to contribute constructively 
                to the world's largest collaborative pixel art platform.
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🌟 What You'll Discover:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <ul className="space-y-1">
                    <li>• Detailed explanation of all five core rules</li>
                    <li>• Understanding constructive vs. malicious behavior</li>
                    <li>• Special political content policies</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Enforcement mechanisms and consequences</li>
                    <li>• Best practices for community participation</li>
                    <li>• Quick reference rule checklist</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Link 
                  href="/blog/wplace-community-rules-guide"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium inline-flex items-center space-x-2"
                >
                  <span>📜 Read Community Rules</span>
                  <span className="text-sm opacity-75">(10 min read)</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
}