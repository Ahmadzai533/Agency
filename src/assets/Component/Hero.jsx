import React from "react";
import assets from "../assets";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="flex flex-col items-center py-20 gap-6 px-4 sm:px-12 lg:px-12 xl:px-40 text-center w-full
     overflow-hidden text-gray-700"
    >
      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img src={assets.group_profile} alt="" className="w-20" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
        Turning to imagination into
        <span className="  bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>
        impact.
      </h1>

      <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/500 max-w-4/5 sm:max-w-lg pb-3">
        Creating meaningfull connections and turning main idias into interactive
        digital experiences
      </p>
      <div className="relative">
        <img src={assets.hero_img} alt="" className="w-full max-w-6xl" />
        <img
          src={assets.bgImage1}
          alt=""
          className="absolute -top-40 -right-40 sm:top-100 sm:right-70 -z-1 dark:hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
