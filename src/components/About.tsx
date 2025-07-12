'use client';

import { BrainCircuit, Code2, Sparkles, Paintbrush2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-28 px-6 md:px-24 bg-gradient-to-br from-[#eaf1ff] via-[#f2f7ff] to-[#ddeaff] dark:from-[#0c1528] dark:via-[#121e35] dark:to-[#0e172c] text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto space-y-20 flex flex-col items-center">
        
        {/* 🖼️ Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/30 dark:bg-white/5 backdrop-blur-xl p-2 shadow-xl hover:shadow-indigo-400 dark:hover:shadow-pink-600 transition-all duration-500"
        >
          <Image
            src="/about-section.jpg"
            alt="About Nexora"
            width={1200}
            height={800}
            className="rounded-2xl object-cover w-full h-full"
          />
        </motion.div>

        {/* 🧠 About Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
              Nexora
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Nexora is where imagination meets execution. We blend tech, design, and intelligence to craft digital experiences that solve real problems.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            Whether it&apos;s a startup idea or an enterprise solution — we build, automate, and scale your vision.
          </p>
        </motion.div>

        {/* 💼 Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6 w-full max-w-4xl"
        >
          {[
            { icon: <Code2 size={26} />, label: 'Full Stack Engineering' },
            { icon: <BrainCircuit size={26} />, label: 'AI Automation & Agents' },
            { icon: <Sparkles size={26} />, label: 'UI/UX & Product Design' },
            { icon: <Paintbrush2 size={26} />, label: 'Branding & Identity' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-4 p-6 rounded-2xl border border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-md hover:shadow-indigo-300 dark:hover:shadow-pink-500 transition-all duration-300"
            >
              <div className="text-indigo-500 dark:text-pink-400">{item.icon}</div>
              <p className="text-base font-semibold text-gray-800 dark:text-white">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
