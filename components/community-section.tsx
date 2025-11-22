'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Artyug is the first platform that truly understands the artistic soul. It's not just about networking—it's about finding your people.",
    author: "Sarah Chen",
    role: "Visual Artist & Poet"
  },
  {
    quote: "I've sold more work in 3 months on Artyug than I did in years on other platforms. The community here genuinely appreciates art.",
    author: "Marcus Rivera",
    role: "Digital Artist"
  },
  {
    quote: "Finally, a space where depth and thoughtfulness are celebrated. My philosophical writings have found an engaged audience.",
    author: "Amara Johnson",
    role: "Author & Philosopher"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 80 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export default function CommunitySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const cardsInView = useInView(cardsRef, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px'])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-purple-400/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-300/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Join a <span className="text-primary">Movement</span> of Creators
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Thousands of artists and authors have already found their home on Artyug. 
            Hear what they have to say.
          </p>
        </motion.div>

        <motion.div 
          ref={cardsRef}
          variants={container}
          initial="hidden"
          animate={cardsInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card border border-purple-200/20 rounded-2xl p-8 space-y-6 hover:shadow-xl hover:shadow-purple-200/20 hover:border-purple-300/30 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <Quote className="w-10 h-10 text-primary/30" />
              <p className="text-base leading-relaxed text-foreground">
                "{testimonial.quote}"
              </p>
              <div className="pt-4 border-t border-border/50">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
