import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPlace Archive - Platform Controversies & Crisis Documentation",
  description: "Detailed archive of WPlace.live major controversies, moderation crisis, technical failures, and governance issues with factual analysis.",
  alternates: {
    canonical: "https://wlpase.live/archive",
  },
};

export default function Archive() {
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
            <Link href="/community" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Community
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/archive" className="text-gray-900 dark:text-white font-medium">
              Archive
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Archive
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Detailed records of major events and controversies
          </p>
        </nav>

        <div className="space-y-8">
          <section className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-red-900 dark:text-red-300 mb-6">
              The Moderation Crisis: September 2025
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Incident Overview
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A catastrophic failure of platform governance that led to irreparable damage to community trust. 
                  The crisis began when a volunteer moderator enforced platform rules by banning a popular streamer 
                  and their followers for "voiding" - covering large areas of art with a single color.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Facts</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Volunteer moderator: Transgender individual enforcing anti-griefing rules</li>
                    <li>• Violation: Streamer community engaged in "voiding" (mass griefing)</li>
                    <li>• Escalation: Community retaliated with doxxing and death threats</li>
                    <li>• Admin response: Sided with harassers, punished the victim</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Timeline of Events
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">STEP 1</span>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Rule Enforcement</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Volunteer moderator bans streamer and followers for coordinated griefing</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">STEP 2</span>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Community Retaliation</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Streamer's followers launch harassment campaign with transphobic abuse</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded">STEP 3</span>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Escalation to Doxxing</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Personal information shared publicly alongside death threats</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">STEP 4</span>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Administrative Response</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Administrators punish the victim and reward the perpetrators</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Administrative Actions
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2">Actions Against Victim</h4>
                    <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                      <li>• Removed from moderator position</li>
                      <li>• Account permanently banned</li>
                      <li>• No protection from ongoing harassment</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">Rewards for Perpetrators</h4>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                      <li>• All banned accounts reinstated</li>
                      <li>• 5,000 droplets awarded (premium currency)</li>
                      <li>• Implicit endorsement of harassment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Community Response
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The administrative decision triggered immediate and severe backlash from major online communities:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Subreddits That Banned WPlace</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• r/lgbt - LGBTQ+ community</li>
                      <li>• r/danganronpa - Gaming community</li>
                      <li>• r/HelluvaBoss - Entertainment community</li>
                      <li>• Multiple other communities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reasons Cited</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Endorsement of transphobia</li>
                      <li>• Failure to protect volunteers</li>
                      <li>• Rewarding harassment behavior</li>
                      <li>• Toxic platform culture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Infrastructure Failures
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Persistent Server Issues
                </h3>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
                  <p className="text-red-800 dark:text-red-200 text-sm mb-2">
                    Despite viral success, WPlace has been consistently undermined by severe technical problems:
                  </p>
                  <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                    <li>• Frequent server downtime and crashes during peak usage</li>
                    <li>• Essential features (leaderboards, registration) becoming non-functional</li>
                    <li>• Widespread "white screen" rendering bugs, especially on Firefox</li>
                    <li>• Community-discovered workaround: adding "//" to URL</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Content Moderation Failures
                </h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                    <li>• Persistent presence of hate symbols (swastikas) despite rules prohibiting them</li>
                    <li>• NSFW content regularly appearing on the canvas</li>
                    <li>• Absent or non-functional report button for rule violations</li>
                    <li>• Arbitrary ban system with no clear appeal process</li>
                    <li>• Users feeling powerless to address rule violations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Pay-to-Win Controversy Analysis
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Community Criticism
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The "droplets" monetization system created fundamental tension between WPlace's identity 
                  as a collaborative community project and its reality as a commercial product.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Core Issues</h4>
                  <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                    <li>• Real money purchases bypass time-gated pixel regeneration</li>
                    <li>• Wealthy users gain disproportionate influence on collaborative art</li>
                    <li>• Undermines egalitarian spirit of community collaboration</li>
                    <li>• Creates competitive environment in supposedly collaborative space</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Developer Response
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  On August 27, 2025, developer Murilo Matsubara publicly addressed the widespread 
                  "pay-to-win" accusations in a Reddit post, acknowledging the community concerns 
                  but providing no concrete changes to the monetization model.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Brand Confusion and Security Issues
            </h2>
            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                  Cybersquatting and Malicious Domains
                </h3>
                <p className="text-red-800 dark:text-red-200 text-sm mb-3">
                  Several domains mimic the official WPlace URL, causing user confusion and security risks:
                </p>
                <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                  <li>• <strong>wplace.com</strong> - Hosts shock content and malware-style scam ads</li>
                  <li>• <strong>wplace.org</strong> - Unofficial domain with suspicious content</li>
                  <li>• Fake mobile apps on app stores with poor ratings and functionality</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Official Domain Confirmation
                </h3>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    <strong>Official URL:</strong> https://wplace.live (only)
                    <br />
                    <strong>Developer:</strong> Murilo Matsubara (GitHub: mymatsubara)
                    <br />
                    <strong>Warning:</strong> All other domains and apps are unofficial and potentially malicious
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Impact Assessment
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">CRITICAL</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Governance Crisis</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  Existential threat to platform viability
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">HIGH</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Technical Issues</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  Ongoing user frustration and barriers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">MEDIUM</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Monetization</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  Community alienation risk
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