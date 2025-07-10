"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const images = ["/assets/pngs/accommodation.png", "/assets/pngs/cars.png", "/assets/pngs/private_jet.png"];

export function HeroCarousel() {
  const plugin = React.useMemo(() => Autoplay({ delay: 4000, stopOnInteraction: false }), []);

  return (
    <Carousel
      plugins={[plugin]}
      onMouseLeave={plugin.reset}
      className="absolute inset-0 h-4/5 w-full -z-10 overflow-hidden"
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index} className="relative min-w-full h-[37rem]  overflow-hidden">
            <Image src={img} alt={`Hero ${index + 1}`} fill className="object-cover" priority />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
