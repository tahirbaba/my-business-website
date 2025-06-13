'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] dark:from-[#111827] dark:to-[#1f2937] py-24 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* 👈 Text Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 tracking-tight">
            Welcome to <span className="text-indigo-600 dark:text-indigo-400">Nexora</span><br />
            Elevate Your Digital Presence
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-lg">
            We build full-stack, AI-powered, beautiful web experiences for modern businesses.
          </p>
          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <Link href="#contact">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300">
                🚀 Get Started
              </button>
            </Link>
            <Link href="#about">
              <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-800 font-semibold px-6 py-3 rounded-full transition duration-300">
                📘 Learn More
              </button>
            </Link>
          </div>
        </motion.div>

        {/* 👉 Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/hero-section.jpg"
            alt="Nexora Hero"
            width={500}
            height={500}
            className="rounded-xl shadow-xl object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
