"use client"

import { useState } from "react"
import { Home, Info, Briefcase, UserPlus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Desktop Navbar - Cylindrical Design */}
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-8 bg-gradient-to-r from-purple-500/20 via-purple-600/15 to-purple-500/20 backdrop-blur-xl border border-purple-400/30 rounded-full px-8 py-4 shadow-xl shadow-purple-500/20 hover:bg-purple-500/25 hover:shadow-purple-500/30 transition-all duration-300">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/artyugLOGO.png" 
              alt="Artyug Logo" 
              width={180} 
              height={60} 
              className="h-12 md:h-14 lg:h-16 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-1 h-6 bg-white/10 rounded-full px-1">
            <Link href="/" className="px-4 py-2 text-sm text-white hover:text-primary transition-colors rounded-full">
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm text-white hover:text-primary transition-colors rounded-full"
            >
              About
            </Link>
            <Link
              href="/careers"
              className="px-4 py-2 text-sm text-white hover:text-primary transition-colors rounded-full"
            >
              Careers
            </Link>
          </div>

          <a 
            href="https://artyugweb-zeta.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Sign In
          </a>
        </div>
      </nav>

      {/* Mobile Navbar - Cylindrical Design with Icons and Tooltips */}
      <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 bg-gradient-to-r from-purple-500/20 via-purple-600/15 to-purple-500/20 backdrop-blur-xl border border-purple-400/30 rounded-full px-8 py-2 shadow-xl shadow-purple-500/20"
        >
          <div className="relative">
            <Link
              href="/"
              onMouseEnter={() => setHoveredIcon("home")}
              onMouseLeave={() => setHoveredIcon(null)}
              className="p-3 text-white hover:text-primary hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Home className="w-5 h-5" />
            </Link>
            <AnimatePresence>
              {hoveredIcon === "home" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: -35 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 bg-white text-primary px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap pointer-events-none"
                >
                  Home
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <Link
              href="/about"
              onMouseEnter={() => setHoveredIcon("about")}
              onMouseLeave={() => setHoveredIcon(null)}
              className="p-3 text-white hover:text-primary hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Info className="w-5 h-5" />
            </Link>
            <AnimatePresence>
              {hoveredIcon === "about" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: -35 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 bg-white text-primary px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap pointer-events-none"
                >
                  About
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <Link
              href="/careers"
              onMouseEnter={() => setHoveredIcon("careers")}
              onMouseLeave={() => setHoveredIcon(null)}
              className="p-3 text-white hover:text-primary hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Briefcase className="w-5 h-5" />
            </Link>
            <AnimatePresence>
              {hoveredIcon === "careers" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: -35 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 bg-white text-primary px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap pointer-events-none"
                >
                  Careers
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-l border-white/20 mx-3 h-6" />

          <div className="relative">
            <a
              href="https://artyugweb-zeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIcon("signin")}
              onMouseLeave={() => setHoveredIcon(null)}
              className="p-3 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <UserPlus className="w-5 h-5" />
            </a>
            <AnimatePresence>
              {hoveredIcon === "signin" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: -35 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 bg-white text-primary px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap pointer-events-none"
                >
                  Sign In
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-20 right-6 z-40 bg-gradient-to-br from-purple-500/20 to-purple-600/15 backdrop-blur-xl border border-purple-400/30 rounded-2xl shadow-xl shadow-purple-500/20 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2 min-w-48">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-white hover:bg-primary/20 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-white hover:bg-primary/20 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/careers"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-white hover:bg-primary/20 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                Careers
              </Link>
              <div className="border-t border-white/10 my-2" />
              <a 
                href="https://artyugweb-zeta.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-200 text-sm font-semibold"
              >
                Sign In
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
