'use client';

import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-100 to-white dark:from-[#0f172a] dark:to-[#1e293b] text-gray-700 dark:text-gray-300 py-12 px-4 sm:px-6 md:px-16 border-t border-gray-200 dark:border-gray-800 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center sm:text-left">

        {/* 🌟 Brand Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight">
            Nexora
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-md mx-auto sm:mx-0">
            Elevating digital presence with full-stack solutions, creative design & AI innovation.
          </p>
        </div>

        {/* 📂 Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="#home" className="hover:text-indigo-600 hover:underline transition-all duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-indigo-600 hover:underline transition-all duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-indigo-600 hover:underline transition-all duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="https://professional-portfolio-baba.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 hover:underline transition-all duration-300"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* 📬 Contact & Socials */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Connect With Us</h3>

          <div className="flex justify-center sm:justify-start items-center gap-5">
            <a
              href="mailto:muhammadtahirhasni@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 hover:scale-110 transition-transform duration-300"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>

            <Link
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:scale-110 transition-transform duration-300"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </Link>

            <Link
              href="https://x.com/hasni73298"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-sky-500 hover:scale-110 transition-transform duration-300"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/muhammad-tahir-hasni-021a562ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </Link>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} <span className="font-medium">Nexora</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
