import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function SocialMedia() {
  return (
    <div className="hidden md:flex flex-col text-white items-center gap-5 fixed top-65 left-3 z-100">
      <p className="rotate-90 text-sm mb-6 font-medium">Follow us</p>
      <AiOutlineInstagram className="size-5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-130 hover:text-[var(--text-color)]" />
      <AiOutlineTwitter className="size-5 cursor-pointer transition-all duration-300 ease-in-out hover:scale-130 hover:text-[var(--text-color)]" />
    </div>
  );
}
