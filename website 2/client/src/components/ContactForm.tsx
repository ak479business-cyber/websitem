import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const serviceOptions = [
  { value: "general", label: "General Dentistry" },
  { value: "cosmetic", label: "Cosmetic Dentistry" },
  { value: "restorative", label: "Restorative Dentistry" },
  { value: "emergency", label: "Emergency Dentistry" },
  { value: "consultation", label: "Initial Consultation" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    preferredDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service";
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a preferred date";
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission - in a real app, this would send to backend
      console.log("Form submission:", formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success modal
      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        preferredDate: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section 
      id="book-appointment" 
      className="min-h-screen flex items-center justify-center px-4 py-16 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-background/85 rounded-xl p-8 border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take the first step towards optimal oral health. Our friendly team is ready to 
                welcome you to our dental family.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                <a 
                  href="tel:4161234567" 
                  className="flex items-center space-x-3 text-primary hover:text-secondary transition-colors group"
                  data-testid="contact-phone"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">(416) 123-4567</div>
                    <div className="text-sm text-muted-foreground">Call us directly</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@absolutedental.com"
                  className="flex items-center space-x-3 text-primary hover:text-secondary transition-colors group"
                  data-testid="contact-email"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">info@absolutedental.com</div>
                    <div className="text-sm text-muted-foreground">Email us anytime</div>
                  </div>
                </a>

                <div className="flex items-center space-x-3 text-primary">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Mon-Fri: 8AM-6PM</div>
                    <div className="text-sm text-muted-foreground">Sat: 9AM-3PM</div>
                  </div>
                </div>

                <a 
                  href="https://maps.google.com/?q=123+Beach+Ave,+Toronto,+ON+M4E+1T5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-primary hover:text-secondary transition-colors group"
                  data-testid="contact-address"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">123 Beach Ave</div>
                    <div className="text-sm text-muted-foreground">Toronto, ON M4E 1T5</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                <p className="text-sm text-foreground">
                  <strong>New patients welcome</strong> • CDCP accepted • Direct insurance billing • 
                  Flexible payment options available
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="backdrop-blur-sm bg-background/85 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Request an Appointment</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        placeholder="Enter your full name"
                        data-testid="input-name"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="(416) 123-4567"
                        data-testid="input-phone"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="your.email@example.com"
                      data-testid="input-email"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Type *</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => updateFormData("serviceType", value)}
                      >
                        <SelectTrigger data-testid="select-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.serviceType && (
                        <p className="text-sm text-destructive">{errors.serviceType}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => updateFormData("preferredDate", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        data-testid="input-date"
                      />
                      {errors.preferredDate && (
                        <p className="text-sm text-destructive">{errors.preferredDate}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => updateFormData("message", e.target.value)}
                      placeholder="Tell us about your dental needs or any specific concerns..."
                      rows={4}
                      data-testid="textarea-message"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    disabled={isSubmitting}
                    data-testid="button-send-request"
                  >
                    {isSubmitting ? "Sending Request..." : "Send Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent data-testid="success-modal">
          <DialogHeader>
            <DialogTitle className="text-primary">Thank You!</DialogTitle>
            <DialogDescription>
              We've received your appointment request and will get back to you within 24 hours. 
              Our team is excited to help you achieve your best smile!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button 
              onClick={() => setShowSuccessModal(false)}
              data-testid="button-close-modal"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}