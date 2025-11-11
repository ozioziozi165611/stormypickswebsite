import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingPackages from "@/components/PricingPackages";
import Testimonials from "@/components/Testimonials";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="reviews">
        <Testimonials />
      </div>
      <PricingPackages />
      
      <div className="py-12 px-6 bg-gradient-to-b from-black/95 to-black/90 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white" data-testid="heading-discord-help">
            Need help connecting to Discord?
          </h3>
          <p className="text-white/60 text-lg">
            Follow our step-by-step guide to link your Discord account and access the community.
          </p>
          <Link href="/discord-guide">
            <Button 
              size="lg" 
              variant="outline" 
              className="mt-4"
              data-testid="button-discord-guide"
            >
              <HelpCircle className="w-5 h-5 mr-2" />
              How to Connect to Discord
            </Button>
          </Link>
        </div>
      </div>

      <PerformanceMetrics />
    </div>
  );
}
