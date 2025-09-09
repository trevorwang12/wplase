import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Site Information */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 pixel-gradient bg-clip-text text-transparent">
              WPlace Information Hub
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Independent documentation and analysis of the collaborative pixel art platform WPlace.live. 
              Not affiliated with the official WPlace team.
            </p>
            <div className="text-xs text-gray-400">
              🎨 Educational documentation project for research purposes
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Site Sections
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/timeline" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Timeline
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-green-400 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/archive" className="text-gray-300 hover:text-red-400 transition-colors">
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Legal & Info
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a 
                  href="https://wplace.live" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Official WPlace.live ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} WPlace Information Hub. Independent documentation project.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="canvas-pattern px-3 py-1 rounded border border-gray-600">
                🎯 Educational Use Only
              </span>
              <span className="text-xs">
                Not affiliated with WPlace.live
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-xs text-gray-500 text-center border-t border-gray-800 pt-6">
          <p>
            This website provides independent analysis and documentation of WPlace.live for educational purposes. 
            We are not affiliated with, endorsed by, or connected to the official WPlace platform or its developers. 
            All trademarks and content belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}