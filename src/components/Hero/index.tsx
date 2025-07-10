import { HeroCarousel } from "./heroCarousel";

export default function HeroSection() {
  return (
    <div className=" w-full ">
      {/* Background carousel */}
      <HeroCarousel />

      {/* Content on top of the carousel */}
      <div className="relative z-20 flex flex-col items-center justify-start pt-10 px-4 sm:px-8 md:px-16 h-full">
        <div className=" w-full">
          <div className="p-8 flex flex-col gap-5 items-center text-center justify-center max-w-2xl mx-auto ">
            <small className="text-[#FFB636]">Best destinations around the world</small>
            <h1 className="text-5xl text-white font-comfortaa leading-[60px]">
              Embark on a journey <span className="text-[#FFB636]">beyond borders.</span>
            </h1>
            <p className="text-xs text-white">
              We blend the allure of international destinations with the warmth of Ghanaian hospitality, offering you a
              passport to explore the world while feeling right at home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
