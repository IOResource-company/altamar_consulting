import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhatWeDo } from "@/components/WhatWeDo";
import { EngagementLadder } from "@/components/EngagementLadder";
import { MethodStrip } from "@/components/MethodStrip";
import { SelectedWork } from "@/components/SelectedWork";
import { Team } from "@/components/Team";
import { TrustStrip } from "@/components/TrustStrip";
import { Faq } from "@/components/Faq";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <WhatWeDo />
        <EngagementLadder />
        <MethodStrip />
        <SelectedWork />
        <Team />
        <TrustStrip />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
