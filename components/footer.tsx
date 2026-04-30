"use client"

import Link from "next/link"

const footerLinks = {
  Platform: [
    { label: "Web App", href: "https://app.artyug.art", external: true },
    {
      label: "Android APK",
      href: "https://drive.google.com/file/d/12BvHlTS9esKKPDM7vTUcIxoeubnPs8b9/view?usp=drive_link",
      external: true,
    },
    { label: "Art Marketplace", href: "https://app.artyug.art/#/browse", external: true },
    { label: "Auctions", href: "https://app.artyug.art/#/auctions", external: true },
    { label: "Communities", href: "https://app.artyug.art/#/communities", external: true },
  ],
  Creators: [
    { label: "Join as Artist", href: "https://app.artyug.art/#/sign-up", external: true },
    { label: "Authenticity", href: "#authenticity", external: false },
    { label: "NFC Certificates", href: "https://app.artyug.art/#/authenticity", external: true },
    { label: "Events", href: "https://app.artyug.art/#/events", external: true },
    { label: "Guilds", href: "https://app.artyug.art/#/communities", external: true },
  ],
  Company: [
    { label: "About", href: "/about", external: false },
    { label: "Contact", href: "mailto:hello@artyug.art", external: true },
    { label: "Privacy Policy", href: "/privacy", external: false },
    { label: "Webcoin Labs", href: "https://webcoinlabs.com", external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12">
        {/* Brand — 3 cols; link groups 3 each → full width on desktop */}
        <div className="md:col-span-3">
          <Link href="/" className="inline-block mb-4">
            <span className="font-black text-2xl text-white tracking-tight">
              ARTYUG<span className="text-[#E8470A]">.</span>
            </span>
          </Link>
          <p className="text-[#6B6560] text-sm leading-relaxed max-w-xs mb-6">
            The operating system for trusted art commerce. Built for creators who
            want to sell, authenticate, and build their legacy.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/artyug.art"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#E8470A] hover:text-[#E8470A] text-[#6B6560] transition-all duration-200 text-xs font-bold"
            >
              IG
            </a>
            <a
              href="https://twitter.com/artyug_art"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#E8470A] hover:text-[#E8470A] text-[#6B6560] transition-all duration-200 text-xs font-bold"
            >
              X
            </a>
            <a
              href="https://linkedin.com/company/artyug"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#E8470A] hover:text-[#E8470A] text-[#6B6560] transition-all duration-200 text-xs font-bold"
            >
              LI
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-widest text-[#6B6560] uppercase mb-5">{group}</h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    "download" in link ? (
                      <a
                        href={link.href}
                        download
                        className="text-[#9A9A9A] hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="text-[#9A9A9A] hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#9A9A9A] hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#6B6560]">
          <p>© 2026 Artyug. All rights reserved.</p>
          <p>
            Built with ♥ by{" "}
            <a
              href="https://webcoinlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E8470A] transition-colors"
            >
              Webcoin Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
