import HeroSlider from "@/components/hero-slider";
import AboutSection from "@/components/about-section";
import ExpertiseSection from "@/components/expertise-section";
import WhyChooseUsSection from "@/components/why-choose-us-section";
import StatsSection from "@/components/stats-section";
import FeaturedProjects from "@/components/featured-projects";
import CallToActionSection from "@/components/cta-section";
import TestimonialsSection from "@/components/testimonials-section";
import PartnersSection from "@/components/partners-section";
import PageTransition from "@/components/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <HeroSlider />
      <AboutSection />
      <ExpertiseSection />
      <WhyChooseUsSection />
      <StatsSection />
      <FeaturedProjects />
      <CallToActionSection />
      <TestimonialsSection />
      <PartnersSection />
    </PageTransition>
  );
}
