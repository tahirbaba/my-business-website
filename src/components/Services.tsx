'use client'
import ServiceCard from './ServiceCard'
import { RocketIcon, Bot, Layers3, Paintbrush } from 'lucide-react'

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
**Let's build your online success together!** 💡`
}, 
{
  icon: Bot, // 👾 ya 🤖 emoji use ho sakta hai UI mein
  title: 'AI Integration 🤖',
  description: 'Building smart apps using OpenAI & modern AI stacks.',
  tags: ['OpenAI SDK', 'LangChain', 'Streamlit', 'Chainlit', 'RAG', 'UV'],
  modalCTA: 'Explore AI Projects 🚀',
  modalLink: 'https://agentic-ai-trip-planner-app-2vfc.vercel.app/', // Update karo actual link se jab ready ho
  modalContent: `
    <div class="space-y-4">
      <p>🚀 Developed intelligent tools using <strong>OpenAI SDK</strong>, enabling powerful NLP and reasoning capabilities.</p>
      <p>🔗 Integrated <strong>LangChain</strong> and <strong>Chainlit</strong> for dynamic LLM workflows and fast prototyping.</p>
      <p>📊 Built interactive UI dashboards in <strong>Streamlit</strong> for real-time AI interactions.</p>
      <p>📚 Implemented <strong>Retrieval-Augmented Generation (RAG)</strong> for contextual question answering and smarter outputs.</p>
      <p>🧠 Also explored <strong>UV</strong> for web-based AI interfaces and collaborative experiments.</p>
      <p class="italic text-sm text-muted">These tools combined bring life to modern AI-first user experiences.</p>
    </div>
  `
},
{
  icon: Layers3,
  title: 'UI/UX Design 🎨',
  description: 'Modern, responsive & user-first designs.',
  tags: ['Figma', 'Framer', 'Sketch', 'Adobe XD', 'Wireframes', 'Prototypes'],
  modalCTA: 'Explore UI/UX Work 🔍',
  modalLink: 'https://www.figma.com/design/',
  modalContent: `
    <div class="space-y-4">
      <p>🧠 Designed intuitive user flows using <strong>Figma</strong>, <strong>Framer</strong>, and <strong>Adobe XD</strong>.</p>
      <p>📐 Created high-fidelity wireframes & responsive prototypes across platforms.</p>
      <p>🎯 Focused on accessibility, mobile-first layouts, and interactive transitions.</p>
      <p>⚙️ Collaborated with developers using auto-layouts, components, and design systems.</p>
      <p class="italic text-sm text-muted">🚀 Streamlined experiences backed by user behavior & design psychology.</p>
    </div>
  `
},
{
  icon: Paintbrush,
  title: 'Graphic Design 🖌️',
  description: 'Creative visuals & brand identity.',
  tags: ['Photoshop', 'Illustrator', 'Canva', 'Branding', 'Posters', 'Social Media'],
  modalCTA: 'View Graphic Gallery 🖼️',
  modalLink: 'https://www.behance.net/galleries/graphic-design',
  modalContent: `
    <div class="space-y-4">
      <p>🎨 Created visually stunning graphics for marketing campaigns and brand identity.</p>
      <p>🖼️ Designed social media posts, posters, logos, and brochures using <strong>Photoshop</strong>, <strong>Illustrator</strong>, and <strong>Canva</strong>.</p>
      <p>🌈 Developed cohesive brand kits with custom typography, color palettes & iconography.</p>
      <p>📢 Delivered impactful visual storytelling for startups, events, and digital media.</p>
      <p class="italic text-sm text-muted">💎 Making every pixel speak your brand’s voice.</p>
    </div>
  `
}
]

export default function Services() {
  return (
    <section id="services" className="w-full py-24 px-4 md:px-16 bg-gradient-to-bl from-[#f3f6ff] to-[#dce6ff] dark:from-[#0f192a] dark:to-[#1a2433]">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Our <span className="text-indigo-600 dark:text-indigo-400">Services</span></h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">Explore our range of digital services—smooth, modern, and impactful.</p>
      </div>

      <div className="overflow-hidden relative group">
        <div className="flex animate-scroll space-x-6">
          {[...slides, ...slides].map((s, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 hover:scale-105 transition-transform duration-300">
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
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
