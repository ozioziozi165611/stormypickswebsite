import { Button } from "@/components/ui/button";
import { TrendingUp, Users } from "lucide-react";
import heroBackgroundImg from "@assets/generated_images/Dark_sports_hero_background_1ead2fae.png";
import spLogoImg from "@assets/image_1762738117348.png";

export default function HeroSection() {
  const handleCtaClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackgroundImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <img 
            src={spLogoImg} 
            alt="Stormy Picks" 
            className="w-48 h-48 mx-auto"
            data-testid="img-logo"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" data-testid="text-headline">
          Expert Sports Betting Picks
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto" data-testid="text-subheadline">
          Join winning bettors with data-driven picks and transparent performance tracking
        </p>

        <div className="flex flex-wrap gap-8 justify-center items-center mb-12">
          <div className="text-center" data-testid="stat-units-last-month">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6 text-accent" />
              <div className="text-4xl md:text-5xl font-bold text-white">+247</div>
            </div>
            <div className="text-white/70 text-sm uppercase tracking-wide">Units Last Month</div>
          </div>

          <div className="hidden md:block w-px h-16 bg-white/20" />

          <div className="text-center" data-testid="stat-total-units">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-6 h-6 text-primary" />
              <div className="text-4xl md:text-5xl font-bold text-white">+1,842</div>
            </div>
            <div className="text-white/70 text-sm uppercase tracking-wide">Total Units Profited</div>
          </div>
        </div>

        <Button 
          size="lg"
          onClick={handleCtaClick}
          className="text-lg px-12 py-8 h-auto bg-accent hover:bg-accent text-accent-foreground font-bold shadow-xl"
          data-testid="button-cta"
        >
          Start for Less Than $1.50 a Day
        </Button>
      </div>
    </div>
  );
}
