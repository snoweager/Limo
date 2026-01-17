import heroImage from "@/assets/hero-limo.jpg";
import BookingForm from "./BookingForm";
import { Shield, Star, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Cadillac Escalade limousine in Atlanta"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, hsla(0, 0%, 0%, 0.88) 0%, hsla(0, 0%, 0%, 0.65) 50%, hsla(0, 0%, 0%, 0.8) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Headlines */}
          <div className="text-center lg:text-left space-y-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/40 backdrop-blur-sm border border-border/50 rounded-full">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm text-cream-muted font-body">Atlanta's Premier Luxury Transportation</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight">
              <span className="text-foreground">Experience </span>
              <span className="text-gradient-gold">Luxury</span>
              <br />
              <span className="text-foreground">In Every Mile</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-cream-muted font-body font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Atlanta's most trusted luxury car service. Professional chauffeurs, 
              impeccable vehicles, and white-glove service for every journey.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-cream-muted font-body">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-cream-muted font-body">24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="text-sm text-cream-muted font-body">5-Star Rated Service</span>
              </div>
            </div>

            {/* Fleet Preview */}
            <div className="pt-6">
              <p className="text-sm text-muted-foreground font-body uppercase tracking-widest mb-3">Our Fleet</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {["Cadillac Escalade", "Executive Sedan", "Mercedes Sprinter"].map((vehicle) => (
                  <span 
                    key={vehicle}
                    className="px-4 py-2 text-sm text-cream font-body bg-secondary/50 border border-border/50 rounded-full backdrop-blur-sm"
                  >
                    {vehicle}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="animate-fade-up animate-delay-200">
            <div className="card-luxury p-6 sm:p-8 rounded-xl">
              {/* Form Header */}
              <div className="text-center mb-6">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                  Reserve Your Ride
                </h2>
                <p className="text-cream-muted font-body text-sm">
                  Book your luxury transportation in minutes
                </p>
              </div>

              {/* Booking Form */}
              <BookingForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
