import React from "react";
import Hero from "./components/Hero";
import Guide from "./components/Guide";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import PageNavigation from "./components/PageNavigation";

export default function App() {
  return (
    <div className="">
      <Header />
      <SocialMedia />
      <PageNavigation />
      <Hero />
      <Guide />
      <Footer />
    </div>
  );
}
