import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - WPlace Information Hub Usage Agreement",
  description: "Terms of service for WPlace Information Hub. Independent documentation site terms, disclaimers, and usage guidelines for visitors.",
  alternates: {
    canonical: "https://wplacwe.live/terms",
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
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
            <Link href="/community" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Community
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/archive" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
              Archive
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Terms and conditions for using this documentation site
          </p>
        </nav>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                By accessing and using the WPlace Information Hub website, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Description of Service
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The WPlace Information Hub is an independent documentation website that provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Analysis and documentation of the WPlace.live platform</li>
                <li>Historical timeline of platform events and developments</li>
                <li>Community information and user guides</li>
                <li>Tool descriptions and resources</li>
                <li>Archive of significant platform controversies and issues</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Independence and Disclaimer
              </h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
                  Important Notice
                </h3>
                <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-200 space-y-2">
                  <li>This website is NOT affiliated with WPlace.live or its developers</li>
                  <li>We are NOT endorsed by or connected to Murilo Matsubara or the official WPlace team</li>
                  <li>All information is provided for educational and research purposes only</li>
                  <li>We do not represent or speak for the official WPlace platform</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Content and Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Information Accuracy
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>We strive to provide accurate and up-to-date information</li>
                    <li>Information is gathered from public sources and community reports</li>
                    <li>We cannot guarantee the accuracy or completeness of all information</li>
                    <li>WPlace.live platform details may change without notice</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    External Links
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our website contains links to external sites including the official WPlace.live platform, 
                    GitHub repositories, community forums, and third-party tools. We are not responsible for 
                    the content, privacy policies, or practices of these external sites.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Acceptable Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    You May
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Browse and read all publicly available content</li>
                    <li>Share links to our pages for educational purposes</li>
                    <li>Use information for personal research and learning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    You May Not
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Attempt to disrupt or damage our website</li>
                    <li>Use automated tools to scrape content excessively</li>
                    <li>Misrepresent our content as official WPlace.live documentation</li>
                    <li>Use our content for commercial purposes without permission</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The information on this website is provided on an "as is" basis. We make no warranties, 
                expressed or implied, and hereby disclaim all other warranties including implied warranties 
                of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We shall not be liable for any damages arising from the use of this website or the 
                information contained herein, including but not limited to direct, indirect, incidental, 
                punitive, and consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Third-Party Tools and Services
              </h2>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-3">
                  Important Disclaimer
                </h3>
                <p className="text-red-800 dark:text-red-200 text-sm mb-3">
                  We document third-party tools (such as automation bots, browser extensions, etc.) for 
                  informational purposes only. Use of these tools is at your own risk and may:
                </p>
                <ul className="list-disc list-inside text-red-700 dark:text-red-300 text-sm space-y-1">
                  <li>Violate WPlace.live's terms of service</li>
                  <li>Result in account bans or restrictions</li>
                  <li>Pose security risks to your device or accounts</li>
                  <li>Be discontinued or become malicious over time</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                All content on this website, unless otherwise noted, is provided under fair use principles 
                for educational and informational purposes. WPlace.live and related trademarks belong to 
                their respective owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting to this page. Your continued use of the website after changes constitutes 
                acceptance of the new terms.
              </p>
            </section>

            <section className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact and Governing Law
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These terms are governed by applicable law in the jurisdiction where this documentation 
                project is maintained. For questions about these terms, please reach out through appropriate 
                community channels.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}