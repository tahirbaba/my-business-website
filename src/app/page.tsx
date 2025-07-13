'use client';

import { motion } from 'framer-motion';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import ScrollToTop from '@/components/ScrollToTop';
import Loader from '@/components/Loader';
import SocialSidebar from '@/components/SocialSidebar';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <motion.main
      className="w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Loader />
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <Footer />
      <ScrollToTop />
      <SocialSidebar />
    </motion.main>
  );
}
