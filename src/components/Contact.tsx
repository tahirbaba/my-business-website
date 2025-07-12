'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const address = "Al-Markaz-ul-Qadri, Block 13A, Street 2, Gulshan-e-Iqbal, Karachi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-[#eef3fd] to-[#d7e3ff] dark:from-[#0c1627] dark:to-[#1a263a] py-24 px-4 md:px-12 font-poppins"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <p className="text-indigo-600 dark:text-indigo-400 uppercase font-semibold tracking-wide text-sm">Say Hello 👋</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Let&apos;s <span className="text-indigo-600 dark:text-indigo-400">Connect</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions or ideas? Drop a message or reach out directly via call/email.
          </p>

          <div className="space-y-4 pt-6">
            {/* Email */}
            <motion.a
              href="mailto:muhammadtahirhasni@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white/60 dark:bg-white/10 backdrop-blur-lg p-4 px-6 rounded-xl shadow-md border border-indigo-100 dark:border-indigo-700 hover:ring-2 hover:ring-blue-400 hover:shadow-lg transition-all duration-300"
            >
              <Mail className="text-indigo-600 w-6 h-6" />
              <span className="text-gray-900 dark:text-white font-medium">
                muhammadtahirhasni@gmail.com
              </span>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="https://wa.me/923129114002?text=Assalamualaikum!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white/60 dark:bg-white/10 backdrop-blur-lg p-4 px-6 rounded-xl shadow-md border border-green-100 dark:border-green-700 hover:ring-2 hover:ring-green-500 hover:shadow-lg transition-all duration-300"
            >
              <Phone className="text-green-600 w-6 h-6" />
              <span className="text-gray-900 dark:text-white font-medium">
                +92 312 9114002
              </span>
            </motion.a>

            {/* Address */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-white/60 dark:bg-white/10 backdrop-blur-lg p-4 px-6 rounded-xl shadow-md border border-red-100 dark:border-red-700 hover:ring-2 hover:ring-red-500 hover:shadow-lg transition-all duration-300"
            >
              <MapPin className="text-red-600 w-6 h-6" />
              <span className="text-gray-900 dark:text-white font-medium">{address}</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  whileHover={{ scale: 1.01 }}
  className="bg-white/80 dark:bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-indigo-200 dark:border-indigo-700 hover:shadow-2xl hover:ring-2 hover:ring-blue-400 transition-all duration-500 space-y-5"
>
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Your Name"
    required
    className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:ring-2 hover:ring-blue-400 hover:border-blue-400 hover:shadow-md transition-all duration-300"
  />
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Your Email"
    required
    className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:ring-2 hover:ring-blue-400 hover:border-blue-400 hover:shadow-md transition-all duration-300"
  />
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Your Message"
    required
    rows={5}
    className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:ring-2 hover:ring-blue-400 hover:border-blue-400 hover:shadow-md transition-all duration-300"
  />
  <button
    type="submit"
    disabled={status === 'loading'}
    className="w-full bg-indigo-600 hover:bg-indigo-700 hover:ring-2 hover:ring-blue-500 hover:shadow-lg text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
  >
    {status === 'loading' ? 'Sending...' : 'Send Message'}
  </button>

  {status === 'success' && (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-green-600 mt-2"
    >
      ✅ Message sent successfully!
    </motion.p>
  )}
  {status === 'error' && (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-red-600 mt-2"
    >
      ❌ Something went wrong. Try again.
    </motion.p>
  )}
</motion.form>

      </div>

      {/* Bottom Google Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 0.995 }}
        className="mt-16 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
      >
        <iframe
          src="https://maps.google.com/maps?q=24.90459,67.07461&z=17&output=embed"
          className="w-full h-64 border-none"
          loading="lazy"
          title="Google Map"
        />
      </motion.div>
    </section>
  );
}
