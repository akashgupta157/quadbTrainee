import React from "react";
import { Link } from "react-router";
import { HiOutlineUserCircle } from "react-icons/hi";

const Header = () => {
  return (
    <div className="absolute top-0 px-6 md:px-20 py-10 md:py-12 z-1 w-full flex justify-between items-center text-white">
      <Link to="/" className="playfair-display text-4xl font-bold">
        MNTN
      </Link>
      <div className="hidden md:flex items-center gap-14 font-bold">
        <Link
          to="/equipment"
          className="cursor-pointer hover:text-[var(--text-color)] hover:mb-2 transition-all duration-300 ease-in-out"
        >
          Equipment
        </Link>
        <Link
          to="/about-us"
          className="cursor-pointer hover:text-[var(--text-color)] hover:mb-2 transition-all duration-300 ease-in-out"
        >
          About us
        </Link>
        <Link
          to="/blog"
          className="cursor-pointer hover:text-[var(--text-color)] hover:mb-2 transition-all duration-300 ease-in-out"
        >
          Blog
        </Link>
      </div>
      <div className="flex items-center gap-2 cursor-pointer hover:text-[var(--text-color)] transition-all duration-300 ease-in-out">
        <HiOutlineUserCircle className="size-6" />
        <p className="font-semibold">Account</p>
      </div>
    </div>
  );
};

export default Header;
