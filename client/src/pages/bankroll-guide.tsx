import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Check, TrendingUp, Shield, Target } from "lucide-react";

export default function BankrollGuide() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              What is a Bankroll?
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Understanding bankroll and unit sizing is the foundation of successful sports betting
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/10 to-black border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  A <span className="text-primary font-semibold">bankroll</span> is simply the total amount of money you set aside specifically for betting, and a <span className="text-primary font-semibold">unit</span> is the standard size of each bet relative to that bankroll.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  Using units keeps everyone on the same page even if they have different bankroll sizes.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-black/40 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">What is a Bankroll?</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-300">
                        Your bankroll is the money you can afford to lose without affecting your real-life finances.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-300">
                        It is <span className="text-white font-semibold">not</span> your entire savings — just the amount you purposely set aside for betting.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm text-gray-400 mb-2">Example:</p>
                    <p className="text-gray-300">
                      You decide you can safely use <span className="text-primary font-semibold">$500</span> for sports betting.
                    </p>
                    <p className="text-white font-semibold mt-2">
                      That $500 = your bankroll
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">What is a Unit?</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-300">
                        A unit is a percentage of your bankroll — not a fixed dollar amount.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-300">
                        This keeps betting consistent and prevents you from risking too much.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-300">
                        Most bettors use <span className="text-primary font-semibold">1%–5%</span> of their bankroll as 1 unit.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm text-gray-400 mb-2">Example:</p>
                    <p className="text-gray-300">Bankroll = <span className="text-white font-semibold">$500</span></p>
                    <p className="text-gray-300">You choose 1 unit = <span className="text-primary font-semibold">2%</span> of your bankroll</p>
                    <p className="text-gray-300 mt-2">2% of $500 = <span className="text-primary font-semibold">$10</span></p>
                    <p className="text-white font-semibold mt-2">So 1 unit = $10</p>
                    <p className="text-gray-400 text-sm mt-3">
                      If someone says "bet 2 units," you bet $20, regardless of your bankroll size.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-black border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-3 mb-6">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Why Units Matter</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      ✓ Makes bets equal for everyone
                    </h3>
                    <p className="text-gray-300 mb-3">
                      Someone with a $500 bankroll and someone with a $5,000 bankroll can both follow the same picks using units.
                    </p>
                    <div className="pl-4 border-l-2 border-primary/30 space-y-2">
                      <p className="text-gray-400">
                        If a handicapper says:
                      </p>
                      <p className="text-gray-300">
                        <span className="text-white font-semibold">Play 1 unit</span> — everyone bets 1%–2% of their bankroll = <span className="text-primary">SAME risk level</span>
                      </p>
                      <p className="text-gray-300">
                        <span className="text-white font-semibold">Play 3 units</span> — everyone bets 3× their unit
                      </p>
                      <p className="text-gray-400 text-sm mt-2">
                        Even though the dollars are different, the risk is identical.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      ✓ Helps avoid going broke
                    </h3>
                    <p className="text-gray-300">
                      Units prevent you from betting too much on one play emotionally.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      ✓ Tracks performance fairly
                    </h3>
                    <p className="text-gray-300">
                      "Saw <span className="text-primary font-semibold">+15 units</span> last week" is more meaningful than "Won $150," because with units everyone understands the percentage gain.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Example With Real Numbers</h2>
                
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-4">
                  <p className="text-gray-300">
                    Bankroll = <span className="text-white font-semibold">$1,000</span>
                  </p>
                  <p className="text-gray-300">
                    1 unit = <span className="text-primary font-semibold">$10</span> (1% of bankroll)
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded-lg border border-white/5">
                    <span className="text-gray-300">A 0.5 unit bet</span>
                    <span className="text-white font-semibold">= $5</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded-lg border border-white/5">
                    <span className="text-gray-300">A 1 unit bet</span>
                    <span className="text-white font-semibold">= $10</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded-lg border border-white/5">
                    <span className="text-gray-300">A 2 unit bet</span>
                    <span className="text-white font-semibold">= $20</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/30">
                    <span className="text-gray-300">A 5 unit bet</span>
                    <span className="text-primary font-bold">= $50</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
