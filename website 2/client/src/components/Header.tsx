import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, MapPin, Menu, Smile } from "lucide-react";
import { Link, useLocation } from "wouter";

const services = [
  { name: "General Dentistry", href: "/services/general" },
  { name: "Cosmetic Dentistry", href: "/services/cosmetic" },
  { name: "Restorative Dentistry", href: "/services/restorative" },
  { name: "Emergency Dentistry", href: "/services/emergency" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Patient Resources", href: "/patient-resources" },
  { name: "Smile Gallery", href: "/smile-gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const handleBookAppointment = () => {
    // This will scroll to contact form or open modal
    window.location.hash = "#book-appointment";
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center space-x-4">
            <a 
              href="tel:4161234567" 
              className="flex items-center space-x-1 text-primary hover:text-secondary transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-3 h-3" />
              <span>(416) 123-4567</span>
            </a>
            <a 
              href="https://maps.google.com/?q=123+Beach+Ave,+Toronto,+ON+M4E+1T5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-address"
            >
              <MapPin className="w-3 h-3" />
              <span>123 Beach Ave, Toronto, ON M4E 1T5</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-xs text-muted-foreground">
            <span>Mon-Fri: 8AM-6PM</span>
            <span>•</span>
            <span>Sat: 9AM-3PM</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="link-logo">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Smile className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">Absolute Dental</span>
                <span className="text-xs text-muted-foreground">Family Dentistry</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger 
                          className={`${location === item.href ? 'text-secondary' : 'text-foreground'} hover:text-secondary`}
                          data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                            {services.map((service) => (
                              <li key={service.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={service.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    data-testid={`nav-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    <div className="text-sm font-medium leading-none">{service.name}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                            location === item.href ? 'text-secondary' : 'text-foreground'
                          }`}
                          data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Book Appointment Button */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleBookAppointment}
              variant="default"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              data-testid="button-book-appointment"
            >
              Book Appointment
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 text-lg font-medium transition-colors hover:text-secondary ${
                          location === item.href ? 'text-secondary' : 'text-foreground'
                        }`}
                        data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <div className="ml-4 mt-2 space-y-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              data-testid={`mobile-nav-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-border space-y-4">
                  <a 
                    href="tel:4161234567" 
                    className="flex items-center space-x-2 text-primary"
                    data-testid="mobile-link-phone"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(416) 123-4567</span>
                  </a>
                  <a 
                    href="https://maps.google.com/?q=123+Beach+Ave,+Toronto,+ON+M4E+1T5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground"
                    data-testid="mobile-link-address"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>123 Beach Ave, Toronto, ON M4E 1T5</span>
                  </a>
                  <div className="text-sm text-muted-foreground">
                    <div>Mon-Fri: 8AM-6PM</div>
                    <div>Sat: 9AM-3PM</div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}