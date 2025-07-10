'use client';

import { useState } from 'react';
import { Menu, Search, Bell, User, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleToggle = (type: 'search' | 'notifications' | 'profile') => {
    setShowSearch(type === 'search' ? !showSearch : false);
    setShowNotifications(type === 'notifications' ? !showNotifications : false);
    setShowProfileMenu(type === 'profile' ? !showProfileMenu : false);
  };

  return (
    <nav className="w-full px-6 py-4 bg-gradient-to-r from-white/80 to-blue-200/60 dark:from-gray-900/60 dark:to-gray-800/60 backdrop-blur-md shadow-xl flex items-center justify-between transition-all duration-500 relative z-50 border-b border-indigo-100 dark:border-indigo-900">
      
      {/* Left: Logo */}
      <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-blue-400 dark:to-pink-400 tracking-wide drop-shadow-lg animate-pulse">
        Nexora
      </div>

      {/* Center: Nav Links - Desktop */}
      <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-semibold text-sm tracking-wide">
        {[
          { href: '/', label: 'Home' },
          { href: '#about', label: 'About' },
          { href: '#projects', label: 'Projects' },
          { href: '#services', label: 'Services' },
          { href: '#contact', label: 'Contact' }
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative group hover:text-indigo-600 transition"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </Link>
        ))}
        <Link
          href="https://professional-portfolio-baba.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group hover:text-indigo-600 transition"
        >
          Portfolio
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
        </Link>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 relative">
        {/* Search */}
        <div
          onClick={() => handleToggle('search')}
          className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
        >
          <Search className="w-5 h-5" />
        </div>

        {/* Notifications */}
        <div
          onClick={() => handleToggle('notifications')}
          className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
        >
          <Bell className="w-5 h-5" />
        </div>

        {/* Profile */}
        <div
          onClick={() => handleToggle('profile')}
          className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
        >
          <User className="w-5 h-5" />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>

        {/* Search Box */}
        {showSearch && (
          <div className="absolute top-14 right-0 w-64 bg-white dark:bg-gray-800 shadow-2xl rounded p-3 z-50 border border-indigo-100 dark:border-indigo-700">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        {/* Notification Box */}
        {showNotifications && (
          <div className="absolute top-14 right-0 w-72 bg-white dark:bg-gray-800 shadow-2xl rounded p-4 z-50 border border-indigo-100 dark:border-indigo-700">
            <p className="text-sm text-gray-800 dark:text-gray-200">🔔 No new notifications</p>
          </div>
        )}

        {/* Profile Menu */}
        {showProfileMenu && (
          <div className="absolute top-14 right-0 w-48 bg-white dark:bg-gray-800 shadow-2xl rounded p-4 z-50 border border-indigo-100 dark:border-indigo-700 space-y-2">
            <p className="text-sm text-gray-800 dark:text-white hover:underline cursor-pointer">👤 View Profile</p>
            <p className="text-sm text-gray-800 dark:text-white hover:underline cursor-pointer">🚪 Logout</p>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center space-y-4 py-4 mt-2 shadow-lg z-40 md:hidden text-gray-800 dark:text-white font-medium tracking-wide">
          <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link href="#about" className="hover:text-indigo-600 transition">About</Link>
          <Link href="#projects" className="hover:text-indigo-600 transition">Projects</Link>
          <Link href="#services" className="hover:text-indigo-600 transition">Services</Link>
          <Link href="#contact" className="hover:text-indigo-600 transition">Contact</Link>
          <Link
            href="https://professional-portfolio-baba.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            Portfolio
          </Link>
        </div>
      )}
    </nav>
  );
}
