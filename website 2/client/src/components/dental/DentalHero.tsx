import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface DentalHeroProps {
  onScrollDown: () => void;
}

export default function DentalHero({ onScrollDown }: DentalHeroProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleBookAppointment = () => {
    window.location.hash = "#book-appointment";
  };

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col px-4 z-10" style={{ paddingTop: '30vh' }}>
      <div className="max-w-5xl mx-auto w-full">
        {/* Main hero content - no background, transparent */}
        <div className="text-center mb-8">
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent leading-tight transition-all duration-1000 ${
              isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="hero-title"
          >
            Welcome to Absolute Dental
          </h1>
          <p 
            className={`text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
              isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="hero-description"
          >
            Modern dentistry with compassionate care for Toronto families.
          </p>
        </div>

        {/* Call to action button - centered */}
        <div className="flex justify-center">
          <Button 
            onClick={handleBookAppointment}
            size="lg"
            className={`bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg transition-all duration-1000 delay-500 ${
              isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="button-book-now"
          >
            Book Your Appointment
          </Button>
        </div>

      </div>
    </section>
  );
}