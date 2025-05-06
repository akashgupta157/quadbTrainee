import React, { useState } from "react";
import { Link } from "react-router";
import { HiOutlineMenu, HiOutlineUserCircle, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute top-0 px-6 md:px-20 py-10 md:py-12 z-50 w-full flex justify-between items-center text-white">
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

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer hover:text-[var(--text-color)] transition-all duration-300 ease-in-out">
          <HiOutlineUserCircle className="size-6" />
          <p className="font-semibold hidden md:block">Account</p>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiOutlineMenu className="size-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-28 right-6 md:hidden bg-[#0B1D26] rounded-lg shadow-lg py-4 px-6 z-50 w-48">
          <div className="flex flex-col gap-4 font-bold">
            <Link
              to="/equipment"
              className="hover:text-[var(--text-color)] transition-all duration-300"
              onClick={toggleMenu}
            >
              Equipment
            </Link>
            <Link
              to="/about-us"
              className="hover:text-[var(--text-color)] transition-all duration-300"
              onClick={toggleMenu}
            >
              About us
            </Link>
            <Link
              to="/blog"
              className="hover:text-[var(--text-color)] transition-all duration-300"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
