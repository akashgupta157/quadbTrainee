import React from "react";
import SocialMedia from "../components/SocialMedia";
import PageNavigation from "../components/PageNavigation";
import Hero from "../components/Hero";
import Guide from "../components/Guide";

export default function Home() {
  return (
    <div className="">
      <SocialMedia />
      <PageNavigation />
      <Hero />
      <Guide />
    </div>
  );
}
