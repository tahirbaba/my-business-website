'use client';
import { BrainCircuit, Code2, Sparkles, Paintbrush2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-tr from-[#eaf1ff] to-[#d4e2ff] dark:from-[#101a2e] dark:to-[#1b2739] py-24 px-4 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        
        {/* 🖼️ Image Side */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Image
            src="/about-section.jpg"
            alt="About Nexora"
            width={600}
            height={600}
            className="rounded-3xl shadow-2xl dark:shadow-indigo-600/10 object-cover"
          />
        </motion.div>

        {/* 📄 Text Side */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white tracking-tight">
            Get to Know <span className="text-indigo-600 dark:text-indigo-400">Nexora</span>
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
            Nexora is a cutting-edge digital agency that builds future-ready digital solutions.
            From full-stack web apps to intelligent AI agents and pixel-perfect UI/UX — we combine
            creativity with engineering precision.
          </p>

          {/* ✅ Key Highlights */}
          <div className="space-y-4 pt-2">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <Code2 className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-gray-800 dark:text-gray-100 text-base font-medium">
                Full Stack Web Solutions
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <BrainCircuit className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-gray-800 dark:text-gray-100 text-base font-medium">
                Agentic AI Integrations
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <Sparkles className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-gray-800 dark:text-gray-100 text-base font-medium">
                Creative & Modern UI/UX
              </span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <Paintbrush2 className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-gray-800 dark:text-gray-100 text-base font-medium">
                Graphic Design Excellence
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
