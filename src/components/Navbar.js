import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 w-full">
      <div className="flex justify-between items-center px-6 lg:px-10">
        <div className="flex-shrink-0">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Koin</span>
            <span className="text-orange-400 text-2xl font-bold">X™</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Crypto Taxes
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Free Tools
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Resource Center
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 px-6 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Crypto Taxes
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Free Tools
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">
            Resource Center
          </a>
          <button className="bg-blue-600 text-white w-full px-4 py-2 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
