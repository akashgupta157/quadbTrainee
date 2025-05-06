import React from "react";
import {
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
  HiOutlineGlobe,
} from "react-icons/hi";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] pt-32 pb-20 text-white px-6 md:px-20">
      <div className="text-center mb-20">
        <h1 className="playfair-display text-5xl md:text-7xl font-medium mb-6">
          Our Story in the Wild
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Founded by a group of passionate mountaineers, MNTN has been equipping
          adventurers since 2012.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-28">
        <div className="bg-[#0B1D26]/50 p-8 rounded-xl border border-[#ffffff10]">
          <HiOutlineLightningBolt className="size-10 text-[var(--text-color)] mb-4" />
          <h3 className="playfair-display text-2xl mb-3">Our Mission</h3>
          <p className="opacity-80">
            To empower outdoor enthusiasts with premium gear that withstands
            nature's toughest challenges while inspiring responsible
            exploration.
          </p>
        </div>

        <div className="bg-[#0B1D26]/50 p-8 rounded-xl border border-[#ffffff10]">
          <HiOutlineUserGroup className="size-10 text-[var(--text-color)] mb-4" />
          <h3 className="playfair-display text-2xl mb-3">The Team</h3>
          <p className="opacity-80">
            A collective of seasoned climbers, thru-hikers, and outdoor guides
            who test every product in real-world conditions.
          </p>
        </div>

        <div className="bg-[#0B1D26]/50 p-8 rounded-xl border border-[#ffffff10]">
          <HiOutlineGlobe className="size-10 text-[var(--text-color)] mb-4" />
          <h3 className="playfair-display text-2xl mb-3">Sustainability</h3>
          <p className="opacity-80">
            Committed to ethical sourcing and 1% of all sales donated to trail
            conservation initiatives worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-5 mb-10">
          <div className="h-px w-20 bg-[var(--text-color)]" />
          <h2 className="text-sm font-bold uppercase tracking-[6px] text-[var(--text-color)]">
            Our Journey
          </h2>
        </div>

        <div className="space-y-8">
          <p className="text-lg leading-relaxed">
            What began as a small gear repair shop in the Rockies has grown into
            a trusted name in outdoor equipment. After countless expeditions
            where standard gear failed us, we set out to create products that
            could handle the most demanding environments.
          </p>

          <p className="text-lg leading-relaxed">
            Every MNTN product undergoes rigorous testing in the harshest
            conditions - from Patagonian storms to Himalayan altitudes. We don't
            just sell gear; we create tools for unforgettable adventures.
          </p>

          <blockquote className="border-l-4 border-[var(--text-color)] pl-6 py-2 italic text-xl">
            "The mountains reveal their secrets only to those who come
            prepared."
          </blockquote>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
          <div className="text-sm uppercase tracking-wider">
            Years in Business
          </div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
          <div className="text-sm uppercase tracking-wider">
            Expeditions Supported
          </div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">47</div>
          <div className="text-sm uppercase tracking-wider">
            Countries Reached
          </div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
          <div className="text-sm uppercase tracking-wider">
            Field-Tested Gear
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
