import HeroSection from "./components/HeroSection";
import SocialProofSection from "./components/SocialProofSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialSection from "./components/TestimonialSection ";
import FeaturesSectionTwo from "./components/FeaturesSectionTwo";
import FAQSection from "./components/FAQSection";
import BlogSection from "./components/BlogSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

const App = () => {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <SectionDivider />

      <SocialProofSection />
      <SectionDivider />

      <FeaturesSection />

      <TestimonialSection />

      <FeaturesSectionTwo />
      <SectionDivider />

      <FAQSection />
      <SectionDivider />

      <BlogSection />

      <CTASection />

      <Footer />
    </div>
  );
};

export default App;
