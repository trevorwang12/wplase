import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation */}
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
            <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
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
        </nav>

        {/* 404 Content */}
        <div className="text-center py-16">
          <div className="canvas-pattern py-12 rounded-lg mb-8">
            <div className="pixel-gradient p-2 rounded-lg inline-block mb-6">
              <div className="bg-white dark:bg-gray-900 px-12 py-8 rounded-lg">
                <h1 className="text-8xl font-bold text-gray-900 dark:text-white mb-4 glitch-text" data-text="404">
                  404
                </h1>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              🎨 Pixel Not Found
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-shadow-lg">
              This pixel seems to have been painted over or never existed on our canvas.
            </p>
          </div>

          {/* Error Visual */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border-2 border-red-400 retro-shadow mb-8">
            <div className="grid grid-cols-8 gap-1 max-w-sm mx-auto mb-6">
              {/* Create a pixelated error pattern */}
              {Array.from({ length: 64 }, (_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 ${
                    i % 9 === 0 || i % 7 === 0
                      ? 'bg-red-500'
                      : i % 4 === 0
                      ? 'bg-orange-500'
                      : i % 3 === 0
                      ? 'bg-yellow-500'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              The page you're looking for has been overwritten by another community's artwork, 
              or it was never part of our collaborative canvas.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors retro-shadow font-medium"
              >
                🏠 Return to Canvas
              </Link>
              <Link
                href="/tools"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors retro-shadow font-medium"
              >
                🔧 Explore Tools
              </Link>
              <Link
                href="/wiki"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors retro-shadow font-medium"
              >
                👥 Explore Wiki
              </Link>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
              🗺️ Lost on the Canvas?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Popular Sections:</h4>
                <ul className="space-y-1 text-blue-700 dark:text-blue-300">
                  <li><Link href="/archive" className="hover:underline">📅 Platform Timeline & Archive</Link></li>
                  <li><Link href="/tools" className="hover:underline">⚙️ WPlace AutoBOT</Link></li>
                  <li><Link href="/archive" className="hover:underline">📚 Controversy Archive</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Looking for Official WPlace?</h4>
                <p className="text-blue-700 dark:text-blue-300 mb-2">
                  Visit the official platform:
                </p>
                <a
                  href="https://wplace.live"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  wplace.live ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}