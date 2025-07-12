'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#eef2ff] to-[#e0e7ff] dark:from-[#0f172a] dark:to-[#1e293b] py-36 px-6 md:px-20">

      {/* 🔮 Blurred Background Blob */}
      <div className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] bg-indigo-300 dark:bg-indigo-600 rounded-full blur-[160px] opacity-20 z-0" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-purple-300 dark:bg-purple-700 rounded-full blur-[120px] opacity-20 z-0" />

      {/* 🌟 Glowing Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-400 to-violet-500 text-white px-5 py-2 rounded-full font-medium text-sm shadow-lg border border-white/30"
      >
        🔥 Next-Gen Digital Brilliance
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 z-10 relative">

        {/* ✍️ Text Area */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white mb-6">
            Welcome to{' '}
            <span className="relative inline-block text-indigo-600 dark:text-indigo-400">
              Nexora
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-indigo-200 dark:bg-indigo-500 opacity-60 rounded-full -z-10"></span>
            </span>
            <br />
            <span className="text-indigo-600 dark:text-indigo-300">
              <Typewriter
                words={['Innovation.', 'Performance.', 'Excellence.']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8">
            Where bold ideas meet breakthrough technology. Join Nexora and define the future.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
            <Link href="#contact">
              <button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold px-6 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                🚀 Let&apos;s Build
              </button>
            </Link>
            <Link href="#about">
              <button className="bg-white/20 dark:bg-white/10 border border-indigo-400 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-800 font-semibold px-6 py-3 rounded-full transition-all duration-300">
                📘 Explore More
              </button>
            </Link>
          </div>
        </motion.div>

        {/* 🖼️ Image with Shine & Glass Effect */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="absolute top-6 -left-6 w-full h-full rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-2xl z-0 animate-pulse" />
          <Image
            src="/hero-section.jpg"
            alt="Nexora Hero"
            width={520}
            height={520}
            priority
            className="relative z-10 rounded-3xl shadow-2xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
