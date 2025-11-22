import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, UnifrakturMaguntia } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const unifrakturMaguntia = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gothic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Artyug - Where Creativity Meets Community",
  description:
    "A social community platform for artists and authors. Connect, create, and collaborate with the most imaginative minds. Share work, sell art, host workshops, and build your community.",
  keywords: "artists, authors, creative community, art platform, NFT, workshops, artistic networking, romanticism",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#6B4699",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} ${unifrakturMaguntia.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
