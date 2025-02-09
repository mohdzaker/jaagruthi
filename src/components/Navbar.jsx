"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = {
  "About Us": ["Introduction", "History", "Vision & Mission", "Principal"],
  Academics: ["Courses",  "Departments"],
  Events: [
    "Academic Events",
    "Sports & Games",
    "Cultural Activities",
    "Seminars",
  ],
  Facilities: ["Library", "Laboratory"],
  "Student Services": ["Alumni"],
  "Functional Units": [
    "Placement Cell",
  ],
  Downloads: [
    "Previous Question Papers",
    "Materials",
  ],
  "Contact Us": ["Location", "Phone Directory", "Email Us", "Feedback"],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (category) => {
    setOpenDropdowns((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <nav className="bg-white w-full items-center shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center items-center w-full space-x-4">
            {Object.entries(navItems).map(([category, items]) => (
              <div key={category} className="dropdown relative group">
                <button className="nav-link flex items-center space-x-1 h-16">
                  <span>{category}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="dropdown-content absolute left-1/2 -translate-x-1/2 mt-0 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden z-50">
                  {items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden w-full flex justify-between items-center">
           <div>
           <span className="text-lg text-orange-500 font-bold">Home</span>
           <span className="text-lg text-orange-500 font-bold pl-7">Contact</span>
           </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-orange-600 hover:text-orange-700 hover:bg-orange-50 transition-colors duration-200"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="bg-white border-t border-orange-100">
          {Object.entries(navItems).map(([category, items]) => (
            <div key={category} className="border-b border-orange-100">
              <button
                onClick={() => toggleDropdown(category)}
                className="w-full flex items-center justify-between px-4 py-3 text-orange-600 hover:bg-orange-50 transition-colors duration-200"
              >
                <span className="font-medium">{category}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openDropdowns.includes(category) ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openDropdowns.includes(category)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
