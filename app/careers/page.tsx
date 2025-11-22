"use client"

import { motion } from "framer-motion"
import { Mail, ArrowRight, Code2, Bug, TrendingUp, Palette, Search } from "lucide-react"
import BackButton from "@/components/back-button"
import Footer from "@/components/footer"

const jobs = [
  {
    id: 1,
    title: "Flutter + Supabase Fullstack Intern",
    icon: Code2,
    requirements: [
      "Engineering, BCA, or related field",
      "Interest in learning and implementing Flutter & Supabase",
      "1st, 2nd, 3rd, or 4th year undergraduate students welcome",
    ],
    description:
      "Join our technical team to build beautiful mobile applications with Flutter while mastering backend development with Supabase. You'll work on real features that reach thousands of creative minds.",
  },
  {
    id: 2,
    title: "APK Release Test Intern",
    icon: Bug,
    requirements: ["Undergraduate students", "Strong attention to detail", "Passion for quality assurance"],
    description:
      "Help ensure Artyug delivers the best experience to our community. Test our app thoroughly before release, identify bugs, and provide detailed reports to help us polish every feature.",
  },
  {
    id: 3,
    title: "Marketing & Sales (Founding Team)",
    icon: TrendingUp,
    requirements: [
      "BBA MBA Undergrad students or BTech students",
      "Social media marketing experience preferred",
      "Entrepreneurial mindset",
    ],
    description:
      "Be part of our founding team and help us grow Artyug to reach every creative mind. Build our community from the ground up, create compelling campaigns, and establish Artyug as the premier platform for artists and authors.",
  },
  {
    id: 4,
    title: "Logo Designer",
    icon: Palette,
    requirements: [
      "Graphic design, visual arts, or related field",
      "Strong portfolio showcasing logo design work",
      "Proficiency in design tools (Adobe Illustrator, Figma, etc.)",
      "Creative vision and attention to detail",
    ],
    description:
      "Help shape Artyug's visual identity by creating compelling logos and brand assets. Work on projects that will be seen by thousands of creative minds and contribute to building a recognizable brand in the creative community.",
  },
  {
    id: 5,
    title: "SEO Optimization Intern",
    icon: Search,
    requirements: [
      "Marketing, Business, or related field students",
      "Basic understanding of SEO principles and keyword research",
      "Interest in digital marketing and analytics",
    ],
    description:
      "Help improve Artyug's online visibility and search engine rankings. Work on keyword optimization, content strategy, and analytics to help creative minds discover our platform. Gain hands-on experience in SEO tools and techniques.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#16213e] to-[#0f051e] pt-24 md:pt-32 pb-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <BackButton />
      <div className="container mx-auto px-4 relative z-10">
        {/* Career Page Label */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500/20 via-primary/20 to-purple-500/20 border border-purple-400/30 rounded-full backdrop-blur-sm">
            <span className="text-sm font-semibold text-purple-300 uppercase tracking-wide">Career Page</span>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance text-white">
            Build{" "}
            <span className="bg-gradient-to-r from-purple-400 via-primary to-purple-400 bg-clip-text text-transparent">Artyug</span>{" "}
            With Us
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Join our passionate team and help us create a platform where artists, authors, and creative minds connect,
            create, and thrive together. We're looking for talented individuals who believe in our mission.
          </p>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {jobs.map((job) => {
            const Icon = job.icon
            return (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-purple-900/30 via-primary/10 to-purple-800/30 rounded-2xl border border-purple-400/30 p-8 hover:border-purple-400/60 hover:bg-gradient-to-br hover:from-purple-900/40 hover:via-primary/20 hover:to-purple-800/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-primary/30 flex items-center justify-center shadow-lg shadow-purple-500/20">
                    <Icon className="w-6 h-6 text-purple-300" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold mb-3 text-white">{job.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{job.description}</p>

                <div className="space-y-3 mb-6">
                  <p className="text-sm font-semibold text-purple-300 uppercase tracking-wide">Requirements</p>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-white/70 flex items-start gap-2">
                        <span className="text-purple-400 mt-1 font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="mailto:amanlabh4@gmail.com"
                  className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-primary hover:from-purple-500 hover:to-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
                >
                  <Mail className="w-4 h-4" />
                  Apply: amanlabh4@gmail.com
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Important Note */}
        <motion.div
          className="bg-gradient-to-r from-purple-500/20 via-primary/15 to-purple-500/20 border border-purple-400/40 rounded-2xl p-8 md:p-12 mb-16 backdrop-blur-sm shadow-xl shadow-purple-500/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-lg text-white/90">
            <span className="font-semibold text-purple-300">Note:</span> We currently operate without a salary structure as
            we're bootstrapping this venture with passion and belief in our mission. However, when we secure funding and
            scale, we'll ensure our team members are rewarded generously for their invaluable contributions.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-purple-600/20 via-primary/20 to-purple-500/20 rounded-2xl border border-purple-400/40 p-8 md:p-12 text-center backdrop-blur-sm shadow-2xl shadow-purple-500/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Join the Movement?
          </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Send us your resume, portfolio, or a message about why you're passionate about Artyug. We'd love to hear
            from you!
          </p>

          <a
            href="mailto:amanlabh4@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-primary hover:from-purple-500 hover:to-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:gap-4 hover:scale-105 shadow-lg shadow-purple-500/30"
          >
            <Mail className="w-5 h-5" />
            Apply Now: amanlabh4@gmail.com
            <ArrowRight className="w-5 h-5" />
          </a>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="text-center mt-16 text-white/60 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          We review all applications thoughtfully. Expect a response within 5-7 business days.
        </motion.p>
      </div>
      <Footer />
    </main>
  )
}
