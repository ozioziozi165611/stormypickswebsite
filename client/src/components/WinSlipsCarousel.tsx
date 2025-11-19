import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import winSlip1 from "@assets/image_1763513214977.png";
import winSlip2 from "@assets/image_1763513217477.png";
import winSlip3 from "@assets/image_1763513220027.png";
import winSlip4 from "@assets/image_1763513222190.png";

const winSlips = [
  {
    id: 1,
    image: winSlip1,
    stake: "$76.27",
    return: "$1,144.05",
    date: "Nov 9",
  },
  {
    id: 2,
    image: winSlip2,
    stake: "$112.50",
    return: "$900.00",
    date: "Nov 12",
  },
  {
    id: 3,
    image: winSlip3,
    stake: "$25.00",
    return: "$3,525.00",
    date: "Nov 10",
  },
  {
    id: 4,
    image: winSlip4,
    stake: "$75.00",
    return: "$1,275.00",
    date: "Nov 15",
  },
];

export default function WinSlipsCarousel() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent Big Wins
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our members are hitting. Real bets, real wins.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {winSlips.map((slip) => (
              <CarouselItem key={slip.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-2 border-primary/20 bg-black/40 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover-elevate">
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <img
                        src={slip.image}
                        alt={`Win slip from ${slip.date}`}
                        className="w-full rounded-lg shadow-lg mb-4"
                      />
                      <div className="w-full flex justify-between items-center bg-primary/10 rounded-lg p-3 border border-primary/20">
                        <div className="text-center">
                          <p className="text-xs text-gray-400 uppercase tracking-wide">Stake</p>
                          <p className="text-lg font-bold text-white">{slip.stake}</p>
                        </div>
                        <div className="text-2xl">→</div>
                        <div className="text-center">
                          <p className="text-xs text-gray-400 uppercase tracking-wide">Return</p>
                          <p className="text-lg font-bold text-primary">{slip.return}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Join our Discord to get these picks before they hit!
          </p>
        </div>
      </div>
    </section>
  );
}
