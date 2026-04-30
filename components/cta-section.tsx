"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="bg-[#F5F1EC] py-20 md:py-28 border-t border-[#E2DDD8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="label-tag mb-4">Start for Free</p>
            <h2 className="display-section text-[#0A0A0A] mb-6">
              Your art<span className="text-[#E8470A]">.</span><br />
              Your proof<span className="text-[#E8470A]">.</span><br />
              Your legacy<span className="text-[#E8470A]">.</span>
            </h2>
            <p className="text-[#6B6560] text-sm leading-relaxed max-w-sm mb-8">
              Join hundreds of artists already building on Artyug.
              No platform fees to start. No gatekeepers. Just your work and your community.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://app.artyug.art/#/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Join as Creator <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/12BvHlTS9esKKPDM7vTUcIxoeubnPs8b9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Download className="w-4 h-4" /> Download Android APK
              </a>
            </div>
            <p className="text-[#6B6560] text-xs mt-4">
              Free to join · Available on Android &amp; Web · iOS coming soon
            </p>
          </motion.div>

          {/* Right — step list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {[
              { step: "01", title: "Create Your Profile", body: "Sign up free. Choose your creator type. Set your city and artistic style." },
              { step: "02", title: "List or Discover Art", body: "Post artworks with price, medium, and size. Collectors browse and connect directly." },
              { step: "03", title: "Sell Securely", body: "Direct artist-to-collector transactions. Demo mode lets you test the full flow risk-free." },
              { step: "04", title: "Get Your Certificate", body: "Every sale generates a QR + blockchain certificate of authenticity. Yours forever." },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#EAE5DF] flex items-center justify-center group-hover:bg-[#E8470A] transition-colors duration-300">
                  <span className="text-xs font-black text-[#0A0A0A] group-hover:text-white transition-colors">{s.step}</span>
                </div>
                <div>
                  <p className="font-bold text-[#0A0A0A] text-sm">{s.title}</p>
                  <p className="text-[#6B6560] text-xs leading-relaxed mt-1">{s.body}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
