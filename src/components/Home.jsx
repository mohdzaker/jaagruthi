"use client";
import React, { useEffect } from "react";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MainSection from "./MainSection";
import Footer from "./Footer";

function Home() {
  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-72 bg-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r bg-orange-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <GraduationCap size={40} className="text-orange-100" />
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Jaagruthi Degree & PG College
                </h1>
                <p className="text-sm text-orange-100">
                  Affiliated to Mahatma Gandhi University, Nalgonda.
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 p-2 rounded-md">
              <a
                href="#"
                className="text-white hover:text-orange-200 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-200 transition-colors duration-200"
              >
                Latest News
              </a>
              <a
                href="#"
                className="bg-white text-orange-600 px-4 py-2 rounded-md hover:bg-orange-100 transition-colors duration-200"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
      <Hero />
      <MainSection />
      <Footer />
    </div>
  );
}

export default Home;
