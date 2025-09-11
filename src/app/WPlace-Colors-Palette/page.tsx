'use client'

import Link from "next/link";
import Footer from "@/components/Footer";
import { useState } from "react";
// Client component for interactive color palette

interface Color {
  hex: string;
  name: string;
  category: string;
  isPremium?: boolean;
  emotion?: string;
}

const colors: Color[] = [
  // Grayscale Colors (6 colors)
  { hex: "#000000", name: "Obsidian Black", category: "Grayscale", emotion: "⚫" },
  { hex: "#3c3c3c", name: "Dark Gray", category: "Grayscale", emotion: "🌫️" },
  { hex: "#787878", name: "Medium Gray", category: "Grayscale", emotion: "☁️" },
  { hex: "#aaaaaa", name: "Light Gray", category: "Grayscale", emotion: "🌸" },
  { hex: "#d2d2d2", name: "Silver Gray", category: "Grayscale", emotion: "💎" },
  { hex: "#ffffff", name: "Pure White", category: "Grayscale", emotion: "❄️" },

  // Red Orange Yellow Colors (9 colors)
  { hex: "#600018", name: "Dark Red", category: "Warm", emotion: "🍷", isPremium: true },
  { hex: "#a50e1e", name: "Deep Red", category: "Warm", emotion: "🔴" },
  { hex: "#ed1c24", name: "Pure Red", category: "Warm", emotion: "❤️" },
  { hex: "#fa8072", name: "Coral Red", category: "Warm", emotion: "🪸", isPremium: true },
  { hex: "#e45c1a", name: "Orange Red", category: "Warm", emotion: "🔥" },
  { hex: "#ff7f27", name: "Orange", category: "Warm", emotion: "🧡" },
  { hex: "#f6aa09", name: "Golden Orange", category: "Warm", emotion: "🌅", isPremium: true },
  { hex: "#f9dd3b", name: "Bright Yellow", category: "Warm", emotion: "☀️" },
  { hex: "#fffabc", name: "Light Yellow", category: "Warm", emotion: "🌼" },

  // Green Colors (9 colors)
  { hex: "#9c8431", name: "Olive", category: "Nature", emotion: "🫒", isPremium: true },
  { hex: "#c5ad31", name: "Golden Green", category: "Nature", emotion: "🌾" },
  { hex: "#e8d45f", name: "Lemon Green", category: "Nature", emotion: "🍋" },
  { hex: "#4a6b3a", name: "Forest Green", category: "Nature", emotion: "🌲" },
  { hex: "#5a944a", name: "Grass Green", category: "Nature", emotion: "🌿" },
  { hex: "#84c573", name: "Light Green", category: "Nature", emotion: "🍃" },
  { hex: "#0eb968", name: "Emerald Green", category: "Nature", emotion: "💚", isPremium: true },
  { hex: "#13e67b", name: "Neon Green", category: "Nature", emotion: "✨" },
  { hex: "#87ff5e", name: "Lime Green", category: "Nature", emotion: "🌈" },

  // Cyan Blue Colors (9 colors)
  { hex: "#0c816e", name: "Teal", category: "Cool", emotion: "🌊", isPremium: true },
  { hex: "#10aea6", name: "Tiffany Blue", category: "Cool", emotion: "💎" },
  { hex: "#13e1be", name: "Mint Green", category: "Cool", emotion: "🌱" },
  { hex: "#0f799f", name: "Ocean Blue", category: "Cool", emotion: "🌊" },
  { hex: "#60f7f2", name: "Sky Blue", category: "Cool", emotion: "🏖️", isPremium: true },
  { hex: "#bbfaf2", name: "Light Blue", category: "Cool", emotion: "☁️" },
  { hex: "#28509e", name: "Deep Blue", category: "Cool", emotion: "🌌" },
  { hex: "#4093e4", name: "Blue", category: "Cool", emotion: "💙" },
  { hex: "#7dc7ff", name: "Azure Blue", category: "Cool", emotion: "🌤️" },

  // Purple Colors (9 colors)
  { hex: "#4d31b8", name: "Deep Purple", category: "Mystic", emotion: "🔮", isPremium: true },
  { hex: "#6b50f6", name: "Purple", category: "Mystic", emotion: "💜" },
  { hex: "#99b1fb", name: "Lavender", category: "Mystic", emotion: "💜" },
  { hex: "#4a4284", name: "Dark Purple Gray", category: "Mystic", emotion: "🌙", isPremium: true },
  { hex: "#7a71c4", name: "Purple Gray", category: "Mystic", emotion: "🔮" },
  { hex: "#b5aef1", name: "Light Purple", category: "Mystic", emotion: "🦄" },
  { hex: "#780c99", name: "Dark Purple", category: "Mystic", emotion: "🍇", isPremium: true },
  { hex: "#aa38b9", name: "Magenta", category: "Mystic", emotion: "🌸" },
  { hex: "#e09ff9", name: "Pink Purple", category: "Mystic", emotion: "🦄" },

  // Pink Colors (6 colors)
  { hex: "#cb007a", name: "Rose Red", category: "Romance", emotion: "🌹", isPremium: true },
  { hex: "#ec1f80", name: "Pink", category: "Romance", emotion: "💖" },
  { hex: "#f38da9", name: "Light Pink", category: "Romance", emotion: "🌸" },
  { hex: "#9b5249", name: "Brown Red", category: "Romance", emotion: "🍂", isPremium: true },
  { hex: "#d18078", name: "Rose Gold", category: "Romance", emotion: "🌹" },
  { hex: "#fab6a4", name: "Peach", category: "Romance", emotion: "🍑" },

  // Brown Earth Colors (15 colors)
  { hex: "#684634", name: "Dark Brown", category: "Earth", emotion: "🌰", isPremium: true },
  { hex: "#95682a", name: "Brown", category: "Earth", emotion: "🍂" },
  { hex: "#dba463", name: "Light Brown", category: "Earth", emotion: "🏜️" },
  { hex: "#7b6352", name: "Gray Brown", category: "Earth", emotion: "🪨", isPremium: true },
  { hex: "#9c846b", name: "Beige Brown", category: "Earth", emotion: "🏔️" },
  { hex: "#d6b594", name: "Sand", category: "Earth", emotion: "🏖️" },
  { hex: "#d18051", name: "Earth Orange", category: "Earth", emotion: "🍊", isPremium: true },
  { hex: "#f8b277", name: "Apricot", category: "Earth", emotion: "🧡" },
  { hex: "#ffc5a5", name: "Skin Tone", category: "Earth", emotion: "🥰" },
  { hex: "#6d643f", name: "Olive Brown", category: "Earth", emotion: "🫒", isPremium: true },
  { hex: "#948c6b", name: "Khaki", category: "Earth", emotion: "🌾" },
  { hex: "#cdc59e", name: "Cream", category: "Earth", emotion: "🌾" },
  { hex: "#333941", name: "Dark Blue Gray", category: "Earth", emotion: "🌫️", isPremium: true },
  { hex: "#6d758d", name: "Blue Gray", category: "Earth", emotion: "⛅" },
  { hex: "#b3b9d1", name: "Light Blue Gray", category: "Earth", emotion: "☁️" },
];

const colorCategories = [
  { name: "Grayscale", icon: "⚫", description: "Classic black, white and gray combinations" },
  { name: "Warm", icon: "🔥", description: "Red, orange and yellow warm colors" },
  { name: "Nature", icon: "🌿", description: "Natural green color palette" },
  { name: "Cool", icon: "❄️", description: "Cool cyan and blue colors" },
  { name: "Mystic", icon: "🔮", description: "Mysterious and elegant purple colors" },
  { name: "Romance", icon: "💖", description: "Gentle and romantic pink colors" },
  { name: "Earth", icon: "🌍", description: "Stable and natural earth tones" },
];

const presetPalettes = [
  {
    name: "Retro Pixel",
    description: "Classic 8-bit game style",
    colors: ["#000000", "#ffffff", "#ed1c24", "#0f799f", "#f9dd3b"],
    icon: "🕹️"
  },
  {
    name: "Soft Pastel",
    description: "Gentle and healing colors",
    colors: ["#f38da9", "#99b1fb", "#87ff5e", "#fffabc", "#bbfaf2"],
    icon: "🌸"
  },
  {
    name: "High Contrast",
    description: "High saturation vibrant colors",
    colors: ["#ed1c24", "#13e67b", "#4093e4", "#f9dd3b", "#aa38b9"],
    icon: "⚡"
  },
  {
    name: "Natural Earth",
    description: "Warm earth tone palette",
    colors: ["#684634", "#4a6b3a", "#c5ad31", "#d18051", "#6d643f"],
    icon: "🏔️"
  },
  {
    name: "Deep Ocean",
    description: "Deep blue and purple tones",
    colors: ["#0c816e", "#28509e", "#4d31b8", "#780c99", "#333941"],
    icon: "🌊"
  }
];

export default function Colors() {
  const [randomPalette, setRandomPalette] = useState<Color[]>([]);
  const [showRandomPalette, setShowRandomPalette] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  // 兼容手机端的复制函数
  const copyToClipboard = async (text: string): Promise<boolean> => {
    try {
      // 优先使用现代 Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      
      // Fallback 方法：创建临时文本区域
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (error) {
      console.error('复制失败:', error);
      return false;
    }
  };

  // 显示复制成功提示
  const showCopySuccess = (text: string) => {
    setCopySuccess(text);
    setTimeout(() => {
      setCopySuccess(null);
    }, 3000);
  };

  const generateRandomPalette = async () => {
    const randomColors = [];
    const usedIndices = new Set();
    
    while (randomColors.length < 5 && usedIndices.size < colors.length) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        randomColors.push(colors[randomIndex]);
      }
    }
    
    setRandomPalette(randomColors);
    setShowRandomPalette(true);
    
    // Copy to clipboard
    const hexCodes = randomColors.map(color => color.hex).join(' ');
    const success = await copyToClipboard(hexCodes);
    if (success) {
      showCopySuccess(hexCodes);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* 复制成功提示 */}
      {copySuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fadeIn">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <span className="text-lg">✅</span>
            <span className="font-medium">Copied:</span>
            <span className="font-mono text-sm bg-green-600 px-2 py-1 rounded">{copySuccess}</span>
          </div>
        </div>
      )}
      
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
            <Link href="/WPlace-Colors-Palette" className="text-gray-900 dark:text-white font-medium">
              Colors Palette
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
          <div className="canvas-pattern py-12 rounded-lg mb-8">
            <div className="text-center">
              <div className="pixel-gradient p-2 rounded-lg inline-block mb-6">
                <div className="bg-white dark:bg-gray-900 px-12 py-8 rounded-lg">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 glitch-text" data-text="🎨 WPlace Colors Palette">
                    🎨 WPlace Colors Palette
                  </h1>
                </div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto p-4 rounded-lg text-shadow-lg">
                Complete collection of all 63 colors available on WPlace.live - your ultimate pixel art palette
              </p>
            </div>
          </div>
        </nav>

        {/* 预设调色板 */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🎯 Preset Color Palettes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presetPalettes.map((palette, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{palette.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
                      {palette.name}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {palette.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 mb-3">
                  {palette.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-8 h-8 rounded border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      title={color}
                      onClick={async () => {
                        const success = await copyToClipboard(color);
                        if (success) {
                          showCopySuccess(color);
                        } else {
                          alert('Copy failed. Please copy manually: ' + color);
                        }
                      }}
                    />
                  ))}
                </div>
                <button 
                  className="text-xs text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  onClick={async (e) => {
                    e.stopPropagation();
                    const button = e.currentTarget as HTMLButtonElement;
                    const originalText = button.textContent;
                    const colorString = palette.colors.join(' ');
                    
                    const success = await copyToClipboard(colorString);
                    
                    if (success) {
                      showCopySuccess(colorString);
                      button.textContent = '✅ Copied!';
                      setTimeout(() => {
                        if (button && button.textContent === '✅ Copied!') {
                          button.textContent = originalText;
                        }
                      }, 2000);
                    } else {
                      button.textContent = '❌ Failed';
                      setTimeout(() => {
                        if (button && button.textContent === '❌ Failed') {
                          button.textContent = originalText;
                        }
                      }, 2000);
                      alert('Copy failed. Please copy manually: ' + colorString);
                    }
                  }}
                >
                  📋 Copy All Colors
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 颜色分类展示 */}
        {colorCategories.map(category => (
          <section key={category.name} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border mb-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.name} Colors
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {colors.filter(color => color.category === category.name).map((color, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={async () => {
                    const success = await copyToClipboard(color.hex);
                    if (success) {
                      showCopySuccess(color.hex);
                    } else {
                      alert('Copy failed. Please copy manually: ' + color.hex);
                    }
                  }}
                  title={`Click to copy ${color.hex}`}
                >
                  {/* 颜色块 */}
                  <div 
                    className="h-24 w-full relative flex items-center justify-center"
                    style={{ backgroundColor: color.hex }}
                  >
                    {/* 高级颜色标识 */}
                    {color.isPremium && (
                      <div className="absolute top-1 right-1 bg-yellow-400 text-yellow-900 text-xs px-1.5 py-0.5 rounded font-bold">
                        PRO
                      </div>
                    )}
                    
                    {/* HEX 代码 */}
                    <div className="text-center">
                      <div 
                        className="text-xs font-mono font-bold px-2 py-1 rounded"
                        style={{ 
                          color: color.hex === '#000000' || color.hex === '#3c3c3c' || color.hex === '#600018' || color.hex === '#4a6b3a' || color.hex === '#0c816e' || color.hex === '#28509e' || color.hex === '#4d31b8' || color.hex === '#4a4284' || color.hex === '#780c99' || color.hex === '#cb007a' || color.hex === '#684634' || color.hex === '#6d643f' || color.hex === '#333941' ? '#ffffff' : '#000000',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)'
                        }}
                      >
                        {color.hex.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  
                  {/* 颜色信息 */}
                  <div className="p-3 bg-white dark:bg-gray-700">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{color.emotion}</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {color.name}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      {color.hex.toUpperCase()}
                    </div>
                  </div>

                  {/* 悬停提示 */}
                  <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <div className="text-sm font-bold mb-2">📋 Click to Copy</div>
                      <div className="text-xs opacity-90">
                        RGB: {parseInt(color.hex.slice(1, 3), 16)}, {parseInt(color.hex.slice(3, 5), 16)}, {parseInt(color.hex.slice(5, 7), 16)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* 工具区域 */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8 shadow-sm border border-purple-200 dark:border-purple-800 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🛠️ Color Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🎲 Random Palette Generator
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Generate random 5-color combinations for your pixel art inspiration
              </p>
              <button 
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                onClick={generateRandomPalette}
              >
                Generate & Copy
              </button>
              
              {showRandomPalette && (
                <div className="mt-4">
                  <div className="grid grid-cols-5 gap-2 mb-3">
                    {randomPalette.map((color, index) => (
                      <div
                        key={index}
                        className="text-center cursor-pointer hover:scale-105 transition-transform"
                        onClick={async () => {
                    const success = await copyToClipboard(color.hex);
                    if (success) {
                      showCopySuccess(color.hex);
                    } else {
                      alert('Copy failed. Please copy manually: ' + color.hex);
                    }
                  }}
                        title={`${color.name} - Click to copy`}
                      >
                        <div
                          className="w-full h-12 rounded border-2 border-white shadow-sm mb-1"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300">
                          {color.hex.toUpperCase()}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {color.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-purple-600 bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
                    🎨 Generated palette with color codes! Click colors to copy individual HEX codes.
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                📊 Color Statistics
              </h3>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>Total Colors: <span className="font-bold text-blue-600">63</span></div>
                <div>Free Colors: <span className="font-bold text-green-600">31</span></div>
                <div>Premium Colors: <span className="font-bold text-yellow-600">32</span></div>
                <div>Color Categories: <span className="font-bold text-purple-600">{colorCategories.length}</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 使用提示 */}
        <section className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
            💡 How to Use
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800 dark:text-blue-200">
            <div>
              <h4 className="font-semibold mb-2">📋 Copy Colors:</h4>
              <ul className="space-y-1 ml-4">
                <li>• Click any color block to copy HEX code</li>
                <li>• Use preset palettes for quick combinations</li>
                <li>• Generate random palettes for inspiration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🎨 Color Access:</h4>
              <ul className="space-y-1 ml-4">
                <li>• 31 colors are free on WPlace.live</li>
                <li>• 32 colors require "droplets" purchase</li>
                <li>• PRO colors are marked with gold badge</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}