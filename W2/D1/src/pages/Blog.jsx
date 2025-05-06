import React from "react";
import { HiOutlineCalendar, HiOutlineClock, HiOutlineBookmark } from "react-icons/hi";

const blogPosts = [
  {
    id: 1,
    title: "Essential Gear for Winter Hiking",
    excerpt: "Discover the must-have equipment for safe and comfortable winter adventures in the backcountry.",
    date: "Nov 15, 2023",
    readTime: "8 min read",
    category: "Gear Guide",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Trail Etiquette: Leave No Trace Principles",
    excerpt: "How to minimize your impact while enjoying the wilderness responsibly.",
    date: "Oct 28, 2023",
    readTime: "6 min read",
    category: "Conservation",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Training for High-Altitude Treks",
    excerpt: "Prepare your body and mind for challenging ascents with our comprehensive training plan.",
    date: "Sep 10, 2023",
    readTime: "10 min read",
    category: "Training",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)] pt-32 pb-20 text-white px-6 md:px-20">
      <div className="text-center mb-16">
        <h1 className="playfair-display text-5xl md:text-7xl font-medium mb-6">
          MNTN Journal
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Expert advice, inspiring stories, and the latest in outdoor exploration
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-20">
        <div className="relative group">
          <img 
            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Featured post" 
            className="w-full h-96 object-cover rounded-xl brightness-75 group-hover:brightness-90 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <span className="inline-block px-4 py-1 bg-[var(--text-color)] text-[var(--bg-color)] text-sm font-bold rounded-full mb-3">
              Featured
            </span>
            <h2 className="playfair-display text-3xl md:text-4xl font-medium mb-3">
              The Ultimate Guide to Backpacking Nutrition
            </h2>
            <p className="text-lg max-w-2xl mb-4">
              How to plan meals that fuel your adventures without weighing you down
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <HiOutlineCalendar className="size-4" /> May 2, 2024
              </span>
              <span className="flex items-center gap-1">
                <HiOutlineClock className="size-4" /> 12 min read
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-[#0B1D26]/50 rounded-xl overflow-hidden border border-[#ffffff10] hover:border-[var(--text-color)] transition duration-300">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-block px-3 py-1 bg-[var(--text-color)] text-[var(--bg-color)] text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                  <button className="text-gray-400 hover:text-[var(--text-color)]">
                    <HiOutlineBookmark className="size-5" />
                  </button>
                </div>
                <h3 className="playfair-display text-xl font-medium mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <HiOutlineCalendar className="size-4" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiOutlineClock className="size-4" /> {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-24 bg-[#0B1D26]/50 rounded-xl p-8 md:p-12 border border-[#ffffff10] text-center">
        <h3 className="playfair-display text-2xl md:text-3xl font-medium mb-4">
          Join the Adventure
        </h3>
        <p className="max-w-2xl mx-auto mb-6">
          Get the latest articles, gear reviews, and expedition stories straight to your inbox
        </p>
        <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 bg-[#ffffff10] border border-[#ffffff20] rounded-lg focus:outline-none focus:border-[var(--text-color)]"
          />
          <button className="px-6 py-3 bg-[var(--text-color)] text-[var(--bg-color)] font-bold rounded-lg hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}