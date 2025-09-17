import { useEffect, useState, useRef } from "react";
import TowerDescend from "./TowerDescend";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ScrollIndicator from "./ScrollIndicator";

export default function LandingPage() {
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
    <div className="bg-background text-foreground" data-testid="landing-page">
      {/* Tower descent wrapper - provides scroll room */}
      <div 
        ref={scrollWrapperRef}
        className="relative"
        style={{ height: '500vh' }} // Tall wrapper for scroll room
      >
        {/* Fixed tower descent background */}
        <TowerDescend scrollProgress={scrollProgress} />
        
        {/* Scroll progress indicator */}
        <ScrollIndicator progress={scrollProgress} />
        
        {/* Content sections positioned at key scroll points */}
        <div className="relative z-10">
          {/* Hero section - at the top (tower tip visible) */}
          <div className="absolute top-0 w-full">
            <HeroSection onScrollDown={() => scrollToSection(1)} />
          </div>
          
          {/* Vision section - positioned at 25% scroll */}
          <div className="absolute w-full" style={{ top: '125vh' }}>
            <ContentSection
              subtitle="Architectural Vision"
              title="Twisting Toward Tomorrow"
              description="This iconic spiral tower represents the pinnacle of modern architectural design, where form meets function in perfect harmony. Each twisted floor creates unique perspectives and maximizes natural light throughout the structure."
              highlights={[
                "60 Floors of Innovation",
                "Sustainable Design",
                "Mixed-Use Spaces"
              ]}
            />
          </div>
          
          {/* Features section - positioned at 50% scroll */}
          <div className="absolute w-full" style={{ top: '250vh' }}>
            <ContentSection
              subtitle="Engineering Marvel"  
              title="Structural Excellence"
              description="Advanced engineering techniques enable the tower's distinctive spiral form while ensuring maximum stability and efficiency. The building showcases cutting-edge materials and construction methods."
              highlights={[
                "Seismic Resistance",
                "Energy Efficiency",
                "Smart Building Technology"
              ]}
            />
          </div>
          
          {/* Final section - positioned at 75% scroll */}
          <div className="absolute w-full" style={{ top: '375vh' }}>
            <ContentSection
              subtitle="Urban Impact"
              title="Redefining Skylines"
              description="More than just a building, this tower serves as a beacon of architectural progress, inspiring future developments and setting new standards for urban design and sustainability."
              highlights={[
                "LEED Platinum Certified",
                "Community Spaces",
                "Iconic Landmark"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}