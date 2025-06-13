'use client';
import { useState } from 'react';
import { Menu, Search, Bell, User, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-gradient-to-r from-white/70 to-blue-100/60 dark:from-gray-900/60 dark:to-gray-800/60 backdrop-blur-md shadow-md flex items-center justify-between transition duration-300 relative">
      
      {/* Left: Logo */}
      <div className="text-3xl font-extrabold text-blue-600 dark:text-white tracking-wide shadow-sm">
        Nexora
      </div>

      {/* Center: Nav Links - Desktop */}
      <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium text-sm">
        <a href="/" className="hover:text-indigo-600 transition">Home</a>
        <a href="#about" className="hover:text-indigo-600 transition">About</a>
        <a href="#services" className="hover:text-indigo-600 transition">Services</a>
        <a
          href="https://professional-portfolio-baba.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition"
        >
          Portfolio
        </a>
        <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
        {[Search, Bell, User].map((Icon, index) => (
          <div
            key={index}
            className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition duration-300 cursor-pointer"
          >
            <Icon className="w-5 h-5" />
          </div>
        ))}

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition duration-300 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center space-y-4 py-4 mt-2 shadow-md z-50 md:hidden text-gray-800 dark:text-white font-medium">
          <a href="/" className="hover:text-indigo-600 transition">Home</a>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#services" className="hover:text-indigo-600 transition">Services</a>
          <a
            href="https://professional-portfolio-baba.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            Portfolio
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}
