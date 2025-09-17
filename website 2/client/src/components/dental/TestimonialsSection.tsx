import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    rating: 5,
    review: "Best dentist in Toronto! Dr. Smith and the team made my dental implant procedure completely painless. The CEREC technology meant I got my crown the same day. Highly recommend!",
    treatment: "Dental Implant & CEREC Crown",
    location: "Toronto, ON",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b14f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=60"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    review: "Amazing experience with Invisalign treatment. The staff was professional, friendly, and always accommodated my schedule. My smile transformation exceeded my expectations!",
    treatment: "Invisalign Clear Aligners",
    location: "Mississauga, ON",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=60"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    review: "Family-friendly practice that truly cares. They've been taking care of our family for 3 years. The kids actually look forward to their appointments! Direct billing made everything easy.",
    treatment: "Family Dental Care",
    location: "Etobicoke, ON",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=60"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-background/80">
            Patient Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real patients who trust us with their smiles. 
            Join thousands of satisfied patients in the GTA.
          </p>
        </div>

        {/* Google rating highlight */}
        <div className="text-center mb-8">
          <Card className="inline-block backdrop-blur-sm bg-background/80 border-border/50 px-6 py-4">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-primary">4.9</span>
              <span className="text-muted-foreground">• 200+ Google Reviews</span>
            </div>
          </Card>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="backdrop-blur-sm bg-background/80 border-border/50 hover-elevate transition-all duration-300 relative"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-secondary mb-4 opacity-60" />
                
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-foreground leading-relaxed mb-4 text-sm">
                  "{testimonial.review}"
                </p>

                {/* Patient info */}
                <div className="border-t border-border/30 pt-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12 border-2 border-border/30">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-primary text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mt-3 text-xs">
                    {testimonial.treatment}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="backdrop-blur-sm bg-primary/5 border-primary/20 p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Join Our Happy Patients
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the difference that personalized, compassionate dental care can make. 
              We're accepting new patients and would love to welcome you to our dental family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => window.location.hash = "#book-appointment"}
                data-testid="button-become-patient"
              >
                Become a Patient
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                data-testid="button-read-more-reviews"
              >
                <Link href="https://g.page/r/absolutedental/reviews" target="_blank">
                  Read More Reviews
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}