import React, { useEffect, useRef } from "react";

export default function Line() {
  const pathRef = useRef(null);
  const circleRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const circle = circleRef.current;
    const h1 = h1Ref.current;

    const pathLength = path.getTotalLength();

    const handleScroll = () => {
      const h1Rect = h1.getBoundingClientRect();
      const h1Top = h1Rect.top;

      if (h1Top <= 0) {
        const scrollY = window.scrollY || window.pageYOffset;
        const startY = h1.offsetTop;
        const rawProgress = (scrollY - startY) / 1000;
        const progress = Math.min(Math.max(rawProgress, 0), 1);

        const point = path.getPointAtLength(progress * pathLength);
        circle.setAttribute("cx", point.x);
        circle.setAttribute("cy", point.y);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-r from-neutral-700 to-black text-white min-h-[200vh] p-10">
      <div>
        <h1 ref={h1Ref} className="text-center italic text-3xl playfair">
          We are creative designers, developers and marketers from India driven
          by a common purpose to inspire, create and launch ground-breaking
          ideas.
        </h1>
        <p className="text-center pt-10 font-medium text-xl">
          We love taking your vision to reality. Here's how we work:
        </p>
      </div>

      <svg
        className="w-full pb-96"
        viewBox="10 30 350 350"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M 150 50 L 300 50 L 300 110 L 260 140 L 80 140 L 50 170 L 50 230 L 300 230 L 330 260 L 330 320 L 50 320"
          fill="none"
          stroke="#ccc"
          strokeWidth="1"
        />
        <circle
          ref={circleRef}
          cx="150"
          cy="50"
          r="5"
          fill="url(#circleGradient)"
        />
      </svg>
    </div>
  );
}
