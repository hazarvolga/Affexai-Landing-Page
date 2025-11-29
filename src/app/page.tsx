import { AtAGlance } from '@/components/landing/AtAGlance';
import { Benefits } from '@/components/landing/Benefits';
import { Contact } from '@/components/landing/Contact';
import { Demo } from '@/components/landing/Demo';
import { Faq } from '@/components/landing/Faq';
import { Features } from '@/components/landing/Features';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Integrations } from '@/components/landing/Integrations';
import { Pricing } from '@/components/landing/Pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { UseCases } from '@/components/landing/UseCases';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AtAGlance />
        <Features />
        <HowItWorks />
        <UseCases />
        <Demo />
        <Benefits />
        <Integrations />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
