import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";

export default function Guide() {
  const guide = [
    {
      subtitle: "get started",
      title: "What level of hiker are you?",
      description:
        "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
      image:
        "https://res.cloudinary.com/coderabbi/image/upload/v1641892212/MNTN--figma/guide-image-1_s6zbfn.png",
    },
    {
      subtitle: "hiking essentials",
      title: "Picking the right Hiking Gear!",
      description:
        "The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have.Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
      image:
        "https://res.cloudinary.com/coderabbi/image/upload/v1641892223/MNTN--figma/guide-image-2_ezytlj.png",
    },
    {
      subtitle: "where you go is the key",
      title: "Understand Your Map & Timing",
      description:
        "To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction..",
      image:
        "https://res.cloudinary.com/coderabbi/image/upload/v1641892215/MNTN--figma/guide-image-3_qarbyl.png",
    },
  ];
  return (
    <div className="min-h-screen relative top-200 md:top-280 z-50 bg-[var(--bg-color)] space-y-30 md:space-y-60">
      <div className="space-y-30 md:space-y-60">
        {guide.map((item, index) => (
          <div
            key={index}
            id={`guide0${index + 1}`}
            className={
              "flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-20 gap-8 md:gap-20 " +
              (index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")
            }
          >
            <div className="w-full md:w-2/3 space-y-6 md:space-y-10 relative">
              <p className="text-white text-[80px] md:text-[180px] font-bold opacity-10 absolute -top-10 md:-top-30 -left-4 md:-left-20">
                0{index + 1}
              </p>
              <div className="flex items-center gap-4 md:gap-10 pt-16 md:pt-0">
                <p className="w-10 md:w-20 h-0.5 bg-[var(--text-color)]"></p>
                <h2 className="text-sm md:text-lg uppercase text-[var(--text-color)] font-black tracking-[4px] md:tracking-[6px]">
                  {item.subtitle}
                </h2>
              </div>
              <h1 className="playfair-display text-3xl md:text-6xl font-semibold text-white">
                {item.title}
              </h1>
              <p className="text-white text-sm md:text-base font-medium leading-[24px] md:leading-[30px]">
                {item.description}
              </p>
              <p className="text-[var(--text-color)] text-sm md:text-lg font-bold flex items-center gap-2 ">
                read more <BsArrowRight className="size-6 md:size-8" />
              </p>
            </div>
            <div
              className={`flex justify-center w-full md:w-2/3 h-full mt-8 md:mt-0`}
            >
              <img
                src={item.image}
                alt="Guide"
                className="w-full max-w-md md:max-w-none"
              />
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
