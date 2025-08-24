import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://animation-phatjack.vercel.app"),
  title: "animation.phatjack",
  description:
    "A comprehensive Tailwind CSS animation gallery showcasing 50+ ready-to-use animations with live previews, code snippets, and easy integration.",
  openGraph: {
    title: "animation.phatjack",
    description:
      "A comprehensive Tailwind CSS animation gallery showcasing 50+ ready-to-use animations with live previews, code snippets, and easy integration.",
    images: {
      url: "/meta-image.png",
      alt: "Animation.phatjack",
    },
  },
  manifest: "/favicon/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: "animation.phatjack",
    description:
      "A comprehensive Tailwind CSS animation gallery showcasing 50+ ready-to-use animations with live previews, code snippets, and easy integration.",
    images: {
      url: "/meta-image.png",
      alt: "Animation.phatjack",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <NextTopLoader />
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
