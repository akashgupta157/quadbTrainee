import React from "react";
import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/coderabbi/image/upload/v1641892210/MNTN--figma/bg-layer-1_e7t1bk.png"
            alt="Background"
            className="absolute top-0 h-[80svh] md:h-fit w-full object-cover"
          />
          <div className="bg-[linear-gradient(145deg,#0B1D26bb,#0B1D2600)] absolute top-0 h-screen w-full" />
          <img
            src="https://res.cloudinary.com/coderabbi/image/upload/v1641892219/MNTN--figma/bg-layer-3_xvue3k.png"
            alt="Background"
            className="absolute top-90 md:top-80 h-[80svh] md:h-fit w-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/coderabbi/image/upload/v1641892216/MNTN--figma/bg-layer-4_upuiaw.png"
            alt="Background"
            className="absolute top-130 h-[40svh] md:h-fit w-full object-cover"
          />
        </div>
        <div className="absolute flex flex-col px-6 space-y-5 top-30 md:top-40 md:w-3/4 md:-translate-x-1/2 md:left-4/7 ">
          <div className="flex items-center gap-5">
            <p className="w-10 md:w-20 h-0.5 bg-[var(--text-color)]"></p>
            <h2 className="uppercase text-[var(--text-color)] text-xs md:text-sm font-bold tracking-[6px]">
              a hiking guide
            </h2>
          </div>
          <h1 className="playfair-display text-5xl md:text-7xl font-medium text-white capitalize leading-16 md:leading-22">
            Be prepared for the Mountains and beyond!
          </h1>
          <p className="text-white flex items-center gap-2 font-medium">
            <span className="">scroll down</span>
            <BsArrowDown className="size-7" />
          </p>
        </div>
        <div className="absolute w-full top-150 md:top-220 z-10 h-[50svh] bg-[linear-gradient(180deg,rgba(255,0,0,0)_0%,_var(--bg-color)_50%)] md:bg-[linear-gradient(180deg,rgba(255,0,0,0)_0%,_var(--bg-color)_50%)]" />
      </section>
    </>
  );
};
export default Hero;
