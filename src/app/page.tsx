import Hero from "@/components/homepage/Hero";
import TrustMetrics from "@/components/homepage/TrustMetrics";
import FeatureGrid from "@/components/homepage/FeatureGrid";
import SecurityVault from "@/components/homepage/SecurityVault";
import PricingSection from "@/components/homepage/PricingSection";
import Testimonials from "@/components/homepage/Testimonials";
import FaqSection from "@/components/homepage/FaqSection";
import CtaBanner from "@/components/homepage/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMetrics />
      <FeatureGrid />
      <SecurityVault />
      <PricingSection />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
