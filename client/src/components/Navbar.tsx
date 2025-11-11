import { Button } from "@/components/ui/button";
import spLogoImg from "@assets/image_1762738117348.png";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1 transition-all"
            data-testid="button-logo"
          >
            <img 
              src={spLogoImg} 
              alt="Stormy Picks" 
              className="w-10 h-10"
            />
            <span className="text-white font-bold text-lg hidden sm:block">Stormy Picks</span>
          </button>

          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('reviews')}
              className="text-white hover:text-primary hidden sm:inline-flex"
              data-testid="button-nav-reviews"
            >
              Reviews
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-primary hidden sm:inline-flex"
              data-testid="button-nav-packages"
            >
              Packages
            </Button>
            <Button 
              size="sm"
              onClick={() => scrollToSection('pricing')}
              className="bg-accent hover:bg-accent text-accent-foreground font-bold"
              data-testid="button-nav-cta"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
