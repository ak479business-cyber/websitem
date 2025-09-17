import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  className?: string;
}

export default function ContentSection({ 
  title, 
  subtitle, 
  description, 
  highlights,
  className = ""
}: ContentSectionProps) {
  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-16 ${className}`}>
      <div className="max-w-4xl mx-auto z-10 relative">
        <Card className="backdrop-blur-sm bg-background/70 border-border/50">
          <CardHeader className="text-center space-y-4">
            <div>
              {subtitle && (
                <Badge 
                  variant="secondary" 
                  className="mb-4"
                  data-testid={`badge-${subtitle.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {subtitle}
                </Badge>
              )}
              <CardTitle 
                className="text-3xl md:text-4xl font-bold mb-4"
                data-testid={`title-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {title}
              </CardTitle>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <p 
              className="text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto"
              data-testid={`description-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {description}
            </p>
            
            {highlights && highlights.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 rounded-lg bg-muted/30 border border-border/30"
                    data-testid={`highlight-${index}`}
                  >
                    <span className="text-sm font-medium text-foreground">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}