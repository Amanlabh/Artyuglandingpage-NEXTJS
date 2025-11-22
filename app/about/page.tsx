"use client"

import { motion } from "framer-motion"
import Footer from "@/components/footer"
import BackButton from "@/components/back-button"

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <main className="relative overflow-hidden bg-background">
      <BackButton />
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-[#1a0b2e] to-[#0f051e] pt-32 pb-20 px-4 md:px-8 flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              About <span className="text-primary">Artyug</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              We're building a creative ecosystem where artists, authors, and visionaries connect, collaborate, and
              thrive together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-[#0f051e]">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={container} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Who We Are</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Artyug is a vibrant social community platform designed exclusively for creative minds. We're a home for
                artists, authors, philosophers, and creative thinkers who believe in the power of deep, thoughtful
                expression and authentic connection.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                We've created a space where creativity isn't just tolerated—it's celebrated. Where your work isn't just
                viewed—it's valued. Where every artist, every writer, every creative soul has the tools they need to
                share their vision, build their legacy, and connect with others who truly understand them.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Think of us as a professional network built by artists, for artists. A place where your portfolio is
                alive, your community is real, and your opportunities are limitless.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-[#1a0b2e]">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={container} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Our Objective</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Our mission is simple yet profound: to empower creative minds by giving them a dedicated space to grow,
                showcase, and monetize their work.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-md border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Foster Authentic Connection</h3>
                <p className="text-white/70 leading-relaxed">
                  Connect with creators who share your vision and values. Build a community of supporters,
                  collaborators, and friends who genuinely understand your work.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-md border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Unlock Creative Freedom</h3>
                <p className="text-white/70 leading-relaxed">
                  Express yourself without limits. Showcase your art, share your thoughts, publish your work—all on one
                  beautiful, intuitive platform designed for creators.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-md border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Monetize Your Passion</h3>
                <p className="text-white/70 leading-relaxed">
                  Turn your creativity into income. Sell your artwork directly, convert your creations into digital
                  collectibles, and build a sustainable creative career.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-md border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Celebrate Authenticity</h3>
                <p className="text-white/70 leading-relaxed">
                  We believe in depth, beauty, and thoughtful expression. Artyug is where depth matters, aesthetics
                  flourish, and real conversation happens.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-[#0f051e]">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={container} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-12">
              What You Can Do Here
            </motion.h2>

            <div className="space-y-6">
              <motion.div variants={fadeInUp} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">Build Your Creative Profile</h3>
                  <p className="text-white/70 leading-relaxed">
                    Create a dynamic digital identity that showcases your artistic journey, skills, experience, and
                    creative accomplishments. Your profile becomes your creative resume and portfolio.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">Share Your Work & Stories</h3>
                  <p className="text-white/70 leading-relaxed">
                    Showcase your artwork, poetry, photography, writing, and creative expressions. Share your thoughts,
                    philosophy, and the inspiration behind your creations. Let the world see what you create.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">Connect & Collaborate</h3>
                  <p className="text-white/70 leading-relaxed">
                    Network with fellow artists, authors, and creative professionals. Join communities, participate in
                    discussions, and discover collaboration opportunities with like-minded creators.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">Host & Attend Workshops</h3>
                  <p className="text-white/70 leading-relaxed">
                    Share your expertise through workshops and masterclasses. Learn from other creators. Build deeper
                    connections through interactive creative sessions.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grow Your Business Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-[#1a0b2e]">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={container} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeInUp} className="mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Grow Your Creative Business</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Artyug transforms how you monetize your creativity. Unlike traditional platforms, we've built a system
                where your art isn't just displayed—it's actively discovered and purchased by those who appreciate it.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-2xl p-8 md:p-12 mb-8"
            >
              <h3 className="text-3xl font-serif font-bold text-primary mb-6">Direct Art Sales & Marketplace</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                List your artwork, designs, photography, or digital creations directly on your profile. Set your own
                prices and terms. When someone falls in love with your creation, they can purchase it instantly with
                transparent pricing and secure transactions.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                But it doesn't stop at the transaction. After purchase, interested buyers can connect with you directly
                through our built-in chat system. This opens doors for commissions, collaborations, custom projects, and
                long-term client relationships.
              </p>
              <p className="text-white/80 leading-relaxed">
                It's a seamless journey from discovery to purchase to collaboration—all on one platform designed with
                both artists and buyers in mind.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-md border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-bold text-primary mb-4">NFT & Digital Collectibles</h3>
                <p className="text-white/70 leading-relaxed">
                  Convert your creations into blockchain-verified digital collectibles. Add authenticity, scarcity, and
                  new revenue streams to your art through NFT functionality.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-md border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-bold text-primary mb-4">Build Your Community</h3>
                <p className="text-white/70 leading-relaxed">
                  Develop a loyal fan base and client network. Offer exclusive content, workshops, and early access to
                  your work. Monetize your community through memberships and special offerings.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-md border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-bold text-primary mb-4">Showcase Your Portfolio</h3>
                <p className="text-white/70 leading-relaxed">
                  Display your entire creative body of work in a beautifully designed space. Attract new clients,
                  collaborators, and opportunities through your professional creative presence.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-md border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-bold text-primary mb-4">Direct Client Relationships</h3>
                <p className="text-white/70 leading-relaxed">
                  Connect directly with buyers and clients who want to work with you. Negotiate custom projects,
                  commissions, and collaborations without intermediaries.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 md:px-8 bg-[#0f051e] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Start Your Creative Journey?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Join a thriving community of artists, authors, and creative visionaries. Build your brand, grow your
              business, and connect with those who truly understand your art.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download Artyug
              </button>
              <button className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Explore the Platform
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
