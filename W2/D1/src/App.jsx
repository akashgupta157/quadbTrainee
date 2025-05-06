import React from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Equipment from "./pages/Equipment";
import { BrowserRouter, Routes, Route } from "react-router";
export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[var(--bg-color)]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/equipment" element={<Equipment />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
