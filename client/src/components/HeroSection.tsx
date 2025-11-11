import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Award, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import heroBackgroundImg from "@assets/generated_images/Dark_sports_hero_background_1ead2fae.png";
import spLogoImg from "@assets/image_1762738117348.png";
import FloatingBubbles from "@/components/FloatingBubbles";

export default function HeroSection() {
  const handleCtaClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
      
      // On mobile, scroll to and highlight the monthly package
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        setTimeout(() => {
          const monthlyCard = document.querySelector('[data-testid="card-package-1"]');
          if (monthlyCard) {
            monthlyCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 500);
      }
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
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
      <FloatingBubbles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-12 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="hidden lg:flex flex-wrap gap-3">
              <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-1.5 text-sm" data-testid="badge-verified">
                <Award className="w-4 h-4 mr-2" />
                Verified Performance
              </Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1.5 text-sm" data-testid="badge-transparent">
                <Target className="w-4 h-4 mr-2" />
                100% Transparent
              </Badge>
            </div>

            <div className="flex items-center gap-6 lg:block">
              <div className="lg:hidden relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl rounded-full"></div>
                <img 
                  src={spLogoImg} 
                  alt="Stormy Picks" 
                  className="w-24 h-24 relative z-10 drop-shadow-2xl"
                  data-testid="img-logo-mobile"
                />
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-tight" data-testid="text-headline">
                Win More.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Bet Smarter.</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-xl" data-testid="text-subheadline">
              Join Australia's fastest-growing sports betting community. Data-driven picks, transparent results, real profits.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-4" data-testid="stat-units-profited">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <div className="text-3xl font-bold text-white">$15,251</div>
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wide">Profited Since June</div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-4" data-testid="stat-monthly-average">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div className="text-3xl font-bold text-white">$2,500</div>
                </div>
                <div className="text-white/60 text-xs uppercase tracking-wide">Average Per Month</div>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                size="lg"
                onClick={handleCtaClick}
                className="w-full sm:w-auto text-lg px-8 py-7 h-auto bg-accent hover:bg-accent text-accent-foreground font-bold shadow-2xl group"
                data-testid="button-cta"
              >
                Start for Less Than $1 a Day
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex justify-center sm:justify-start">
                <Link href="/discord-guide">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-white/80 hover:text-white"
                    data-testid="button-discord-guide"
                  >
                    <HelpCircle className="w-4 h-4 mr-2" />
                    How to Connect to Discord
                  </Button>
                </Link>
              </div>
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

            <div className="flex lg:hidden flex-wrap gap-3">
              <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-1.5 text-sm" data-testid="badge-verified-mobile">
                <Award className="w-4 h-4 mr-2" />
                Verified Performance
              </Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1.5 text-sm" data-testid="badge-transparent-mobile">
                <Target className="w-4 h-4 mr-2" />
                100% Transparent
              </Badge>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full"></div>
              <img 
                src={spLogoImg} 
                alt="Stormy Picks" 
                className="w-96 h-96 relative z-10 drop-shadow-2xl"
                data-testid="img-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
