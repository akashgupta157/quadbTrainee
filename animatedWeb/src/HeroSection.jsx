const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-neutral-700 to-black text-white min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center z-10">
        <p className="text-5xl italic text-white playfair">
          Come to us with a <span className="text-gradient">vision</span>
        </p>
        <div className="flex items-center justify-center my-5">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-86 h-px bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-white"></span>
        </div>
        <h1 className="text-7xl font-medium mt-2">Embrace the Quest</h1>
        <p className="text-sm mt-4 max-w-xl mx-auto">
          We build digital product, from idea to design, development to
          marketing & PR to post launch support
        </p>
        <div className="mt-6 p-[2px] w-fit m-auto rounded-full bg-gradient-to-r from-yellow-400 to-green-400">
          <button className="px-6 py-2 rounded-full text-sm font-semibold bg-black text-white text-outline w-full">
            GET FREE CONSUTATION
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 w-full border-y border-white py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8)
            .fill("Web Development")
            .map((text, index) => (
              <div
                key={index}
                className="mx-6 italic text-white text-3xl playfair"
              >
                {text}
                <span className="mx-2">⯇⯈</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
