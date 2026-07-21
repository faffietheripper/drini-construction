import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
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
  title: "Drini Construction Ltd | Construction & Renovation Services",
  description:
    "Residential building, renovations, commercial construction, trade services, maintenance, repairs and external works by Drini Construction Ltd.",
  keywords: [
    "Drini Construction",
    "Construction Dartford",
    "Residential renovations",
    "Commercial construction",
    "Property maintenance",
    "Roofing repairs",
    "Landscaping and external works",
  ],
  openGraph: {
    title: "Drini Construction Ltd | Construction & Renovation Services",
    description:
      "Construction, renovation, maintenance and external works for residential and commercial projects.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#efede7] text-[#171717]">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}