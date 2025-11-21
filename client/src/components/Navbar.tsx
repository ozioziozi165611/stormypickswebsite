import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import spLogoImg from "@assets/image_1762738117348.png";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();
  const isHome = location === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <button 
              onClick={isHome ? scrollToTop : undefined}
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
          </Link>

          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            {isHome ? (
              <>
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
              </>
            ) : null}
            <Link href="/bankroll-guide">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:text-primary hidden sm:inline-flex"
                data-testid="button-nav-bankroll"
              >
                What is Bankroll?
              </Button>
            </Link>
            {isHome ? (
              <Button 
                size="sm"
                onClick={() => scrollToSection('pricing')}
                className="bg-accent hover:bg-accent text-accent-foreground font-bold hidden sm:inline-flex"
                data-testid="button-nav-cta"
              >
                Get Started
              </Button>
            ) : (
              <Link href="/">
                <Button 
                  size="sm"
                  className="bg-accent hover:bg-accent text-accent-foreground font-bold hidden sm:inline-flex"
                  data-testid="button-nav-cta"
                >
                  Get Started
                </Button>
              </Link>
            )}

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white sm:hidden"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black/95 border-white/10">
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {isHome ? (
                    <>
                      <Button 
                        variant="ghost" 
                        onClick={() => scrollToSection('reviews')}
                        className="text-white hover:text-primary justify-start text-lg"
                        data-testid="button-mobile-reviews"
                      >
                        Reviews
                      </Button>
                      <Button 
                        variant="ghost" 
                        onClick={() => scrollToSection('pricing')}
                        className="text-white hover:text-primary justify-start text-lg"
                        data-testid="button-mobile-packages"
                      >
                        Packages
                      </Button>
                    </>
                  ) : null}
                  <Link href="/bankroll-guide" onClick={closeMobileMenu}>
                    <Button 
                      variant="ghost" 
                      className="text-white hover:text-primary justify-start text-lg w-full"
                      data-testid="button-mobile-bankroll"
                    >
                      What is Bankroll?
                    </Button>
                  </Link>
                  {isHome ? (
                    <Button 
                      onClick={() => scrollToSection('pricing')}
                      className="bg-accent hover:bg-accent text-accent-foreground font-bold text-lg mt-4"
                      data-testid="button-mobile-cta"
                    >
                      Get Started
                    </Button>
                  ) : (
                    <Link href="/" onClick={closeMobileMenu}>
                      <Button 
                        className="bg-accent hover:bg-accent text-accent-foreground font-bold text-lg mt-4 w-full"
                        data-testid="button-mobile-cta"
                      >
                        Get Started
                      </Button>
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
