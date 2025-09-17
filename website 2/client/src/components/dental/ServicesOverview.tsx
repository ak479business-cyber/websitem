import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Stethoscope, 
  Sparkles, 
  Wrench, 
  Zap,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "general",
    title: "General Dentistry",
    description: "Routine checkups, cleanings, and preventive care for lifelong oral health. Digital X-rays with 90% less radiation.",
    icon: Stethoscope,
    features: ["Checkups & Cleanings", "Digital X-rays", "Fluoride Treatments", "Oral Cancer Screening"],
    href: "/services/general",
    color: "text-primary",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with Invisalign, professional whitening, and porcelain veneers for confidence you deserve.",
    icon: Sparkles,
    features: ["Invisalign Clear Aligners", "Professional Whitening", "Porcelain Veneers", "Smile Makeovers"],
    href: "/services/cosmetic",
    color: "text-secondary",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    description: "Restore damaged teeth with dental implants, CEREC same-day crowns, and natural-looking fillings.",
    icon: Wrench,
    features: ["Dental Implants", "CEREC Same-Day Crowns", "Bridges", "Root Canal Therapy"],
    href: "/services/restorative",
    color: "text-accent-foreground",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "emergency",
    title: "Emergency Dentistry",
    description: "Immediate relief for dental emergencies. Same-day appointments available for urgent dental care needs.",
    icon: Zap,
    features: ["Same-Day Emergency Care", "Pain Relief", "Broken Tooth Repair", "24/7 On-Call Support"],
    href: "/services/emergency",
    color: "text-destructive",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
  }
];

export default function ServicesOverview() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-background/80">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Comprehensive Dental Care for Your Family
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine checkups to advanced procedures, we provide complete dental care 
            using the latest technology and techniques.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="backdrop-blur-sm bg-background/80 border-border/50 hover-elevate transition-all duration-300 overflow-hidden group"
                data-testid={`card-service-${service.id}`}
              >
                {/* Service image header */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center ${service.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-center space-x-2 text-sm"
                          data-testid={`feature-${service.id}-${index}`}
                        >
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full mt-4 group hover:bg-primary hover:text-primary-foreground"
                      data-testid={`button-learn-more-${service.id}`}
                    >
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="backdrop-blur-sm bg-secondary/10 border-secondary/30 p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Start Your Dental Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Schedule your consultation today and discover how we can help you achieve 
              the healthy, beautiful smile you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => window.location.hash = "#book-appointment"}
                data-testid="button-schedule-consultation"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                data-testid="button-view-all-services"
              >
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}