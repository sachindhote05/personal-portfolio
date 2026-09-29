import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sachin Dhote — Creative Web Developer",
  description:
    "Creative Web Developer & Frontend Developer based in India. Building modern digital experiences with React, Next.js and TypeScript.",
  openGraph: {
    title: "Sachin Dhote — Creative Web Developer",
    description:
      "I build modern digital experiences that combine clean development, thoughtful design and engaging interactions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}