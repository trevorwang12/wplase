import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - WPlace Information Hub Data Protection",
  description: "Privacy policy for WPlace Information Hub. Learn how we handle data, what information we collect, and your privacy rights on our site.",
  alternates: {
    canonical: "https://wplacwe.live/privacy",
  },
};

export default function Privacy() {
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
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            How we handle information on this documentation site
          </p>
        </nav>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This Privacy Policy describes how the WPlace Information Hub ("we", "our", or "us") handles information 
                when you visit our website. We are committed to protecting your privacy and being transparent about our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Automatically Collected Information
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website addresses</li>
                    <li>IP address (anonymized)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Information We Do NOT Collect
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Personal identification information</li>
                    <li>Email addresses or contact information</li>
                    <li>User accounts or registration data</li>
                    <li>Cookies for tracking or advertising</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                How We Use Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The limited information we collect is used solely for:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Improving website performance and user experience</li>
                <li>Understanding which content is most valuable to visitors</li>
                <li>Identifying and fixing technical issues</li>
                <li>Generating anonymous usage statistics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our website may include links to external sites (such as the official WPlace.live platform, 
                GitHub repositories, and community forums). We are not responsible for the privacy practices 
                of these external sites. We encourage you to read their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Data Storage and Security
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>We do not store personal data on our servers</li>
                <li>Website analytics are anonymized and aggregated</li>
                <li>No user accounts or databases are maintained</li>
                <li>All data transmission is encrypted via HTTPS</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Since we do not collect personal information, there is no personal data to access, modify, or delete. 
                However, you can:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Use browser settings to block analytics if desired</li>
                <li>Clear your browser cache and cookies</li>
                <li>Use private/incognito browsing mode</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Disclaimer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This website is an independent documentation project and is not affiliated with, endorsed by, 
                or connected to the official WPlace.live platform or its developers. We provide information 
                about WPlace.live for educational and informational purposes only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated "Last updated" date.
              </p>
            </section>

            <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">
                Contact Information
              </h2>
              <p className="text-blue-800 dark:text-blue-200">
                If you have questions about this Privacy Policy, you can reach out through the official 
                WPlace community channels or create an issue on our documentation repository if available.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}