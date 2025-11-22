'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Palette, Coins, Users, BookOpen, Sparkles, Heart, Briefcase, Shield } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Share Your Art',
    description: 'Showcase your creative work in a beautiful, distraction-free portfolio. Let your art speak.',
    color: 'text-purple-500'
  },
  {
    icon: Coins,
    title: 'Sell & Monetize',
    description: 'Turn your passion into profit. Sell artwork, prints, and digital creations directly to collectors.',
    color: 'text-violet-500'
  },
  {
    icon: Sparkles,
    title: 'NFT Conversion',
    description: 'Transform your art into NFTs with ease. Ensure authenticity and ownership in the digital realm.',
    color: 'text-fuchsia-500'
  },
  {
    icon: Users,
    title: 'Build Community',
    description: 'Connect with like-minded creatives. Form your tribe, collaborate, and grow together.',
    color: 'text-purple-600'
  },
  {
    icon: BookOpen,
    title: 'Host Workshops',
    description: 'Share your expertise and teach others. Create workshops, courses, and mentorship programs.',
    color: 'text-indigo-500'
  },
  {
    icon: Heart,
    title: 'Romantic Expression',
    description: 'Express your deepest thoughts, poetry, and philosophical musings in a space that values depth.',
    color: 'text-pink-500'
  },
  {
    icon: Briefcase,
    title: 'Dynamic Profiles',
    description: 'Create a living portfolio that grows with you. Showcase skills, accomplishments, and your journey.',
    color: 'text-violet-600'
  },
  {
    icon: Shield,
    title: 'Authenticity First',
    description: 'Built-in verification and authenticity checks. Your work is protected and properly attributed.',
    color: 'text-purple-500'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const cardsInView = useInView(cardsRef, { once: true, margin: '-100px' })
  const phoneInView = useInView(phoneRef, { once: true, margin: '-100px' })
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  
  // Track scroll progress through the carousel section
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start center", "end center"]
  })
  
  // Transform scroll progress to image index (0 to 4)
  const scrollBasedIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 1, 2, 3, 4, 4]
  )
  
  // Update active index based on scroll with smoother transitions
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const unsubscribe = scrollBasedIndex.on("change", (latest) => {
      if (!isScrolling) {
        // Debounce for smoother transitions
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          const newIndex = Math.round(latest)
          // Clamp between 0 and 4
          const clampedIndex = Math.max(0, Math.min(4, newIndex))
          if (clampedIndex !== activeIndex) {
            setActiveIndex(clampedIndex)
          }
        }, 150) // Small delay for smoother feel
      }
    })
    
    return () => {
      clearTimeout(timeoutId)
      unsubscribe()
    }
  }, [scrollBasedIndex, activeIndex, isScrolling])
  
  // Handle manual clicks (temporarily disable scroll-based updates)
  const handleImageClick = (index: number) => {
    setIsScrolling(true)
    setActiveIndex(index)
    setTimeout(() => {
      setIsScrolling(false)
    }, 3000) // Re-enable scroll-based updates after 3 seconds
  }
  
  // Handle swipe gestures for mobile
  const handleSwipe = (direction: 'left' | 'right') => {
    setIsScrolling(true)
    if (direction === 'left') {
      // Swipe left = next image
      setActiveIndex((prev) => Math.min(4, prev + 1))
    } else {
      // Swipe right = previous image
      setActiveIndex((prev) => Math.max(0, prev - 1))
    }
    setTimeout(() => {
      setIsScrolling(false)
    }, 3500) // Re-enable scroll-based updates after 3.5 seconds
  }
  
  // Track drag for swipe detection
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  
  const handleDragStart = (event: any, info: any) => {
    // Only enable swipe on touch devices (mobile)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    if (event.type?.includes('touch') || isMobile) {
      setDragStart({ x: info.point.x, y: info.point.y })
      setIsDragging(true)
      setIsScrolling(true) // Temporarily disable scroll-based updates during drag
    }
  }
  
  const handleDragEnd = (event: any, info: any) => {
    if (!isDragging) return
    
    setIsDragging(false)
    const deltaX = info.point.x - dragStart.x
    const deltaY = Math.abs(info.point.y - dragStart.y)
    const minSwipeDistance = 100 // Minimum distance for a swipe (increased for more settled feel)
    const maxVerticalMovement = 120 // Maximum vertical movement to consider it a horizontal swipe
    
    // Only trigger swipe if:
    // 1. Horizontal movement is significant
    // 2. Horizontal movement is greater than vertical movement
    // 3. Vertical movement is not too large (to avoid interfering with page scroll)
    if (Math.abs(deltaX) > minSwipeDistance && 
        Math.abs(deltaX) > deltaY && 
        deltaY < maxVerticalMovement) {
      if (deltaX > 0) {
        // Swiped right = previous image
        handleSwipe('right')
      } else {
        // Swiped left = next image
        handleSwipe('left')
      }
    } else {
      // Not a valid swipe, re-enable scroll updates
      setTimeout(() => {
        setIsScrolling(false)
      }, 500)
    }
  }
  
  const images = [
    { src: '/images/SS1.png', alt: 'Artyug App Screenshot 1' },
    { src: '/images/SS2.png', alt: 'Artyug App Screenshot 2' },
    { src: '/images/ss3.png', alt: 'Artyug App Screenshot 3' },
    { src: '/images/ss4.png', alt: 'Artyug App Screenshot 4' },
    { src: '/images/ss5.png', alt: 'Artyug App Screenshot 5' }
  ]
  
  const getImagePosition = (index: number) => {
    const centerIndex = activeIndex
    const distance = index - centerIndex
    
    // Normalize distance to handle wrapping
    let normalizedDistance = distance
    if (normalizedDistance > 2) normalizedDistance -= 5
    if (normalizedDistance < -2) normalizedDistance += 5
    
    return normalizedDistance
  }
  
  const getImageStyle = (index: number, isDesktop: boolean = false) => {
    const distance = getImagePosition(index)
    const spacingMultiplier = isDesktop ? 2.2 : 1.4
    
    if (distance === 0) {
      // Center image - make it more prominent
      return {
        scale: 1.05,
        x: 0,
        z: 50,
        opacity: 1,
        rotateY: 0
      }
    } else if (distance === -2 || distance === 3) {
      // Far left
      return {
        scale: 0.70,
        x: -180 * spacingMultiplier,
        z: -150,
        opacity: 0.50,
        rotateY: 50
      }
    } else if (distance === -1 || distance === 4) {
      // Near left
      return {
        scale: 0.85,
        x: -120 * spacingMultiplier,
        z: -80,
        opacity: 0.70,
        rotateY: 30
      }
    } else if (distance === 1 || distance === -4) {
      // Near right
      return {
        scale: 0.85,
        x: 120 * spacingMultiplier,
        z: -80,
        opacity: 0.70,
        rotateY: -30
      }
    } else if (distance === 2 || distance === -3) {
      // Far right
      return {
        scale: 0.70,
        x: 180 * spacingMultiplier,
        z: -150,
        opacity: 0.50,
        rotateY: -50
      }
    }
    
    return {
      scale: 0.5,
      x: 0,
      z: -100,
      opacity: 0.3,
      rotateY: 0
    }
  }

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-purple-50/20 via-muted/30 to-purple-50/20 relative overflow-hidden">
      {/* Enhanced purple glow effects and dots */}
      <div className="absolute inset-0 z-0">
        {/* Large background glows */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.18, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Additional purple dots and glows */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/8 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.14, 0.1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-600/8 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.11, 0.08]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div 
          className="absolute top-3/4 right-1/3 w-56 h-56 bg-indigo-400/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.1, 0.13, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Medium sized dots */}
        <motion.div 
          className="absolute top-10 right-1/2 w-48 h-48 bg-purple-300/12 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.12, 0.16, 0.12]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-1/2 w-52 h-52 bg-violet-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.14, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-10 w-44 h-44 bg-purple-400/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-10 w-40 h-40 bg-indigo-500/12 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.12, 0.16, 0.12]
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5
          }}
        />
        
        {/* Smaller accent dots */}
        <motion.div 
          className="absolute top-1/5 left-1/5 w-32 h-32 bg-purple-500/15 rounded-full blur-lg"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.15, 0.2, 0.15]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        <motion.div 
          className="absolute bottom-1/5 right-1/5 w-36 h-36 bg-violet-400/12 rounded-full blur-lg"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.12, 0.18, 0.12]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8
          }}
        />
        <motion.div 
          className="absolute top-2/3 left-1/2 w-28 h-28 bg-purple-600/15 rounded-full blur-lg"
          animate={{
            scale: [1, 1.7, 1],
            opacity: [0.15, 0.22, 0.15]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.2
          }}
        />
        <motion.div 
          className="absolute top-1/6 right-1/6 w-24 h-24 bg-indigo-400/18 rounded-full blur-md"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.18, 0.25, 0.18]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance flex items-center justify-center gap-3 flex-wrap">
            Everything You Need to <span className="text-primary">Thrive</span>
            <Image 
              src="/artyugLOGO.png" 
              alt="Artyug Logo" 
              width={180} 
              height={60} 
              className="h-10 md:h-14 lg:h-20 w-auto inline-block"
            />
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Artyug brings together all the tools creative minds need to connect, 
            create, and build a sustainable creative practice.
          </p>
        </motion.div>

        <motion.div
          ref={phoneRef}
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          animate={phoneInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20 flex justify-center"
        >
          <div ref={carouselRef} className="relative w-full max-w-6xl px-4">
            {/* Perspective Carousel View - All Screen Sizes */}
            <motion.div 
              className="relative h-[550px] md:h-[650px] lg:h-[750px] overflow-visible touch-pan-y"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.05}
              dragMomentum={false}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              style={{ touchAction: 'pan-y pinch-zoom' }}
            >
              <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1400px', perspectiveOrigin: '50% 50%' }}>
                {images.map((image, index) => {
                  const style = getImageStyle(index, true) // Use desktop spacing for all screens
                  const distance = getImagePosition(index)
                  
                  return (
                    <motion.div
                      key={index}
                      initial={phoneInView ? false : { opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: style.opacity,
                        scale: style.scale,
                        x: style.x,
                        z: style.z,
                        rotateY: style.rotateY
                      }}
                      whileHover={distance === 0 ? { scale: 1.1 } : { scale: style.scale * 1.15, opacity: style.opacity + 0.1 }}
                      transition={{ 
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      onClick={() => handleImageClick(index)}
                      className="absolute cursor-pointer touch-manipulation"
                      style={{
                        transformStyle: 'preserve-3d',
                        willChange: 'transform',
                        backfaceVisibility: 'hidden',
                        zIndex: distance === 0 ? 10 : 5 - Math.abs(distance)
                      }}
                    >
            {/* Phone frame mockup */}
                      <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
                        <div className={`relative p-1 md:p-1.5 lg:p-2 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-primary via-purple-600 to-violet-600 shadow-xl transition-all duration-300 ${
                          distance === 0 ? 'shadow-primary/50 ring-2 ring-primary/30' : 'shadow-primary/25'
                        }`}>
                          <div className="bg-background rounded-[1.75rem] md:rounded-[2.25rem] p-2 md:p-3">
                            <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-black shadow-inner">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 lg:w-28 h-4 md:h-5 lg:h-6 bg-black rounded-b-2xl md:rounded-b-3xl z-10" />
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-[200px] md:w-[280px] lg:w-[320px] h-auto object-cover"
                                draggable={false}
                    />
                  </div>
                </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
              
              {/* Floating accent elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              className="absolute -right-4 md:-right-8 top-1/4 w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full blur-xl z-0"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              className="absolute -left-4 md:-left-8 bottom-1/4 w-16 h-16 md:w-20 md:h-20 bg-violet-500/20 rounded-full blur-xl z-0"
              />
          </div>
        </motion.div>

        <motion.div 
          ref={cardsRef}
          variants={container}
          initial="hidden"
          animate={cardsInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div 
                key={index} 
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card 
                  className="group relative overflow-hidden hover:shadow-2xl hover:shadow-purple-300/30 hover:border-purple-400/40 transition-all duration-500 border-purple-200/30 bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm h-full"
                >
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                  
                  <CardContent className="p-6 md:p-8 space-y-5 relative z-10">
                    <motion.div 
                      className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary/10 via-primary/8 to-primary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:via-primary/15 group-hover:to-primary/20 transition-all duration-500 ${feature.color}`}
                      whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
                      {/* Glow effect on icon */}
                      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    
                    <div className="space-y-3">
                      <h3 className="font-serif text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {feature.description}
                    </p>
                    </div>
                    
                    {/* Decorative bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
