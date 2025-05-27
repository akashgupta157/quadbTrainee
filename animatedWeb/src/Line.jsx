import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Line() {
  const pathRef = useRef(null);
  const circleRef = useRef(null);
  const h1Ref = useRef(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    const path = pathRef.current;
    const circle = circleRef.current;
    const h1 = h1Ref.current;

    const pathLength = path.getTotalLength();

    const handleScroll = () => {
      const h1Rect = h1.getBoundingClientRect();
      const h1Top = h1Rect.top;
      const scrollY = window.scrollY || window.pageYOffset;

      if (h1Top <= 0) {
        const startY = h1.offsetTop;
        const rawProgress = (scrollY - startY) / 700;
        const progress = Math.min(Math.max(rawProgress, 0), 1);

        const point = path.getPointAtLength(progress * pathLength);
        circle.setAttribute("cx", point.x);
        circle.setAttribute("cy", point.y);

        if (progress > 0.1 && progress < 0.4) {
          controls1.start("visible");
          controls2.start("hidden");
          controls3.start("hidden");
        } else if (progress > 0.4 && progress < 0.7) {
          controls1.start("visible");
          controls2.start("visible");
          controls3.start("hidden");
        } else if (progress > 0.7) {
          controls1.start("visible");
          controls2.start("visible");
          controls3.start("visible");
        } else {
          controls1.start("hidden");
          controls2.start("hidden");
          controls3.start("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls1, controls2, controls3]);

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gradient-to-r from-neutral-700 to-black text-white p-10">
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
      <div className="relative">
        <svg
          className="w-full"
          viewBox="10 30 350 350"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="circleGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <path
            ref={pathRef}
            d="M 150 50 L 300 50 L 300 110 L 260 130 L 80 130 L 50 150 L 50 200 L 300 200 L 330 220 L 330 270 L 50 270"
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

        <motion.div
          initial="hidden"
          animate={controls1}
          variants={textVariants}
          className="absolute top-25 max-w-1/2 left-1/2 transform -translate-x-1/2 flex flex-col gap-4"
        >
          <h1 className="text-2xl font-medium">
            We find the Creatives, so you don't have to
          </h1>
          <p>
            QuadTech's experience determines the right creative direction based
            on years company positioning.
          </p>{" "}
          When it comes to marketing we have bored or business we always make
          sure to look for we take off we are working together with you to
          design execute inventive data driven creative real results
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls2}
          variants={textVariantsLeft}
          className="absolute top-95 max-w-1/2 left-60 flex flex-col gap-4 text-left"
        >
          <h1 className="text-2xl font-medium">
            We create technologies you will proud of
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab
            adipisci doloribus corporis molestias tempora cum vitae, provident
            iure at corrupti ipsam recusandae minus. Ut optio aliquid id at
            natus?
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls3}
          variants={textVariants}
          className="absolute top-160 max-w-1/2 right-40 flex flex-col gap-4"
        >
          <h1 className="text-2xl font-medium">
            Finally... you dunk it into the basket ring
          </h1>
          <p>
            You can take a chill pill and relax as we work with your team to
            create technologies and creatives that simply exemplify perfection
          </p>
        </motion.div>
      </div>
    </div>
  );
}
