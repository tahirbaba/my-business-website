'use client';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* 🌟 Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">Nexora</h2>
          <p className="text-sm leading-relaxed">
            Elevating digital presence with full-stack solutions, creative design & AI innovation.
          </p>
        </div>

        {/* 📂 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="#home" className="hover:text-indigo-600 transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-indigo-600 transition-colors">About</Link></li>
            <li><Link href="#services" className="hover:text-indigo-600 transition-colors">Services</Link></li>
            <li><a href="https://professional-portfolio-baba.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Portfolio</a></li>
          </ul>
        </div>

        {/* 📬 Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect With Us</h3>
          <div className="flex items-center gap-5 mb-5">
            <a href="mailto:muhammadtahirhasni@gmail.com" className="text-gray-600 hover:text-indigo-600 transition" aria-label="Email">
              <Mail size={22} />
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition" aria-label="Facebook">
              <Facebook size={22} />
            </a>
            <a href="https://x.com/hasni73298" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-500 transition" aria-label="Twitter">
              <Twitter size={22} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-tahir-hasni-021a562ba/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} <span className="font-medium">Nexora</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
