import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock, Smile } from "lucide-react";
import { Link } from "wouter";

// Inline social media icons to replace react-icons
const FacebookIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.017 0C8.396 0 7.827.028 6.684.156 5.54.284 4.803.446 4.145.75c-.706.31-1.305.735-1.901 1.332C1.647 2.679 1.222 3.278.913 3.984.609 4.642.447 5.379.32 6.523.191 7.666.164 8.235.164 11.856c0 3.621.027 4.19.156 5.334.128 1.144.29 1.88.594 2.538.31.706.735 1.305 1.332 1.901.596.596 1.195 1.021 1.901 1.332.658.304 1.394.466 2.538.594 1.143.128 1.713.156 5.334.156 3.621 0 4.19-.028 5.334-.156 1.144-.128 1.88-.29 2.538-.594.706-.31 1.305-.735 1.901-1.332.596-.596 1.021-1.195 1.332-1.901.304-.658.466-1.394.594-2.538.128-1.143.156-1.713.156-5.334 0-3.621-.028-4.19-.156-5.334-.128-1.144-.29-1.88-.594-2.538-.31-.706-.735-1.305-1.332-1.901C19.321 1.647 18.722 1.222 18.016.913 17.358.609 16.621.447 15.477.32 14.334.191 13.765.164 10.144.164h1.873zm-.056 5.403c.01 0 .022 0 .034 0 1.99 0 2.226.009 3.011.054.727.033 1.122.155 1.385.257.348.135.596.297.857.558.26.26.423.508.558.857.102.263.224.658.257 1.385.045.785.054 1.021.054 3.011s-.009 2.226-.054 3.011c-.033.727-.155 1.122-.257 1.385-.135.348-.297.596-.558.857-.26.26-.508.423-.857.558-.263.102-.658.224-1.385.257-.785.045-1.021.054-3.011.054s-2.226-.009-3.011-.054c-.727-.033-1.122-.155-1.385-.257-.348-.135-.596-.297-.857-.558-.26-.26-.423-.508-.558-.857-.102-.263-.224-.658-.257-1.385-.045-.785-.054-1.021-.054-3.011s.009-2.226.054-3.011c.033-.727.155-1.122.257-1.385.135-.348.297-.596.558-.857.26-.26.508-.423.857-.558.263-.102.658-.224 1.385-.257.785-.045 1.021-.054 3.011-.054z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <Smile className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Absolute Dental</h3>
                <p className="text-sm text-primary-foreground/80">Family Dentistry</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted smile partner in Toronto. We blend modern technology with compassionate care for families in the GTA.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                data-testid="link-linkedin"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:4161234567" 
                className="flex items-center space-x-3 text-primary-foreground/90 hover:text-secondary transition-colors"
                data-testid="footer-link-phone"
              >
                <Phone className="w-4 h-4" />
                <span>(416) 123-4567</span>
              </a>
              <a 
                href="mailto:info@absolutedental.com"
                className="flex items-center space-x-3 text-primary-foreground/90 hover:text-secondary transition-colors"
                data-testid="footer-link-email"
              >
                <Mail className="w-4 h-4" />
                <span>info@absolutedental.com</span>
              </a>
              <a 
                href="https://maps.google.com/?q=123+Beach+Ave,+Toronto,+ON+M4E+1T5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-primary-foreground/90 hover:text-secondary transition-colors"
                data-testid="footer-link-address"
              >
                <MapPin className="w-4 h-4 mt-1" />
                <span>123 Beach Ave<br />Toronto, ON M4E 1T5</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Office Hours</h4>
            <div className="space-y-2 text-primary-foreground/90">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4" />
                <div className="text-sm">
                  <div>Monday - Friday</div>
                  <div className="text-primary-foreground/70">8:00 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4"></div>
                <div className="text-sm">
                  <div>Saturday</div>
                  <div className="text-primary-foreground/70">9:00 AM - 3:00 PM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4"></div>
                <div className="text-sm">
                  <div>Sunday</div>
                  <div className="text-primary-foreground/70">Closed</div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-primary-foreground/80">
                Emergency appointments available 24/7
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link 
                href="/about" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-about"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-services"
              >
                Our Services
              </Link>
              <Link 
                href="/patient-resources" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-patient-resources"
              >
                Patient Resources
              </Link>
              <Link 
                href="/smile-gallery" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-smile-gallery"
              >
                Smile Gallery
              </Link>
              <Link 
                href="/contact" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-contact"
              >
                Contact
              </Link>
              <Link 
                href="/privacy" 
                className="block text-primary-foreground/90 hover:text-secondary transition-colors text-sm"
                data-testid="footer-link-privacy"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">
            © 2025 Absolute Dental. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-xs text-primary-foreground/70">
              <span>CDCP Accepted</span>
              <span>•</span>
              <span>Direct Insurance Billing</span>
              <span>•</span>
              <span>Wheelchair Accessible</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}