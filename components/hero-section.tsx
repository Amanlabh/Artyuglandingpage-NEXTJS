"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, Download } from "lucide-react"

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-50/30 via-background to-purple-50/20"
    >
      {/* Animated background elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-purple-400/5 to-transparent z-10" />
        <div className="absolute inset-0 bg-background/50 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="none" 
          loading="lazy"
          className="w-full h-full object-cover"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generating_Video_From_Image_Prompt-XUNNNG8vyv1V8OuWQWZpRnOg1HxaRU.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/15 to-primary/15 border border-purple-400/30 rounded-full text-sm font-medium text-purple-700 shadow-sm shadow-purple-200/50"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ahead of Its Time</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight"
          >
            Where <span className="text-primary">Creativity</span> Meets{" "}
            <span className="text-secondary">Community</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            A cozy, aesthetic space for artists and authors to share work, sell art, host workshops, and build
            meaningful connections. Everything creative, in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 group"
              asChild
            >
              <a href="/artyugapp-release.apk" download="artyugapp-release.apk">
                Download APK for Android
                <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <a href="https://artyugweb-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                Explore on Web
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="pt-8 text-sm text-muted-foreground"
          >
            Be the earliest creative minds on Artyug
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-400/40 rounded-full flex items-start justify-center p-2 shadow-sm shadow-purple-200/30">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-sm shadow-purple-300/50"
          />
        </div>
      </motion.div>
    </section>
  )
}
