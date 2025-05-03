import React, { useState, useEffect, useRef } from "react";

const sections = [
  { id: "hero", label: "Start" },
  { id: "guide01", label: "01" },
  { id: "guide02", label: "02" },
  { id: "guide03", label: "03" },
];

const PageNavigation = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const scrollTimeout = useRef(null);
  const isClicking = useRef(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isClicking.current) {
          clearTimeout(scrollTimeout.current);
          scrollTimeout.current = setTimeout(() => {
            setActiveSection(entry.target.id);
          }, 100);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  const handleClick = (sectionId) => {
    isClicking.current = true;
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      isClicking.current = false;
    }, 1000);
  };

  return (
    <div className="hidden w-[3.9em] h-48 md:flex flex-col justify-between fixed top-[30%] right-[4.165%] text-[clamp(.7rem,.9vw,2rem)] select-none z-[10000]">
      {sections.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            handleClick(item.id);
          }}
          className={`w-full h-[25%] flex items-center justify-between cursor-pointer transition-colors duration-300 ${
            activeSection === item.id
              ? "bg-gradient-to-r from-transparent to-[#0B1D26]/[0.4]"
              : "hover:bg-gradient-to-r hover:from-transparent hover:to-[#0B1D26]/[0.2]"
          }`}
        >
          <div
            className={`w-[70%] flex justify-end ${
              activeSection === item.id
                ? "text-white font-semibold"
                : "text-white/60 hover:text-white/80"
            }`}
          >
            {item.label}
          </div>
          <div
            className={`w-[3px] h-full ${
              activeSection === item.id
                ? "bg-white rounded-[3em]"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        </a>
      ))}
    </div>
  );
};

export default PageNavigation;
