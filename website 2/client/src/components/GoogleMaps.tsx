export default function GoogleMaps() {
  const address = "123 Beach Ave, Toronto, ON M4E 1T5";
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <section className="py-16 px-4 bg-muted/30" data-testid="google-maps-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Visit Our Clinic</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in Toronto, our modern dental clinic is easily accessible 
            and offers ample parking for your convenience.
          </p>
        </div>
        
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={`https://maps.google.com/maps?q=${encodedAddress}&output=embed`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Absolute Dental Location"
            className="w-full"
            data-testid="google-maps-iframe"
          />
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-background rounded-lg p-6 shadow-sm border">
            <h3 className="font-semibold mb-2">Our Location</h3>
            <p className="text-muted-foreground mb-4">{address}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://maps.google.com/?q=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                data-testid="directions-link"
              >
                Get Directions
              </a>
              <a
                href="tel:4161234567"
                className="inline-flex items-center justify-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
                data-testid="call-clinic-link"
              >
                Call Us: (416) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}