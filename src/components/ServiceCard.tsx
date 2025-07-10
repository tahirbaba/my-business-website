'use client';

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment, useState, ReactNode } from 'react';
import { X } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
  modalContent: string;
  modalCTA: string;
  modalLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  tags,
  modalContent,
  modalCTA,
  modalLink,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const tagIcons: { [key: string]: string } = {
    'Next.js': '⚛️',
    'Node.js': '🌿',
    'PostgreSQL': '🐘',
    'Vercel': '▲',
    'OpenAI': '🤖',
    'LangChain': '🔗',
    'Streamlit': '📊',
    'RAG': '🧠',
    'Figma': '🎨',
    'Framer': '🎞️',
    'Responsive': '📱',
    'User-First': '👥',
    'Adobe XD': '🧩',
    'Illustrator': '🖌️',
    'Branding': '🏷️',
    'Social Media': '📢',
  };

  return (
    <>
      {/* 🔥 Modern Styled Service Card */}
      <div
        onClick={openModal}
        className="group relative cursor-pointer bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-[#0a0a0a] dark:via-[#0e0e0e] dark:to-[#121212] rounded-2xl border border-transparent hover:border-indigo-500/50 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 p-6 flex flex-col justify-between min-h-[420px] w-full max-w-sm mx-auto"
      >
        {/* 🧠 Icon Area */}
        <div className="bg-indigo-100 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-400 w-full flex justify-center p-5 rounded-xl mb-4 transition-colors duration-300 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/20">
          <div className="text-5xl">{icon}</div>
        </div>

        {/* 🔤 Title + Description */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* 🏷️ Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-50 dark:bg-indigo-800/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1"
            >
              <span>{tagIcons[tag] || '🔹'}</span>
              {tag}
            </span>
          ))}
        </div>

        {/* 📎 CTA */}
        <div className="mt-auto w-full">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openModal();
            }}
            className="w-full rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 hover:shadow-lg transition-all"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* 🪟 Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-4 py-8">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-4"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-[#111111] p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <DialogTitle
                      as="h3"
                      className="text-lg font-medium text-gray-900 dark:text-white"
                    >
                      {title}
                    </DialogTitle>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <Dialog.Description className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line mb-4">
                    {modalContent}
                  </Dialog.Description>

                  <a
                    href={modalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-md bg-indigo-600 text-white px-5 py-2 text-sm font-medium hover:bg-indigo-700 hover:scale-105 hover:shadow-md transition-all"
                  >
                    {modalCTA}
                  </a>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ServiceCard;
