"use client"

import { Heart, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#1a0b2e] text-white pt-12 md:pt-20 pb-24 md:pb-8 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-20">
          <div className="sm:col-span-2 md:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/artyugLOGO.png" 
                alt="Artyug Logo" 
                width={200} 
                height={67} 
                className="h-12 md:h-16 lg:h-20 w-auto"
              />
            </Link>
            <p className="text-white/60 leading-relaxed max-w-md text-sm md:text-base">
              A home for those who seek depth, beauty, and thoughtful expression. Connect, create, and collaborate with
              the most imaginative minds.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="sm:col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="font-serif text-base md:text-lg font-semibold mb-4 md:mb-6 text-primary-foreground">
              Platform
            </h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  NFT Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Workshops
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-1 md:col-span-2">
            <h4 className="font-serif text-base md:text-lg font-semibold mb-4 md:mb-6 text-primary-foreground">
              Community
            </h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Artists
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Authors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-1 md:col-span-2">
            <h4 className="font-serif text-base md:text-lg font-semibold mb-4 md:mb-6 text-primary-foreground">
              Company
            </h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-white/60">
              <li>
                <Link
                  href="/about"
                  onClick={handleLinkClick}
                  className="hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  onClick={handleLinkClick}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 md:py-8 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between md:items-center text-xs md:text-sm text-white/40">
          <p>© 2025 Artyug. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for creative minds
          </p>
        </div>
      </div>

      {/* Massive Gothic Typography Background */}
      <div className="w-full flex justify-center items-end opacity-10 pointer-events-none select-none absolute bottom-[-5%] left-0 right-0 overflow-hidden">
        <h1
          className="text-[60vw] md:text-[25vw] leading-[0.8] text-white whitespace-nowrap"
          style={{ fontFamily: "var(--font-gothic)" }}
        >
          Artyug
        </h1>
      </div>
    </footer>
  )
}
