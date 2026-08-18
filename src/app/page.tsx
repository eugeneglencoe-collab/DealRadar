'use client';

import { Hero } from '@/components/Hero';
import { PainPoints } from '@/components/PainPoints';
import { FormSection } from '@/components/FormSection';
import { HowItWorks } from '@/components/HowItWorks';
import { Example } from '@/components/Example';
import { Positioning } from '@/components/Positioning';
import { IsItForYou } from '@/components/IsItForYou';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <FormSection />
      <HowItWorks />
      <Example />
      <Positioning />
      <IsItForYou />
      <FAQ />
      <Footer />
    </main>
  );
}
