'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const filters = ['All', 'Next.js', 'Streamlit', 'Chainlit', 'Agentic AI'];

// ——— Projects list ———
const projects = [
  {
    title: 'Next.js Portfolio Website',
    stack: 'Next.js',
    image: '/portfolio.png',
    description: 'A sleek developer portfolio using Next.js.',
    link: 'https://professional-portfolio-baba.vercel.app/',
  },
  {
    title: 'Next.js Ecommerce App',
    stack: 'Next.js',
    image: '/ecom-mth.png',
    description: 'Full-featured e-commerce platform with Stripe integration.',
    link: 'https://q-com-mth.vercel.app/',
  },
  {
    title: 'Used Car-Showroom',
    stack: 'Next.js',
    image: '/used-car.png',
    description:
      'A modern Next.js-based web application for showcasing, selling, and managing a collection of used cars in a virtual showroom.',
    link: 'https://used-car-showroom-3tep.vercel.app/',
  },
  {
    title: 'Body Mass Index (BMI) Calculator',
    stack: 'Streamlit',
    image: '/streamlit/bmi.png',
    description:
      'Calculates BMI to assess body weight status using height and weight built using Python + Streamlit.',
    link: 'https://bmi-calculator-tahir.streamlit.app/',
  },
  {
    title: 'Growth Mindset Challenge',
    stack: 'Streamlit',
    image: '/streamlit/gmc.png',
    description:
      'Boost your mindset with daily growth-oriented challenges built using Python + Streamlit.',
    link: 'https://checking-growth-mindset-app.streamlit.app/',
  },
  {
    title: 'Password Strength Generator',
    stack: 'Streamlit',
    image: '/streamlit/psg.png',
    description:
      'Instantly generate strong and secure passwords built using Python + Streamlit.',
    link: 'https://password-strength-generator-tahirbaba.streamlit.app/',
  },
  {
    title: 'Personal Library Management',
    stack: 'Streamlit',
    image: '/streamlit/plm.png',
    description:
      'Manage and track your personal library with ease passwords built using Python + Streamlit.',
    link: 'https://personal-library-manager-tahirbaba.streamlit.app/',
  },
  {
    title: 'Unit Converter',
    stack: 'Streamlit',
    image: '/streamlit/uc.png',
    description:
      'Instantly convert values across multiple unit types built using Python + Streamlit.',
    link: 'https://unit-converter-tahirbaba.streamlit.app/',
  },
  {
    title: 'Secure Data Encryption System',
    stack: 'Streamlit',
    image: '/streamlit/sdes.png',
    description:
      'Encrypt and protect your data with advanced security built using Python + Streamlit.',
    link: 'https://secure-data-tahir.streamlit.app/',
  },
  {
    title: 'Agentic AI Travel Planner',
    stack: 'Agentic AI',
    image: '/agentic/aaitp.png',
    description: 'AI-powered agent that plans your dream trip automatically.',
    link: 'https://agentic-ai-trip-planner-app-2vfc.vercel.app/',
  },
  {
    title: 'Quiz Generator',
    stack: 'Chainlit',
    image: '/chainlit/quiz-agent-1.png',
    description:
      'Generate dynamic quizzes using the power of AI with Chainlit and Python. Ideal for learning and practice.',
    link: 'https://quiz-generator-tahir.chainlit.app/',
  },
] as const;

// ——— Component ———
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // filter logic
  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.stack === activeFilter);

  return (
    <section
      id="projects"
      className="w-full py-32 px-6 md:px-24 bg-gradient-to-br from-[#eaf1ff] via-[#f2f7ff] to-[#ddeaff] dark:from-[#0c1528] dark:via-[#121e35] dark:to-[#0e172c]"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          Our&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
            Legendary Projects
          </span>
        </motion.h2>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3">
          {filters.map((filter) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={clsx(
                'px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 shadow-sm border',
                activeFilter === filter
                  ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white border-none shadow-lg'
                  : 'bg-white/30 dark:bg-white/10 backdrop-blur text-gray-800 dark:text-white border-gray-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-pink-400'
              )}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, i) => {
            // support for future array-of-images, but keep single string too
            const firstImage = Array.isArray(project.image)
              ? project.image[0]
              : project.image;

            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white/20 dark:bg-white/5 backdrop-blur-lg rounded-3xl border border-white/30 dark:border-white/10 p-6 overflow-hidden shadow-xl group hover:shadow-indigo-400 dark:hover:shadow-pink-600 transition-all duration-300"
            >
                {/* Decorative ring */}
                <div className="absolute inset-0 pointer-events-none rounded-3xl border border-transparent group-hover:border-indigo-400 group-hover:scale-[1.03] transition duration-300" />

                {/* Thumbnail */}
                <div className="relative h-32 w-full rounded-xl overflow-hidden mb-2 shadow-md">
                  <Image
                    src={firstImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div
                  className={clsx('transition-opacity duration-300', {
                    'opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden':
                      activeFilter === 'All',
                    'opacity-100 h-auto': activeFilter !== 'All',
                  })}
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-indigo-500 dark:text-pink-400">
                    {project.stack}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-semibold text-indigo-600 dark:text-pink-400 hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
