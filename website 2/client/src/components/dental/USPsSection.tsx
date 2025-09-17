import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  Clock, 
  Users, 
  Zap, 
  Globe,
  Accessibility,
  CreditCard
} from "lucide-react";

const usps = [
  {
    icon: Award,
    title: "LEED Platinum Certified",
    description: "Environmentally conscious practice with sustainable operations",
    color: "text-green-600"
  },
  {
    icon: Shield,
    title: "Advanced CEREC Technology",
    description: "Same-day crowns and restorations using cutting-edge technology",
    color: "text-primary"
  },
  {
    icon: CreditCard,
    title: "Direct Insurance Billing",
    description: "We handle your insurance claims directly for your convenience",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "CDCP Accepted",
    description: "Canadian Dental Care Plan provider for eligible patients",
    color: "text-accent-foreground"
  },
  {
    icon: Globe,
    title: "Multilingual Staff",
    description: "Service in English, French, Spanish, and Mandarin",
    color: "text-blue-600"
  },
  {
    icon: Accessibility,
    title: "Wheelchair Accessible",
    description: "Fully accessible facility welcoming all patients",
    color: "text-purple-600"
  },
  {
    icon: Clock,
    title: "Extended Hours",
    description: "Convenient scheduling including Saturday appointments",
    color: "text-orange-600"
  },
  {
    icon: Zap,
    title: "Emergency Care",
    description: "Same-day emergency appointments and 24/7 on-call support",
    color: "text-red-600"
  }
];

export default function USPsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-background/80">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Sets Absolute Dental Apart
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're more than just a dental practice. We're your partners in oral health, 
            combining advanced technology with compassionate care to deliver exceptional results.
          </p>
        </div>

        {/* USPs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {usps.map((usp, index) => {
            const IconComponent = usp.icon;
            return (
              <Card 
                key={index}
                className="backdrop-blur-sm bg-background/80 border-border/50 hover-elevate transition-all duration-300 text-center"
                data-testid={`usp-${index}`}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-background/80 flex items-center justify-center ${usp.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {usp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {usp.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="backdrop-blur-sm bg-secondary/10 border-secondary/30 text-center p-6">
            <div className="text-3xl font-bold text-secondary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Years Serving Toronto</div>
          </Card>
          <Card className="backdrop-blur-sm bg-primary/10 border-primary/30 text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">2000+</div>
            <div className="text-sm text-muted-foreground">Happy Patients</div>
          </Card>
          <Card className="backdrop-blur-sm bg-accent/20 border-accent/40 text-center p-6">
            <div className="text-3xl font-bold text-accent-foreground mb-2">4.9★</div>
            <div className="text-sm text-muted-foreground">Google Rating</div>
          </Card>
        </div>
      </div>
    </section>
  );
}