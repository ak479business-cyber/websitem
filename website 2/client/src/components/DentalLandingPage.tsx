import { useEffect, useState, useRef } from "react";
import TowerDescend from "./TowerDescend";
import Header from "./Header";
import Footer from "./Footer";
import DentalHero from "./dental/DentalHero";
import ServicesOverview from "./dental/ServicesOverview";
import TestimonialsSection from "./dental/TestimonialsSection";
import USPsSection from "./dental/USPsSection";
import ContactForm from "./ContactForm";
import GoogleMaps from "./GoogleMaps";

export default function DentalLandingPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        if (scrollWrapperRef.current) {
          const scrollTop = window.scrollY;
          const wrapperTop = scrollWrapperRef.current.offsetTop;
          const wrapperHeight = scrollWrapperRef.current.scrollHeight;
          const viewportHeight = window.innerHeight;
          
          // Calculate progress within the tower descent area
          const scrollStart = wrapperTop;
          const scrollEnd = wrapperTop + wrapperHeight - viewportHeight;
          const scrollRange = scrollEnd - scrollStart;
          
          if (scrollRange > 0) {
            const progress = Math.max(0, Math.min(1, (scrollTop - scrollStart) / scrollRange));
            setScrollProgress(progress);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const scrollToSection = (sectionIndex: number) => {
    const sectionHeight = window.innerHeight;
    window.scrollTo({
      top: sectionHeight * sectionIndex,
      behavior: "smooth"
    });
  };

  return (
    <div className="bg-background text-foreground" data-testid="dental-landing-page">
      {/* Fixed header */}
      <Header />

      {/* Tower descent wrapper - provides scroll room, height calculated based on sections */}
      <div 
        ref={scrollWrapperRef}
        className="relative"
        style={{ height: '600vh' }} // Increased height for 5 sections + buffer
      >
        {/* Fixed tower descent background */}
        <TowerDescend scrollProgress={scrollProgress} />
        
        {/* Content sections positioned at key scroll points */}
        <div className="relative z-10">
          {/* Hero section - at the top (tower tip visible) */}
          <div className="h-screen relative">
            <DentalHero onScrollDown={() => scrollToSection(1)} />
          </div>

          {/* Services overview section */}
          <div className="relative" style={{ marginTop: '20vh' }}>
            <ServicesOverview />
          </div>

          {/* USPs section */}
          <div className="relative" style={{ marginTop: '20vh' }}>
            <USPsSection />
          </div>

          {/* Testimonials section */}
          <div className="relative" style={{ marginTop: '20vh' }}>
            <TestimonialsSection />
          </div>

          {/* Contact form section */}
          <div className="relative" style={{ marginTop: '20vh' }}>
            <ContactForm />
          </div>

          {/* Google Maps section - at the end of scroll sequence */}
          <div className="relative" style={{ marginTop: '30vh' }}>
            <GoogleMaps />
          </div>

          {/* Footer - at the bottom of scroll sequence */}
          <div className="relative" style={{ marginTop: '10vh' }}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}