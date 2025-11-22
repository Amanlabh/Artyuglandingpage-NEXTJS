'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Download } from 'lucide-react'

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true })

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-background via-purple-50/10 to-background relative">
      {/* Purple glow effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 via-primary via-secondary to-purple-500 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-purple-500/20"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium text-white"
            >
              <Sparkles className="w-4 h-4" />
              <span>Limited Early Access</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance"
            >
              Ready to Find Your Creative Home?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed"
            >
              Join Artyug today and connect with a community that values depth, 
              beauty, and thoughtful expression. Your creative journey starts here.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button 
                size="lg" 
                variant="secondary" 
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
                className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <a href="https://artyugweb-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Explore on Web
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
