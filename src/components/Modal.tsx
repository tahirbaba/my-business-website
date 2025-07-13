'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { X } from 'lucide-react'; // ❌ Icon for close button

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  ctaLabel?: string;
  ctaLink?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content, ctaLabel, ctaLink }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] px-4"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ duration: 0.4 }}
        className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-md shadow-2xl relative"
      >
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-all"
        >
          <X size={20} />
        </button>

        {/* 📢 Title */}
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{title}</h2>

        {/* 📄 Content */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-line">{content}</p>

        {/* 🚀 CTA Button (if any) */}
        {ctaLink && (
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-5 py-2 rounded-full font-medium transition-all"
          >
            {ctaLabel}
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
