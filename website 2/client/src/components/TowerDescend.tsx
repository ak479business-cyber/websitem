import { useEffect, useState, useRef } from "react";
import towerImage from "../assets/tower.png";

interface TowerDescendProps {
  scrollProgress: number;
}

export default function TowerDescend({ scrollProgress }: TowerDescendProps) {
  const [maxTranslate, setMaxTranslate] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateMaxTranslate = () => {
      if (imageRef.current && containerRef.current) {
        const displayedHeight = imageRef.current.getBoundingClientRect().height || imageRef.current.naturalHeight;
        const viewportHeight = window.innerHeight;
        const newMaxTranslate = Math.max(0, displayedHeight - viewportHeight);
        setMaxTranslate(newMaxTranslate);
      }
    };

    const image = imageRef.current;
    if (image) {
      if (image.complete) {
        calculateMaxTranslate();
      } else {
        image.addEventListener('load', calculateMaxTranslate);
        return () => image.removeEventListener('load', calculateMaxTranslate);
      }
    }

    window.addEventListener('resize', calculateMaxTranslate);
    return () => window.removeEventListener('resize', calculateMaxTranslate);
  }, []);

  // Calculate the translateY value based on scroll progress
  const translateY = -scrollProgress * maxTranslate;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      data-testid="tower-descend-container"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/50" />
      
      {/* Tower image that moves up as user scrolls down - positioned to the right */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imageRef}
          src={towerImage}
          alt="Spiral Tower"
          className="absolute h-auto w-auto object-contain opacity-30 sm:opacity-40 md:opacity-30"
          style={{
            right: '0',
            top: '150px',
            transform: `translateY(${translateY}px) translateX(0px)`,
            willChange: 'transform',
            transition: scrollProgress === 0 ? 'transform 0.3s ease-out' : 'none',
            objectPosition: 'right center',
            // Improved mobile responsiveness
            maxWidth: '100vw',
            height: 'auto'
          }}
          decoding="async"
          data-testid="tower-image"
        />
      </div>
      
      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}