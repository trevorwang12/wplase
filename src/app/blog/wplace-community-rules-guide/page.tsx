import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPlace Community Rules & Guidelines 2025 | Platform Conduct Policy",
  description: "Complete guide to WPlace.live community rules and guidelines. Learn about acceptable behavior, content policies, anti-griefing rules, and platform etiquette for collaborative pixel art.",
  keywords: ["WPlace rules", "community guidelines", "platform policy", "griefing prevention", "content moderation", "collaborative art etiquette", "wplace.live conduct", "user behavior", "community standards"],
  alternates: {
    canonical: "https://wplacwe.live/blog/wplace-community-rules-guide",
  },
};

export default function WPlaceRulesGuide() {
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
              Community Rules Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            WPlace Community Rules & Guidelines 2025
          </h1>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>📅 January 2025</span>
            <span className="mx-2">•</span>
            <span>📜 Community Guidelines</span>
            <span className="mx-2">•</span>
            <span>⏱️ 10 min read</span>
          </div>
        </nav>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                WPlace.live has established a comprehensive set of community rules designed to maintain a positive, 
                constructive, and respectful collaborative environment. These guidelines ensure that the platform remains 
                a space where millions of users can create, share, and appreciate pixel art together harmoniously.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
                  🎯 Core Philosophy
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-3">
                  WPlace operates on the fundamental principle of <strong>collaborative creativity</strong>. 
                  The rules are designed to foster positive interactions, protect artistic expression, 
                  and maintain a welcoming environment for users of all backgrounds and skill levels.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    💡 <strong>Key Principle:</strong> "Your creative freedom should enhance, not diminish, 
                    the collaborative experience for everyone."
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-6">
                The Five Core Rules of WPlace
              </h2>

              <div className="grid gap-6 mb-8">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-3">
                        No Malicious Defacement
                      </h3>
                      <div className="space-y-3">
                        <p className="text-red-800 dark:text-red-200 text-sm">
                          <strong>What this means:</strong> Users are prohibited from randomly painting over existing artwork 
                          with the sole intention of causing disruption or destruction.
                        </p>
                        
                        <div className="bg-white dark:bg-gray-800 rounded p-4 border">
                          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">✅ Acceptable Behavior:</h4>
                          <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                            <li>• Painting over art to create something new and meaningful</li>
                            <li>• Collaboratively building upon existing designs</li>
                            <li>• Correcting or improving artwork with artistic intent</li>
                            <li>• Creating complementary art that enhances the overall canvas</li>
                          </ul>
                        </div>

                        <div className="bg-red-100 dark:bg-red-800/30 rounded p-4 border border-red-300 dark:border-red-700">
                          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">❌ Prohibited Behavior:</h4>
                          <ul className="text-red-800 dark:text-red-300 text-sm space-y-1">
                            <li>• Random color placement with no artistic purpose</li>
                            <li>• Systematic destruction of completed artworks ("griefing")</li>
                            <li>• Using bots solely to vandalize others' creations</li>
                            <li>• Creating chaos patterns designed to disrupt the canvas</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300 mb-3">
                        Keep Content Appropriate
                      </h3>
                      <div className="space-y-3">
                        <p className="text-orange-800 dark:text-orange-200 text-sm">
                          <strong>What this means:</strong> All content on WPlace must adhere to community standards 
                          for appropriate, respectful, and inclusive material.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white dark:bg-gray-800 rounded p-4 border">
                            <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">🚫 Prohibited Content:</h4>
                            <ul className="text-orange-700 dark:text-orange-300 text-sm space-y-1">
                              <li>• Hate speech or discriminatory symbols</li>
                              <li>• Sexually explicit or suggestive material</li>
                              <li>• Violent or graphic imagery</li>
                              <li>• Harassment or targeted attacks</li>
                              <li>• Inappropriate external links</li>
                            </ul>
                          </div>

                          <div className="bg-orange-100 dark:bg-orange-800/30 rounded p-4 border border-orange-300 dark:border-orange-700">
                            <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">✅ Encouraged Content:</h4>
                            <ul className="text-orange-800 dark:text-orange-300 text-sm space-y-1">
                              <li>• Creative and artistic expressions</li>
                              <li>• Positive community messages</li>
                              <li>• Cultural celebrations and symbols</li>
                              <li>• Educational or informational art</li>
                              <li>• Collaborative community projects</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-3">
                        Protect Personal Information
                      </h3>
                      <div className="space-y-3">
                        <p className="text-purple-800 dark:text-purple-200 text-sm">
                          <strong>What this means:</strong> Users must respect privacy and never share personal information 
                          about other users without explicit consent.
                        </p>
                        
                        <div className="bg-white dark:bg-gray-800 rounded p-4 border">
                          <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-3">🔒 Privacy Protection Guidelines:</h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h5 className="font-medium text-purple-800 dark:text-purple-300 mb-2">Never Share:</h5>
                              <ul className="text-purple-700 dark:text-purple-400 space-y-1">
                                <li>• Real names or personal identities</li>
                                <li>• Contact information (phone, email, address)</li>
                                <li>• Social media profiles or accounts</li>
                                <li>• Location or workplace information</li>
                                <li>• Financial or personal details</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-purple-800 dark:text-purple-300 mb-2">Always Remember:</h5>
                              <ul className="text-purple-700 dark:text-purple-400 space-y-1">
                                <li>• Respect others' anonymity choices</li>
                                <li>• Report doxxing attempts immediately</li>
                                <li>• Protect your own information too</li>
                                <li>• Use only public usernames/handles</li>
                                <li>• Respect privacy in all communications</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-3">
                        Be Respectful
                      </h3>
                      <div className="space-y-3">
                        <p className="text-green-800 dark:text-green-200 text-sm">
                          <strong>What this means:</strong> Maintain a respectful, civil tone in all interactions. 
                          Threats, intimidation, and aggressive behavior are strictly prohibited.
                        </p>
                        
                        <div className="bg-white dark:bg-gray-800 rounded p-4 border">
                          <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3">🤝 Respectful Communication:</h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h5 className="font-medium text-green-800 dark:text-green-300 mb-2">Positive Interactions:</h5>
                              <ul className="text-green-700 dark:text-green-400 space-y-1">
                                <li>• Constructive feedback on artwork</li>
                                <li>• Collaborative planning discussions</li>
                                <li>• Celebrating others' achievements</li>
                                <li>• Offering help and guidance</li>
                                <li>• Resolving conflicts peacefully</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-green-800 dark:text-green-300 mb-2">Prohibited Behaviors:</h5>
                              <ul className="text-red-600 dark:text-red-400 space-y-1">
                                <li>• Threats or intimidation</li>
                                <li>• Personal attacks or insults</li>
                                <li>• Harassment campaigns</li>
                                <li>• Discriminatory language</li>
                                <li>• Aggressive or hostile communication</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">
                        Be Truthful & Act with Integrity
                      </h3>
                      <div className="space-y-3">
                        <p className="text-blue-800 dark:text-blue-200 text-sm">
                          <strong>What this means:</strong> Users should be honest in their actions and communications. 
                          Deception, fraud, and manipulation undermine the collaborative spirit of the platform.
                        </p>
                        
                        <div className="bg-white dark:bg-gray-800 rounded p-4 border">
                          <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">🎯 Integrity Guidelines:</h4>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h5 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Honest Behavior:</h5>
                              <ul className="text-blue-700 dark:text-blue-400 space-y-1">
                                <li>• Accurate representation of your work</li>
                                <li>• Transparent communication about goals</li>
                                <li>• Honest collaboration with other users</li>
                                <li>• Fair use of platform resources</li>
                                <li>• Authentic community participation</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Avoid These:</h5>
                              <ul className="text-red-600 dark:text-red-400 space-y-1">
                                <li>• False claims about artwork ownership</li>
                                <li>• Deceptive coordination tactics</li>
                                <li>• Manipulation of community votes</li>
                                <li>• Impersonation of other users</li>
                                <li>• Spreading false information</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-6">
                Special Considerations & Platform Culture
              </h2>

              <div className="space-y-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-yellow-900 dark:text-yellow-300 mb-4">
                    🏛️ Political Content Policy
                  </h3>
                  <p className="text-yellow-800 dark:text-yellow-200 mb-4 text-sm">
                    WPlace has a unique approach to political content that reflects the platform's values and community dynamics:
                  </p>
                  
                  <div className="bg-white dark:bg-gray-800 rounded p-4 border">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-3">Notable Policy:</h4>
                    <div className="bg-yellow-100 dark:bg-yellow-800/30 p-3 rounded border border-yellow-300 dark:border-yellow-700">
                      <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                        <strong>Political Flag Rule:</strong> The platform explicitly allows "griefing" (defacing) of political party flags 
                        and politician portraits, reflecting a stance that political symbols are fair game for artistic commentary and modification.
                      </p>
                    </div>
                    <p className="text-yellow-700 dark:text-yellow-400 text-sm mt-3">
                      This exception to the anti-griefing rule demonstrates WPlace's commitment to free expression and political discourse, 
                      while maintaining protection for non-political artistic works.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    🎨 Understanding "Constructive Overpainting"
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    One of WPlace's most nuanced concepts is the distinction between malicious defacement and constructive artistic collaboration:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-100 dark:bg-green-800/30 p-4 rounded border border-green-300 dark:border-green-700">
                      <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">✅ Constructive Overpainting</h4>
                      <ul className="text-green-800 dark:text-green-300 text-sm space-y-1">
                        <li>• Adding details to enhance existing art</li>
                        <li>• Creating collaborative crossovers</li>
                        <li>• Building themed areas with cohesive design</li>
                        <li>• Improving or correcting artistic elements</li>
                        <li>• Creating meaningful artistic dialogue</li>
                      </ul>
                    </div>

                    <div className="bg-red-100 dark:bg-red-800/30 p-4 rounded border border-red-300 dark:border-red-700">
                      <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">❌ Malicious Defacement</h4>
                      <ul className="text-red-800 dark:text-red-300 text-sm space-y-1">
                        <li>• Random pixel placement without purpose</li>
                        <li>• Systematic destruction of completed works</li>
                        <li>• Creating visual noise or chaos</li>
                        <li>• Targeting specific users or communities</li>
                        <li>• Using automation solely for disruption</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-6">
                Enforcement & Community Moderation
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
                    🛡️ How Rules Are Enforced
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-3">Automated Systems</h4>
                      <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-2">
                        <li>• Pattern detection for malicious behavior</li>
                        <li>• Content filtering for inappropriate material</li>
                        <li>• Anti-spam and anti-bot measures</li>
                        <li>• Automated flagging of violations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-3">Human Moderation</h4>
                      <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-2">
                        <li>• Community volunteer moderators</li>
                        <li>• Platform staff oversight</li>
                        <li>• User reporting systems</li>
                        <li>• Appeal and review processes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-300 mb-4">
                    ⚖️ Consequences & Penalties
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h4 className="font-medium text-orange-900 dark:text-orange-200 mb-2">Progressive Enforcement System</h4>
                      <div className="grid md:grid-cols-4 gap-3 text-sm">
                        <div className="text-center p-3 bg-yellow-100 dark:bg-yellow-800/30 rounded">
                          <div className="font-semibold text-yellow-800 dark:text-yellow-200">Warning</div>
                          <div className="text-yellow-700 dark:text-yellow-300 text-xs">First offense</div>
                        </div>
                        <div className="text-center p-3 bg-orange-100 dark:bg-orange-800/30 rounded">
                          <div className="font-semibold text-orange-800 dark:text-orange-200">Timeout</div>
                          <div className="text-orange-700 dark:text-orange-300 text-xs">Temporary restriction</div>
                        </div>
                        <div className="text-center p-3 bg-red-100 dark:bg-red-800/30 rounded">
                          <div className="font-semibold text-red-800 dark:text-red-200">Suspension</div>
                          <div className="text-red-700 dark:text-red-300 text-xs">Days to weeks</div>
                        </div>
                        <div className="text-center p-3 bg-gray-200 dark:bg-gray-600 rounded">
                          <div className="font-semibold text-gray-800 dark:text-gray-200">Permanent Ban</div>
                          <div className="text-gray-700 dark:text-gray-300 text-xs">Severe violations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-8 mb-6">
                Best Practices for Community Participation
              </h2>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-4">
                  🌟 How to Be a Positive Community Member
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-3">Creative Collaboration</h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-1">
                      <li>• Plan collaborative projects with other users</li>
                      <li>• Respect existing artwork and build thoughtfully</li>
                      <li>• Share techniques and tips with newcomers</li>
                      <li>• Participate in community events and challenges</li>
                      <li>• Document and celebrate community achievements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-3">Community Support</h4>
                    <ul className="text-green-700 dark:text-green-300 space-y-1">
                      <li>• Help moderate and report rule violations</li>
                      <li>• Welcome and assist new community members</li>
                      <li>• Promote positive community initiatives</li>
                      <li>• Resolve conflicts through peaceful dialogue</li>
                      <li>• Contribute to community knowledge and resources</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-4">
                  📋 Quick Reference: Rule Checklist
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                  <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-3">Before You Place That Pixel, Ask Yourself:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-blue-700 dark:text-blue-300">Am I adding something constructive to the canvas?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-blue-700 dark:text-blue-300">Is my content appropriate for all audiences?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-blue-700 dark:text-blue-300">Am I respecting other users' work and privacy?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-blue-700 dark:text-blue-300">Am I being honest and respectful in my actions?</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-blue-700 dark:text-blue-300">Will this contribute positively to the community?</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  🤝 Building a Better WPlace Together
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  WPlace's community rules exist to ensure that this incredible collaborative canvas remains a space 
                  where creativity flourishes, respect prevails, and millions of users can come together to create 
                  something beautiful and meaningful.
                </p>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>Remember:</strong> Every pixel you place is part of a shared human experience. 
                    Make it count, make it respectful, and make it something the community can be proud of.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  📚 Related Content
                </h3>
                <div className="space-y-3">
                  <Link 
                    href="/blog" 
                    className="block bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    <div className="font-medium text-blue-900 dark:text-blue-300">📰 More WPlace Articles</div>
                    <div className="text-blue-700 dark:text-blue-400 text-sm">Discover more insights and guides</div>
                  </Link>
                  <Link 
                    href="/wiki" 
                    className="block bg-green-100 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <div className="font-medium text-green-900 dark:text-green-300">📖 Community Wiki</div>
                    <div className="text-green-700 dark:text-green-400 text-sm">Explore community dynamics and projects</div>
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
                    <div className="font-medium text-purple-900 dark:text-purple-300">🎨 WPlace.live Platform</div>
                    <div className="text-purple-700 dark:text-purple-400 text-sm">Visit the official collaborative canvas</div>
                  </a>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border">
                    <div className="font-medium text-gray-900 dark:text-gray-300">💬 Community Forums</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">Connect with other community members</div>
                  </div>
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