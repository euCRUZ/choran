import { HeroSection } from "@/components/hero-section"
import { FormSection } from "@/components/form-section"
import { SolutionSection } from "@/components/solution-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <FormSection />
        <SolutionSection />
      </main>
      <Footer />
    </>
  )
}
