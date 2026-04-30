"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  Download,
  TrendingUp,
  Eye,
  ShoppingBag,
  Star,
  CheckCircle2,
  Users,
  Lock,
  Truck,
  BadgeCheck,
  Frame,
  Banknote,
  IdCard,
} from "lucide-react"

/* ─── Phone Carousel images ─── */
const screenshots = [
  { src: "/images/SS1.png", label: "Feed" },
  { src: "/images/SS2.png", label: "Explore" },
  { src: "/images/ss3.png", label: "Communities" },
  { src: "/images/ss4.png", label: "Profile" },
  { src: "/images/ss5.png", label: "Artworks" },
]

/* ─── Imaginary bar chart data ─── */
const barData = [40, 65, 45, 80, 60, 90, 75]
const barLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

const trustHighlights: { Icon: typeof Lock; label: string }[] = [
  { Icon: Lock, label: "Secure Payments" },
  { Icon: Truck, label: "Specialized Shipping" },
  { Icon: BadgeCheck, label: "Registered Ownership" },
  { Icon: Frame, label: "Museum-quality Art" },
  { Icon: Banknote, label: "Transparent Pricing" },
  { Icon: IdCard, label: "Verified Community" },
]

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  const [activeImg, setActiveImg] = useState(0)
  const [liveCount, setLiveCount] = useState(1247)

  /* Fake live visitor counter */
  useEffect(() => {
    const id = setInterval(() => {
      setLiveCount((n) => n + Math.floor(Math.random() * 3 - 1))
    }, 2500)
    return () => clearInterval(id)
  }, [])

  /* Auto-advance carousel */
  useEffect(() => {
    const id = setInterval(() => setActiveImg((p) => (p + 1) % screenshots.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section ref={ref} className="bg-[#F5F1EC] pt-14">
      {/* ══════════════════════════════════════
          TOP: HEADLINE + DASHBOARD (2 col)
      ══════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-start">

          {/* LEFT ── Headline + subtitle + CTAs */}
          <div className="lg:pr-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 mb-7"
            >
              <span className="text-[#E8470A] text-base">✦</span>
              <span className="label-tag">The Operating System for Trusted Art Commerce</span>
            </motion.div>

            <motion.h1
              className="display-hero text-[#0A0A0A] mb-6"
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              BUILD YOUR<br />
              <span className="text-[#E8470A]">ART WORLD</span>
              <span className="text-[#E8470A]">.</span>
            </motion.h1>

            <motion.p
              className="text-[#6B6560] text-base leading-relaxed max-w-md mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              Sell artwork. Run auctions. Host events. Build guilds. Give collectors
              blockchain-backed ownership proof. Artyug is where niche creators
              protect their work and build their legacy.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.32 }}
            >
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
                className="btn-download-app"
              >
                <Download className="w-4 h-4 shrink-0" />
                Download the App
              </a>
            </motion.div>
          </div>

          {/* RIGHT ── Imaginary Artist Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full min-w-0 max-w-lg mx-auto lg:mx-0 lg:max-w-none"
          >
            {/* Main dashboard card — top-aligned with left column (no vertical centering gap) */}
            <div
              className="rounded-2xl overflow-hidden border border-[#E2DDD8]"
              style={{ background: "#FFFFFF", boxShadow: "0 12px 60px rgba(0,0,0,0.08)" }}
            >
              {/* Dashboard top bar */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 border-b border-[#F0EBE5]">
                <div className="flex items-center gap-2">
                  <span className="font-black text-sm text-[#0A0A0A] tracking-tight">ARTYUG<span className="text-[#E8470A]">.</span></span>
                  <span className="bg-[#F0EBE5] text-[#6B6560] text-[10px] font-bold px-2 py-0.5 rounded-full">Artist Studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                  <span className="text-[10px] font-bold text-[#16A34A]">Live</span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                {/* Top stat row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-4">
                  {[
                    { icon: ShoppingBag, label: "Total Sales", value: "₹1,24,000", change: "+18%", up: true },
                    { icon: Eye, label: "Profile Views", value: "8,412", change: "+32%", up: true },
                    { icon: Star, label: "Avg Rating", value: "4.9 / 5", change: "+0.2", up: true },
                  ].map((s, i) => {
                    const Icon = s.icon
                    return (
                      <div key={i} className="bg-[#F9F6F3] rounded-lg sm:rounded-xl p-2.5 sm:p-3 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <Icon className="w-3.5 h-3.5 text-[#E8470A]" />
                          <span className={`text-[9px] font-bold ${s.up ? "text-[#16A34A]" : "text-red-500"}`}>{s.change}</span>
                        </div>
                        <p className="font-black text-sm text-[#0A0A0A]">{s.value}</p>
                        <p className="text-[9px] text-[#6B6560] mt-0.5">{s.label}</p>
                      </div>
                    )
                  })}
                </div>

                {/* Chart + recent activity */}
                <div className="grid grid-cols-5 gap-2 sm:gap-2.5 mb-3">
                  {/* Bar chart */}
                  <div className="col-span-3 bg-[#F9F6F3] rounded-lg sm:rounded-xl p-2.5 sm:p-3 min-w-0">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <p className="text-xs font-bold text-[#0A0A0A]">Weekly Revenue</p>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-[#E8470A]" />
                        <span className="text-[10px] font-bold text-[#E8470A]">+24%</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-1 sm:gap-1.5 h-16">
                      {barData.map((h, i) => (
                        <div key={i} className="flex flex-col items-center flex-1 gap-1">
                          <div
                            className="w-full rounded-sm transition-all duration-500"
                            style={{
                              height: `${(h / 100) * 52}px`,
                              background: i === 5 ? "#E8470A" : "#E2DDD8",
                            }}
                          />
                          <span className="text-[8px] text-[#6B6560]">{barLabels[i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent sold */}
                  <div className="col-span-2 bg-[#F9F6F3] rounded-lg sm:rounded-xl p-2.5 sm:p-3 min-w-0">
                    <p className="text-xs font-bold text-[#0A0A0A] mb-1.5 sm:mb-2">Recent Sales</p>
                    <div className="flex flex-col gap-2">
                      {[
                        { name: "Monsoon Series", price: "₹4,500" },
                        { name: "Urban Noise #3", price: "₹8,200" },
                        { name: "Folk Wave I", price: "₹2,800" },
                      ].map((a, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ background: ["#E8470A", "#0A0A0A", "#16A34A"][i] }}
                            />
                            <p className="text-[9px] text-[#0A0A0A] truncate max-w-[70px]">{a.name}</p>
                          </div>
                          <p className="text-[9px] font-bold text-[#E8470A]">{a.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom badge + certification row */}
                <div className="flex items-center justify-between gap-2 bg-[#FFF3EF] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E8470A]" />
                    <div>
                      <p className="text-xs font-bold text-[#0A0A0A]">Gold Creator Badge</p>
                      <p className="text-[9px] text-[#6B6560]">12 verified sales · NFC-enabled</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-bold text-[#E8470A] uppercase tracking-wider">QR + NFC</p>
                    <p className="text-[9px] text-[#6B6560]">On-chain cert</p>
                  </div>
                </div>

                {/* Live visitors */}
                <div className="mt-3 flex items-center gap-2">
                  <Users className="w-3 h-3 text-[#6B6560]" />
                  <span className="text-[10px] text-[#6B6560]">
                    <span className="font-bold text-[#0A0A0A]">{liveCount.toLocaleString()}</span> artists on platform right now
                  </span>
                </div>
              </div>
            </div>


          </motion.div>
        </div>

        {/* Full-width band — was trapped in left column; spans entire container */}
        <motion.div
          className="mt-10 lg:mt-12 w-full rounded-lg border border-[#E2DDD8] overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.38 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-[#E2DDD8]">
            {trustHighlights.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-2 px-2 py-4 sm:px-3 sm:py-5 text-center bg-white min-h-[5.5rem]"
              >
                <Icon className="w-5 h-5 text-[#0A0A0A] shrink-0" strokeWidth={1.75} aria-hidden />
                <span className="text-[11px] sm:text-xs font-semibold text-[#0A0A0A] leading-tight max-w-[9rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 lg:mt-10 w-full grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 sm:gap-x-8 lg:gap-x-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          {[
            { title: "Shop + Auctions + Guilds", sub: "Creator stack" },
            { title: "Secure Payments", sub: "Encrypted checkout" },
            { title: "Specialized Shipping", sub: "Art-safe logistics" },
            { title: "Minimal Platform Fees", sub: "Keep more per sale" },
            { title: "QR + NFC + On-chain", sub: "Verification methods" },
            { title: "Transparent Pricing", sub: "No hidden fees" },
            { title: "Verified Community", sub: "Trusted creators" },
            { title: "Free Android Download", sub: "No app store needed" },
          ].map((item, i) => (
            <div key={i} className="min-w-0">
              <p className="text-[#0A0A0A] font-bold text-sm leading-snug">{item.title}</p>
              <p className="text-[#6B6560] text-xs mt-0.5">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          PHONE CAROUSEL — full-width strip
      ══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="border-t border-[#E2DDD8] bg-[#EEE9E3] py-10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-widest text-[#6B6560] uppercase">Inside the App</p>
            <p className="font-black text-lg text-[#0A0A0A] mt-0.5">
              Beauty in every screen<span className="text-[#E8470A]">.</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                aria-label={`Screenshot ${i + 1}`}
                style={{
                  width: i === activeImg ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === activeImg ? "#E8470A" : "#C8C3BC",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Carousel track */}
        <div
          className="relative flex items-center justify-center"
          style={{ perspective: "1200px", height: 430 }}
        >
          {screenshots.map((img, i) => {
            const distance = ((i - activeImg) + screenshots.length) % screenshots.length
            const adjustedDist = distance > screenshots.length / 2 ? distance - screenshots.length : distance

            let transform = ""
            let opacity = 0
            let zIndex = 0
            let width = 0

            if (adjustedDist === 0) {
              transform = "translateX(0) rotateY(0deg) scale(1)"
              opacity = 1
              zIndex = 10
              width = 180
            } else if (adjustedDist === 1 || adjustedDist === -1) {
              const dir = adjustedDist > 0 ? 1 : -1
              transform = `translateX(${dir * 210}px) rotateY(${dir * -28}deg) scale(0.82)`
              opacity = 0.75
              zIndex = 7
              width = 160
            } else if (Math.abs(adjustedDist) === 2) {
              const dir = adjustedDist > 0 ? 1 : -1
              transform = `translateX(${dir * 380}px) rotateY(${dir * -40}deg) scale(0.65)`
              opacity = 0.4
              zIndex = 4
              width = 140
            } else {
              opacity = 0
              transform = `translateX(${adjustedDist * 300}px) scale(0.5)`
              zIndex = 0
            }

            return (
              <div
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  position: "absolute",
                  transition: "all 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform,
                  opacity,
                  zIndex,
                  cursor: adjustedDist === 0 ? "default" : "pointer",
                }}
              >
                {/* Phone frame */}
                <div
                  style={{
                    background: adjustedDist === 0
                      ? "linear-gradient(135deg, #E8470A 0%, #C73A08 100%)"
                      : "linear-gradient(135deg, #3A3A3A 0%, #1A1A1A 100%)",
                    padding: "4px",
                    borderRadius: "2.2rem",
                    boxShadow: adjustedDist === 0
                      ? "0 20px 60px rgba(232,71,10,0.35), 0 4px 20px rgba(0,0,0,0.2)"
                      : "0 8px 30px rgba(0,0,0,0.15)",
                    transition: "all 0.55s ease",
                  }}
                >
                  <div style={{ background: "#000", borderRadius: "2rem", padding: "10px 8px 8px" }}>
                    {/* Notch */}
                    <div style={{ width: 60, height: 6, background: "#111", borderRadius: 3, margin: "0 auto 8px" }} />
                    <img
                      src={img.src}
                      alt={img.label}
                      style={{ width, borderRadius: "1.4rem", display: "block", userSelect: "none" }}
                      draggable={false}
                    />
                  </div>
                </div>
                {/* Label below active phone */}
                {adjustedDist === 0 && (
                  <p className="text-center text-xs font-bold text-[#0A0A0A] mt-3 tracking-wide">{img.label}</p>
                )}
              </div>
            )
          })}
        </div>

        {/* Download strip */}
        <div className="max-w-7xl mx-auto px-6 mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.artyug.art"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Open Web App <ArrowRight className="w-4 h-4" />
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
      </motion.div>

      {/* Partners bar */}
      <div className="border-t border-[#E2DDD8] bg-[#F5F1EC]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] font-bold tracking-widest text-[#6B6560] uppercase">In Collaboration With</p>
          <div className="flex items-center gap-10">
            <div className="text-center">
              <p className="font-black text-sm text-[#0A0A0A] tracking-tight">MOTOJOJO</p>
              <p className="text-[9px] text-[#6B6560]">Event Partners</p>
            </div>
            <div className="text-center">
              <p className="font-black text-sm text-[#0A0A0A] tracking-tight">WEBCOIN LABS</p>
              <p className="text-[9px] text-[#6B6560]">Technology Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
