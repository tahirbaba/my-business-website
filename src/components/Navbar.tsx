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
    <nav className="w-full px-6 py-4 bg-gradient-to-r from-white/70 to-blue-100/60 dark:from-gray-900/60 dark:to-gray-800/60 backdrop-blur-md shadow-md flex items-center justify-between transition duration-300 relative z-50">
      
      {/* Left: Logo */}
      <div className="text-3xl font-extrabold text-blue-600 dark:text-white tracking-wide shadow-sm">
        Nexora
      </div>

      {/* Center: Nav Links - Desktop */}
      <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-medium text-sm">
        <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
        <Link href="#about" className="hover:text-indigo-600 transition">About</Link>
        <Link href="#services" className="hover:text-indigo-600 transition">Services</Link>
        <Link
          href="https://professional-portfolio-baba.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition"
        >
          Portfolio
        </Link>
        <Link href="#contact" className="hover:text-indigo-600 transition">Contact</Link>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 relative">
        {/* Search */}
        <div
          onClick={() => handleToggle('search')}
          className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition duration-300 cursor-pointer"
        >
          <Search className="w-5 h-5" />
        </div>

        {/* Notifications */}
        <div
          onClick={() => handleToggle('notifications')}
          className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition duration-300 cursor-pointer"
        >
          <Bell className="w-5 h-5" />
        </div>

        {/* Profile */}
        <div
          onClick={() => handleToggle('profile')}
          className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition duration-300 cursor-pointer"
        >
          <User className="w-5 h-5" />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-700 transition duration-300 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>

        {/* Search Box */}
        {showSearch && (
          <div className="absolute top-14 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg rounded p-3 z-50">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        {/* Notification Box */}
        {showNotifications && (
          <div className="absolute top-14 right-0 w-72 bg-white dark:bg-gray-800 shadow-lg rounded p-4 z-50">
            <p className="text-sm text-gray-800 dark:text-gray-200">🔔 No new notifications</p>
          </div>
        )}

        {/* Profile Menu */}
        {showProfileMenu && (
          <div className="absolute top-14 right-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded p-4 z-50 space-y-2">
            <p className="text-sm text-gray-800 dark:text-white hover:underline cursor-pointer">👤 View Profile</p>
            <p className="text-sm text-gray-800 dark:text-white hover:underline cursor-pointer">🚪 Logout</p>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center space-y-4 py-4 mt-2 shadow-md z-40 md:hidden text-gray-800 dark:text-white font-medium">
          <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link href="#about" className="hover:text-indigo-600 transition">About</Link>
          <Link href="#services" className="hover:text-indigo-600 transition">Services</Link>
          <Link
            href="https://professional-portfolio-baba.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            Portfolio
          </Link>
          <Link href="#contact" className="hover:text-indigo-600 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
