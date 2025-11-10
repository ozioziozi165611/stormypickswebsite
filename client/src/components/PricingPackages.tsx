import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Crown, Calendar } from "lucide-react";

const packages = [
  {
    name: "Stormy Weekly VIP",
    price: "$9.99",
    period: "per week",
    priceSubtext: "AUD",
    description: "Perfect for testing the waters",
    features: [
      "Daily expert picks",
      "Real-time notifications",
      "Performance tracking",
      "Exclusive VIP channels",
      "Access to Discord community",
      "Cancel anytime"
    ],
    url: "https://whop.com/stormy-picks/stormy-picks/?funnelId=product_bed79b67-b739-40a9-ab4c-3104381445ef",
    icon: Zap,
    highlighted: false
  },
  {
    name: "Stormy Monthly VIP",
    price: "$29.99",
    period: "per month",
    priceSubtext: "AUD",
    description: "Best value",
    features: [
      "Daily expert picks",
      "Real-time notifications",
      "Performance tracking",
      "Exclusive VIP channels",
      "Access to Discord community",
      "Cancel anytime"
    ],
    url: "https://whop.com/stormy-picks/stormy-picks/?funnelId=product_4fb688ad-eaaf-4370-877c-0e12a50d1c75",
    icon: Calendar,
    highlighted: true,
    badge: "Best Value"
  },
  {
    name: "Stormy Yearly VIP",
    price: "$299.99",
    period: "per year",
    priceSubtext: "AUD",
    description: "Save over 40%",
    features: [
      "Everything in Weekly VIP",
      "Exclusive VIP channels",
      "Biggest savings"
    ],
    url: "https://whop.com/stormy-picks/stormy-picks-yearly-vip-9/?funnelId=product_bed79b67-b739-40a9-ab4c-3104381445ef",
    icon: Crown,
    highlighted: false
  }
];

export default function PricingPackages() {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-black/85 via-black/80 to-black/85 relative" id="pricing">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/85 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/6 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-testid="text-pricing-heading">
            Choose Your Package
          </h2>
          <p className="text-white/70 text-lg" data-testid="text-pricing-description">
            Start winning today for less than $1 a day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              className={`p-8 relative hover-elevate bg-white/5 backdrop-blur-md border-white/10 ${pkg.highlighted ? 'ring-2 ring-accent' : ''}`}
              data-testid={`card-package-${index}`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-md text-sm font-bold" data-testid="badge-popular">
                    {pkg.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <pkg.icon className={`w-12 h-12 ${pkg.highlighted ? 'text-accent' : 'text-primary'}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white" data-testid={`text-package-name-${index}`}>
                  {pkg.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white" data-testid={`text-package-price-${index}`}>
                    {pkg.price}
                  </span>
                  <span className="text-white/60 ml-2">{pkg.priceSubtext}</span>
                </div>
                <div className="text-white/60 mb-2" data-testid={`text-package-period-${index}`}>
                  {pkg.period}
                </div>
                <p className="text-sm font-semibold text-primary" data-testid={`text-package-description-${index}`}>
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-start gap-3"
                    data-testid={`text-package-feature-${index}-${featureIndex}`}
                  >
                    <Check className="w-5 h-5 text-chart-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                size="lg"
                onClick={() => window.location.href = pkg.url}
                className={`w-full font-bold ${
                  pkg.highlighted 
                    ? 'bg-accent hover:bg-accent text-accent-foreground' 
                    : 'bg-primary hover:bg-primary text-primary-foreground'
                }`}
                data-testid={`button-select-package-${index}`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-white/50">
          All prices in Australian Dollars (AUD)
        </div>
      </div>
    </div>
  );
}
