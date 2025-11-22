import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import CommunitySection from '@/components/community-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-background via-purple-50/5 to-background">
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </main>
  )
}
