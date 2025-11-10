import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Award, ArrowRight } from "lucide-react";
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
    <div className="relative min-h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackgroundImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-1.5 text-sm" data-testid="badge-verified">
                <Award className="w-4 h-4 mr-2" />
                Verified Performance
              </Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1.5 text-sm" data-testid="badge-transparent">
                <Target className="w-4 h-4 mr-2" />
                100% Transparent
              </Badge>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" data-testid="text-headline">
                Win More.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Bet Smarter.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-xl" data-testid="text-subheadline">
                Join Australia's fastest-growing sports betting community. Data-driven picks, transparent results, real profits.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-4" data-testid="stat-units-profited">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <div className="text-3xl font-bold text-white">152.51</div>
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wide">Units Profited Since June</div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-4" data-testid="stat-monthly-average">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div className="text-3xl font-bold text-white">25</div>
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wide">Units on Average Per Month</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={handleCtaClick}
                className="text-lg px-8 py-7 h-auto bg-accent hover:bg-accent text-accent-foreground font-bold shadow-2xl group"
                data-testid="button-cta"
              >
                Start for Less Than $1.50 a Day
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-chart-2 rounded-full animate-pulse"></div>
                <span>Live picks daily</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Active community</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full"></div>
              <img 
                src={spLogoImg} 
                alt="Stormy Picks" 
                className="w-64 h-64 md:w-96 md:h-96 relative z-10 drop-shadow-2xl"
                data-testid="img-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
