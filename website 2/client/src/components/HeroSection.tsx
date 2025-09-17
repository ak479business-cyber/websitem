import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollDown: () => void;
}

export default function HeroSection({ onScrollDown }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-10">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero text with glass morphism background */}
        <div className="backdrop-blur-sm bg-background/30 rounded-lg p-8 border border-border/50">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight"
            data-testid="hero-title"
          >
            Spiral Tower
          </h1>
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            data-testid="hero-description"
          >
            Experience architectural innovation through an immersive journey from sky to ground
          </p>
        </div>

        {/* Call to action */}
        <div className="space-y-4">
          <Button 
            onClick={onScrollDown}
            variant="outline"
            size="lg"
            className="bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/70"
            data-testid="button-explore"
          >
            Explore the Tower
          </Button>
          
          {/* Animated scroll indicator */}
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm text-muted-foreground">Scroll to discover</span>
            <ChevronDown className="w-5 h-5 text-muted-foreground" data-testid="icon-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  );
}