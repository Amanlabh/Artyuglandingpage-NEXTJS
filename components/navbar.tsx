"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { label: "Discover", href: "https://app.artyug.art/#/browse" },
  { label: "Artists", href: "https://app.artyug.art/#/artists" },
  { label: "Auctions", href: "https://app.artyug.art/#/auctions" },
  { label: "Events", href: "https://app.artyug.art/#/events" },
  { label: "Guilds", href: "https://app.artyug.art/#/communities" },
  { label: "Gallery", href: "https://app.artyug.art/#/browse" },
  { label: "Authenticity", href: "#authenticity" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F5F1EC]/95 backdrop-blur-md border-b border-[#E2DDD8]"
            : "bg-[#F5F1EC]/90 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#0A0A0A] font-black text-lg tracking-tight hover:opacity-80 transition-opacity"
            style={{ letterSpacing: "-0.01em" }}
          >
            ARTYUG<span className="text-[#E8470A]">.</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B6560] hover:text-[#0A0A0A] text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#6B6560] hover:text-[#0A0A0A] text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.artyug.art/#/sign-in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6560] hover:text-[#0A0A0A] text-sm font-medium transition-colors duration-200"
            >
              Sign In
            </a>
            <a
              href="https://drive.google.com/file/d/12BvHlTS9esKKPDM7vTUcIxoeubnPs8b9/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8470A] text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-[#D63E07] transition-all duration-200 hover:shadow-md"
            >
              Download APK
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#F5F1EC] pt-14">
          <div className="flex flex-col px-6 py-8 gap-1">
            {navLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="text-[#0A0A0A] text-2xl font-black py-3 border-b border-[#E2DDD8] hover:text-[#E8470A] transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#0A0A0A] text-2xl font-black py-3 border-b border-[#E2DDD8] hover:text-[#E8470A] transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <div className="pt-6 flex flex-col gap-3">
              <a
                href="https://app.artyug.art/#/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center justify-center"
              >
                Sign In
              </a>
              <a
                href="https://drive.google.com/file/d/12BvHlTS9esKKPDM7vTUcIxoeubnPs8b9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange text-center justify-center"
              >
                Download APK
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
