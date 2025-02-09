"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Welcome to Jaagruthi Degree & PG College",
    description:
      "Empowering minds, shaping futures. Join us in our pursuit of academic excellence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Excellence in Education",
    description:
      "State-of-the-art facilities and experienced faculty to guide your journey.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Shape Your Future",
    description:
      "Discover endless possibilities with our diverse range of programs and activities.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full mx-3 flex items-center justify-center text-center">
              <div className="max-w-3xl bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4 animate-fadeIn drop-shadow-sm">
                  {slide.title}
                </h1>
                <p className="text-xl text-orange-800 mb-8 animate-fadeIn delay-200 drop-shadow-sm">
                  {slide.description}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors duration-300 animate-fadeIn delay-400 shadow-md hover:shadow-lg"
                  >
                    Apply Now
                  </a>
                  <a
                    href="#"
                    className="bg-white/80 text-orange-600 px-6 py-3 rounded-md hover:bg-white transition-colors duration-300 animate-fadeIn delay-400 shadow-md hover:shadow-lg"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition-colors duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-orange-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition-colors duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-orange-600" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-orange-600 w-8"
                : "bg-white/70 hover:bg-white backdrop-blur-sm"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
