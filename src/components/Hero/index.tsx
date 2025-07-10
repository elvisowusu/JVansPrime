import { HeroCarousel } from "./heroCarousel";

export default function HeroSection() {
  return (
    <div className=" w-full ">
      {/* Background carousel */}
      <HeroCarousel />

      {/* Content on top of the carousel */}
      <div className="relative z-20 flex flex-col items-center justify-start pt-10 px-4 sm:px-8 md:px-16 h-full">
        J VANS PRIME
      </div>
    </div>
  );
}
