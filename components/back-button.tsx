"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-6 left-6 z-40 md:hidden"
    >
      <Link
        href="/"
        className="flex items-center gap-2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:text-primary transition-all duration-300 justify-center"
      >
        <ArrowLeft className="w-5 h-5" />
      </Link>
    </motion.div>
  )
}
