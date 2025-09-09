import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WPlace Colors Palette - Complete 63-Color Collection | WLPase Live",
  description: "Explore all 63 colors available on WPlace.live collaborative pixel art platform. Interactive color palette with HEX codes, RGB values, and preset combinations.",
  alternates: {
    canonical: "https://wlpase.live/WPlace-Colors-Palette",
  },
};

export default function ColorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}