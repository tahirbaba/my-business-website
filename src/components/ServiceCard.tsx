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

  return (
    <>
      {/* 🔥 Stylish Equal-Height Card */}
      <div
        onClick={openModal}
        className="group cursor-pointer bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 p-6 flex flex-col justify-between min-h-[400px] w-full max-w-sm mx-auto border border-transparent hover:border-indigo-400/50"
      >
        {/* 🧩 Icon Box */}
        <div className="bg-indigo-50 dark:bg-indigo-800/10 text-indigo-600 dark:text-indigo-400 w-full flex justify-center p-5 rounded-xl shadow-sm mb-4 transition-colors duration-300 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-800/20">
          <div className="text-5xl">{icon}</div>
        </div>

        {/* 📝 Title & Description */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* 🔖 Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => {
            const iconMap: { [key: string]: string } = {
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
              <span
                key={index}
                className="bg-indigo-100 dark:bg-indigo-700/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1"
              >
                <span>{iconMap[tag] || '🔹'}</span>
                {tag}
              </span>
            );
          })}
        </div>

{/* 🔗 Learn More Button + Live Demo CTA */}
<div className="mt-auto w-full">
  <button
    onClick={(e) => {
      e.stopPropagation();
      openModal();
    }}
    className="w-full rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 hover:shadow-md transition-all"
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
            <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
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
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <DialogTitle
                      as="h3"
                      className="text-lg font-medium text-gray-900 dark:text-white"
                    >
                      {title}
                    </DialogTitle>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
                      onClick={closeModal}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <Dialog.Description className="text-gray-700 dark:text-gray-300 whitespace-pre-line text-sm mb-4">
                    {modalContent}
                  </Dialog.Description>

                  <a
                    href={modalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-md bg-indigo-600 text-white px-5 py-2 text-sm font-medium hover:bg-indigo-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
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
