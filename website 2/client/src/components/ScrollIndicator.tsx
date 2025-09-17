import { Progress } from "@/components/ui/progress";

interface ScrollIndicatorProps {
  progress: number;
}

export default function ScrollIndicator({ progress }: ScrollIndicatorProps) {
  return (
    <div 
      className="fixed top-4 right-4 z-20 bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border/50"
      data-testid="scroll-indicator"
    >
      <div className="flex items-center space-x-3">
        <span className="text-sm font-medium text-muted-foreground">Tower Reveal</span>
        <div className="w-24">
          <Progress 
            value={progress * 100} 
            className="h-2"
            data-testid="progress-tower-reveal"
          />
        </div>
        <span className="text-sm font-medium text-foreground">
          {Math.round(progress * 100)}%
        </span>
      </div>
    </div>
  );
}