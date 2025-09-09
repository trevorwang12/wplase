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
  title: "WLPase Live - Complete Guide to Collaborative Pixel Art Platform | WPlace Information Hub",
  description: "Comprehensive analysis and documentation of WPlace.live and WLPase - the collaborative pixel art platform. Get platform insights, community guides, tools, timeline of events, and controversy archives.",
  keywords: "WLPase, WPlace, wlpase.live, pixel art, collaborative art, r/place, digital canvas, community art, online collaboration, social experiment",
  authors: [{ name: "WPlace Information Hub" }],
  creator: "WPlace Information Hub",
  publisher: "WPlace Information Hub",
  openGraph: {
    title: "WLPase Live - Complete Guide to Collaborative Pixel Art | WPlace Hub",
    description: "Independent documentation of WPlace.live and WLPase collaborative pixel art platform with analysis, tools, community guides, and historical events.",
    url: "https://wlpase.live",
    siteName: "WPlace Information Hub",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WLPase Live - Complete Guide to Collaborative Pixel Art | WPlace Hub",
    description: "Independent documentation of WPlace.live and WLPase collaborative pixel art platform with analysis, tools, community guides, and historical events.",
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
    canonical: "https://wlpase.live",
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
          src='//pl27606102.revenuecpmgate.com/35/be/1f/35be1f837b27c18dafad767418a45b54.js'
        ></script>
        {children}
      </body>
    </html>
  );
}
