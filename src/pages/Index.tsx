import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import Footer from "@/components/Footer";
import FakeNotifications from "@/components/FakeNotifications";

const Index = () => {
  return (
    <div className="min-h-screen min-w-full overflow-hidden">
      <FakeNotifications />
      <HeroSection />
      <BenefitsSection />
      <GallerySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
};

export default Index;
