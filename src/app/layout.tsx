import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WPlace Live - Complete Guide to Collaborative Pixel Art Platform | WPlace Information Hub",
  description: "Comprehensive analysis and documentation of WPlace.live and WPlace - the collaborative pixel art platform. Get platform insights, community guides, tools, color palette, timeline of events, and controversy archives.",
  keywords: ["WPlace", "WPlace", "wplace.live", "pixel art", "collaborative art", "r/place", "digital canvas", "community art", "online collaboration", "social experiment"],
  authors: [{ name: "WPlace Information Hub" }],
  creator: "WPlace Information Hub",
  publisher: "WPlace Information Hub",
  openGraph: {
    title: "WPlace Live - Complete Guide to Collaborative Pixel Art | WPlace Hub",
    description: "Independent documentation of WPlace.live and WPlace collaborative pixel art platform with analysis, tools, community guides, and historical events.",
    url: "https://wplace.live",
    siteName: "WPlace Information Hub",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WPlace Live - Complete Guide to Collaborative Pixel Art | WPlace Hub",
    description: "Independent documentation of WPlace.live and WPlace collaborative pixel art platform with analysis, tools, community guides, and historical events.",
    creator: "@wplace_info",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://wplace.live",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon-192.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3366ff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <script 
          type='text/javascript' 
          src='//pl27608560.revenuecpmgate.com/8f/0f/da/8f0fda0d70e7ff78ad3280273e544aab.js'
        ></script>
        {children}
      </body>
    </html>
  );
}
