'use client';

import { RocketIcon, Bot, Layers3, Paintbrush } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const slides = [
  {
    icon: RocketIcon,
    title: '🚀 Custom Web Development',
    description: 'Scalable websites & apps for your business. 💼',
    tags: ['Next.js ⚡', 'Node.js 🔧', 'PostgreSQL 🛢️', 'Vercel ☁️'],
    modalCTA: '🚀 Live Demo',
    modalLink: 'https://used-car-showroom-3tep.vercel.app/',
    modalContent: `🚀 **We build blazing-fast, SEO-friendly, and secure web apps** tailored to your unique business goals.

Here's what you get when you work with us:

🔧 Full-stack development with **Next.js + Node.js**  
🔗 RESTful & GraphQL **API integrations**  
🛡️ Secure **Authentication & Role-based Access**  
📱 Fully **Responsive & Mobile-first** design  
☁️ Lightning-fast deployment on **Vercel & Cloud**  

Whether you're a startup or scaling enterprise —  
**Let's build your online success together!** 💡`,
  },
  {
    icon: Bot,
    title: 'AI Integration 🤖',
    description: 'Building smart apps using OpenAI & modern AI stacks.',
    tags: ['OpenAI SDK', 'LangChain', 'Streamlit', 'Chainlit', 'RAG', 'UV'],
    modalCTA: 'Explore AI Projects 🚀',
    modalLink: 'https://agentic-ai-trip-planner-app-2vfc.vercel.app/',
    modalContent: `
🚀 Developed intelligent tools using OpenAI SDK, enabling powerful NLP and reasoning capabilities.
🔗 Integrated LangChain and Chainlit for dynamic LLM workflows and fast prototyping.
📊 Built interactive UI dashboards in Streamlit for real-time AI interactions.
📚 Implemented Retrieval-Augmented Generation (RAG) for contextual question answering and smarter outputs.
🧠 Also explored UV for web-based AI interfaces and collaborative experiments.
These tools combined bring life to modern AI-first user experiences.
    `,
  },
  {
    icon: Layers3,
    title: 'UI/UX Design 🎨',
    description: 'Modern, responsive & user-first designs.',
    tags: ['Figma', 'Framer', 'Sketch', 'Adobe XD', 'Wireframes', 'Prototypes'],
    modalCTA: 'Explore UI/UX Work 🔍',
    modalLink: 'https://www.figma.com/design/',
    modalContent: `
🧠 Designed intuitive user flows using Figma, Framer, and Adobe XD.
📐 Created high-fidelity wireframes & responsive prototypes across platforms.
🎯 Focused on accessibility, mobile-first layouts, and interactive transitions.
⚙️ Collaborated with developers using auto-layouts, components, and design systems.
🚀 Streamlined experiences backed by user behavior & design psychology.
    `,
  },
  {
    icon: Paintbrush,
    title: 'Graphic Design 🖌️',
    description: 'Creative visuals & brand identity.',
    tags: ['Photoshop', 'Illustrator', 'Canva', 'Branding', 'Posters', 'Social Media'],
    modalCTA: 'View Graphic Gallery 🖼️',
    modalLink: 'https://www.behance.net/galleries/graphic-design',
    modalContent: `
🎨 Created visually stunning graphics for marketing campaigns and brand identity.
🖼️ Designed social media posts, posters, logos, and brochures using Photoshop, Illustrator, and Canva.
🌈 Developed cohesive brand kits with custom typography, color palettes & iconography.
📢 Delivered impactful visual storytelling for startups, events, and digital media.
💎 Making every pixel speak your brand's voice.
    `,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-32 px-6 md:px-24 bg-gradient-to-br from-[#eaf1ff] via-[#f2f7ff] to-[#ddeaff] dark:from-[#0c1528] dark:via-[#121e35] dark:to-[#0e172c]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Digital Services</span>
        </motion.h2>

        {/* Scrolling Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden relative group"
        >
          <div className="flex animate-scroll space-x-6">
            {[...slides, ...slides].map((s, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-72 sm:w-80 hover:scale-105 transition-transform duration-300"
              >
                <ServiceCard
                  icon={<s.icon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />}
                  title={s.title}
                  description={s.description}
                  tags={s.tags}
                  modalCTA={s.modalCTA}
                  modalLink={s.modalLink}
                  modalContent={s.modalContent}
                />
              </div>
            ))}
          </div>

          {/* Scroll Pause on Hover */}
          <style jsx>{`
            .animate-scroll {
              animation: scroll 12s linear infinite;
            }
            .group:hover .animate-scroll {
              animation-play-state: paused;
            }
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
