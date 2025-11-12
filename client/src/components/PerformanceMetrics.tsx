import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Award, BarChart3 } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    label: "Win Rate",
    value: "64.2%",
    description: "Last 30 Days",
    color: "text-chart-2"
  },
  {
    icon: Target,
    label: "Total Profit",
    value: "$15,251",
    description: "Since June 2025",
    color: "text-primary"
  },
  {
    icon: Award,
    label: "Best Streak",
    value: "12W",
    description: "Consecutive Wins",
    color: "text-accent"
  },
  {
    icon: BarChart3,
    label: "ROI",
    value: "18.7%",
    description: "Last Quarter",
    color: "text-chart-1"
  }
];

export default function PerformanceMetrics() {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 pb-32 bg-gradient-to-b from-black/90 via-black/85 to-black/95 relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/90 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/6 via-transparent to-transparent"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white" data-testid="text-performance-heading">
            Transparent Performance
          </h2>
          <p className="text-white/70 text-base sm:text-lg" data-testid="text-performance-description">
            Real results, verified picks, complete transparency
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <Card 
              key={metric.label}
              className="p-6 text-center hover-elevate bg-white/5 backdrop-blur-md border-white/10"
              data-testid={`card-metric-${index}`}
            >
              <metric.icon className={`w-10 h-10 mx-auto mb-4 ${metric.color}`} />
              <div className="text-3xl font-bold mb-1 text-white" data-testid={`text-metric-value-${index}`}>
                {metric.value}
              </div>
              <div className="font-semibold mb-1 text-white" data-testid={`text-metric-label-${index}`}>
                {metric.label}
              </div>
              <div className="text-sm text-white/60" data-testid={`text-metric-description-${index}`}>
                {metric.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
