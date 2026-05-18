import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/content";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Crevesha | General Supplies & Tender Consultancy",
    template: "%s | Crevesha",
  },
  description: siteConfig.description,
  keywords: [
    "Crevesha",
    "general supplies",
    "tender consultancy",
    "Nairobi",
    "Kenya",
    "procurement",
    "office supplies",
  ],
  authors: [{ name: "Crevesha" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Crevesha | General Supplies & Tender Consultancy",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Crevesha | General Supplies & Tender Consultancy",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-brand focus:bg-brand-secondary focus:px-4 focus:py-2 focus:text-brand-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
