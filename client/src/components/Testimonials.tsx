import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import avatar1 from "@assets/image_1762740257831.png";
import avatar2 from "@assets/image_1762740265104.png";
import avatar3 from "@assets/image_1762740269880.png";
import avatar4 from "@assets/image_1762740276028.png";
import avatar5 from "@assets/image_1762740284579.png";
import avatar6 from "@assets/image_1762740288781.png";

const testimonials = [
  {
    name: "Geoffrey Dufty",
    avatar: avatar1,
    text: "1 month in, I went up 70+ units. Currently up 37 units this month. Stormy Picks are legit!",
    date: "September 17, 2025",
    timeSince: "2 months after purchase"
  },
  {
    name: "Beau Papuni",
    avatar: avatar2,
    text: "It's been a blessing bumping into stormy picks and a roller-coaster of a ride it has been so far sharing tips and gaining knowledge on punting on different sports LET'S BANG🔥🔥 2025kings🤴 #STORMY🐐",
    date: "September 16, 2025",
    timeSince: "1 month after purchase"
  },
  {
    name: "Jason Tunbridge",
    avatar: avatar3,
    text: "Stormy's tips is the best tipping service that I have come across. Great wins and good profits with a good community. Highly recommended",
    date: "September 11, 2025",
    timeSince: "1 month after purchase"
  },
  {
    name: "Kaison Williams",
    avatar: avatar4,
    text: "Very happy that I joined stormys group. I've made a decent amount of profit and more than I could have done punting on my own. Members are always having a chat and helping everyone navigate around if they're stuck. Very good group!!",
    date: "September 10, 2025",
    timeSince: "1 month after purchase"
  },
  {
    name: "Alex Caruana-Brown",
    avatar: avatar5,
    text: "Great for all levels of punter. Consistent profits with full transparency, as well as detailed explanations of reasoning",
    date: "September 10, 2025",
    timeSince: "2 months after purchase"
  },
  {
    name: "wookie82",
    avatar: avatar6,
    text: "Have been with stormy for just under a month now & have seen more wins in this month than the last 15 years of betting. Nothing better than seeing that green win tick next to my bets. Excellent chat and positive support/knowledge from stormy and other members. Seriously get on and join the ride",
    date: "September 10, 2025",
    timeSince: "23 days after purchase"
  },
  {
    name: "Rukkis_13",
    text: "Have joined for just over a month now and haven't looked back since well worth it guys get amongst it cheers",
    date: "September 9, 2025",
    timeSince: "1 month after purchase"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-black/80 via-black/70 to-black/80 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-testid="text-testimonials-heading">
            Trusted by Winning Bettors
          </h2>
          <p className="text-white/70 text-lg" data-testid="text-testimonials-description">
            See what our community has to say
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                  data-testid={`testimonial-slide-${index}`}
                >
                  <Card className="p-6 h-full hover-elevate bg-white/5 backdrop-blur-md border-white/10 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12 border-2 border-primary/30">
                        {testimonial.avatar && (
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        )}
                        <AvatarFallback className="bg-primary/20 text-primary font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-bold mb-1 text-white" data-testid={`text-testimonial-name-${index}`}>
                          {testimonial.name}
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Quote className="w-7 h-7 text-primary/60 mb-3" />
                    <p className="text-white/90 mb-4 leading-relaxed text-sm" data-testid={`text-testimonial-${index}`}>
                      {testimonial.text}
                    </p>
                    <div className="mt-auto border-t border-white/10 pt-3">
                      <div className="text-xs text-white/60">
                        <div data-testid={`text-testimonial-time-${index}`}>
                          {testimonial.timeSince}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full hover-elevate active-elevate-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full hover-elevate active-elevate-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
