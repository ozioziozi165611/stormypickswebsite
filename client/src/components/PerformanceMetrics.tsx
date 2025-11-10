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
    label: "Average Odds",
    value: "+142",
    description: "Across All Picks",
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
    <div className="py-20 px-4 bg-gradient-to-b from-black/80 via-black/70 to-black/90 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-testid="text-performance-heading">
            Transparent Performance
          </h2>
          <p className="text-white/70 text-lg" data-testid="text-performance-description">
            Real results, verified picks, complete transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
