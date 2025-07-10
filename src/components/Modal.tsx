'use client';

import { motion } from 'framer-motion';
import React from 'react';

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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-md w-full mx-4 shadow-lg relative"
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-line text-sm">{content}</p>

        {ctaLink && (
          <a
            href={ctaLink}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-medium"
          >
            {ctaLabel}
          </a>
        )}

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-white text-xl font-bold"
        >
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
