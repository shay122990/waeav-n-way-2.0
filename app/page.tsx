import Image from "next/image";

import HomeIntro from "./_components/HomeIntro";
import PopularFabrics from "./_components/PopularFabrics";
import FeaturedCollections from "./_components/FeaturedCollection";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-100 md:h-150">
        <Image
          src="/home-hero.jpg"
          alt="hero image of fabric"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl font-bold drop-shadow-lg">
            Sustainable fabrics for conscious creators
          </h1>
          <p className="text-white text-sm sm:text-lg mt-2 font-medium drop-shadow-md">
            Ethically woven. Mindfully made.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-0" />
      </div>

      <HomeIntro />
      <PopularFabrics />
      <FeaturedCollections />
    </>
  );
}
