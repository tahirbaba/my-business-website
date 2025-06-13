'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const variant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const address = "Al-Markaz-ul-Qadri, Block 13A, Street 2, Gulshan-e-Iqbal, Karachi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-r from-[#eaf3ff] to-[#dbe9ff] dark:from-[#0d1728] dark:to-[#182334] py-16 px-4 md:px-12 font-poppins"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-indigo-600 dark:text-indigo-400 text-sm uppercase font-semibold tracking-wide"
        >
          Let&apos;s Connect
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
        >
          Get in <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
        >
          Whether you have a question, proposal, or just want to say Salam — my inbox is always open.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variant}
        >
          <motion.a
            href="mailto:muhammadtahirhasni@gmail.com"
            className="flex items-center gap-4 bg-white/70 dark:bg-white/10 backdrop-blur-md p-4 px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            custom={0}
          >
            <Mail className="text-indigo-600 w-7 h-7" />
            <span className="font-medium text-gray-900 dark:text-white">
              muhammadtahirhasni@gmail.com
            </span>
          </motion.a>

          <motion.a
            href="https://wa.me/923129114002?text=Assalamualaikum!"
            className="flex items-center gap-4 bg-white/70 dark:bg-white/10 backdrop-blur-md p-4 px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            custom={1}
          >
            <Phone className="text-green-600 w-7 h-7" />
            <span className="font-medium text-gray-900 dark:text-white">
              +92 312 9114002
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variant}
          className="mt-10 bg-white/70 dark:bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md transition"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <MapPin className="text-red-600 w-6 h-6" />
            <span className="font-medium text-gray-900 dark:text-white">
              {address}
            </span>
          </div>
          <div className="w-full h-52 rounded-xl overflow-hidden shadow-inner">
            <iframe
              src="https://maps.google.com/maps?q=24.90459,67.07461&z=17&output=embed"
              className="w-full h-full border-none"
              loading="lazy"
              title="Google Map"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
