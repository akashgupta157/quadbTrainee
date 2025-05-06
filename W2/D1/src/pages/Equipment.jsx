import React from "react";
import { FiArrowRight } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Summit Pro Backpack",
    category: "Backpacks",
    description: "70L weather-resistant pack with ergonomic suspension system",
    features: ["Waterproof 500D nylon", "Removable hip belt", "Ice axe loops"],
    price: "$289",
    bestFor: "Multi-day expeditions"
  },
  {
    id: 2,
    name: "Alpine Trekking Poles",
    category: "Accessories",
    description: "Carbon fiber poles with tungsten carbide tips",
    features: ["Adjustable 110-140cm", "Shock absorption", "Quick-lock system"],
    price: "$159",
    bestFor: "Technical terrain"
  },
  {
    id: 3,
    name: "Everest Sleeping Bag",
    category: "Sleep Systems",
    description: "-20°F down sleeping bag with water-resistant shell",
    features: ["800-fill power goose down", "Draft collar", "Compression sack included"],
    price: "$449",
    bestFor: "Extreme cold weather"
  }
];

export default function Equipment() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] pt-32 pb-20 text-white px-6 md:px-20">

      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-5 mb-8">
          <div className="h-px w-10 md:w-20 bg-[var(--text-color)]" />
          <h2 className="text-sm font-bold uppercase tracking-[6px] text-[var(--text-color)]">
            Gear That Performs
          </h2>
        </div>
        <h1 className="playfair-display text-5xl md:text-7xl font-medium mb-6">
          Expedition-Grade Equipment
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Precision-engineered gear tested in the world's most extreme environments
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-[#0B1D26]/50 rounded-xl overflow-hidden border border-[#ffffff10] hover:border-[var(--text-color)] transition-all duration-300"
          >
            <div className="h-64 bg-gradient-to-br from-[#1a3a4b] to-[#0B1D26] flex items-center justify-center">
              <div className="text-center p-6">
                <span className="text-sm text-[var(--text-color)] font-bold tracking-wider">
                  {product.category}
                </span>
                <h3 className="playfair-display text-2xl mt-2 mb-3">{product.name}</h3>
                <p className="opacity-80 mb-4">{product.description}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-sm mb-2">KEY FEATURES</h4>
                <ul className="space-y-1 text-sm opacity-80">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiArrowRight className="mr-2 mt-0.5 text-[var(--text-color)] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-[#ffffff15]">
                <div>
                  <p className="text-xs uppercase tracking-wider">Best For</p>
                  <p className="font-medium">{product.bestFor}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider">Price</p>
                  <p className="playfair-display text-xl text-[var(--text-color)]">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mb-20">
        <div className="flex items-center gap-5 mb-10">
          <div className="h-px w-20 bg-[var(--text-color)]" />
          <h2 className="text-sm font-bold uppercase tracking-[6px] text-[var(--text-color)]">
            Our Technology
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="playfair-display text-2xl mb-4">Materials Science</h3>
            <p className="leading-relaxed opacity-90">
              We partner with leading fabric innovators to develop proprietary materials that outperform industry standards. Our weather-resistant membranes maintain breathability at 15,000+ ft elevations.
            </p>
          </div>
          <div>
            <h3 className="playfair-display text-2xl mb-4">Field Testing Protocol</h3>
            <p className="leading-relaxed opacity-90">
              Every product completes a minimum of 200 field hours across three continents before production. Our athlete team provides real-time performance data from Denali to the Dolomites.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="px-8 py-4 bg-[var(--text-color)] text-[var(--bg-color)] font-bold rounded-lg hover:opacity-90 transition flex items-center mx-auto">
          View Full Gear Catalog
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}