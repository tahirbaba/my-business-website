'use client';

import { Facebook, Twitter, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const socials = [
  {
    icon: <Mail size={20} />,
    href: 'mailto:muhammadtahirhasni@gmail.com',
    label: 'Email',
    bg: 'bg-gray-100',
    hoverBg: 'hover:bg-indigo-600',
    hoverText: 'hover:text-white',
  },
  {
    icon: <MessageCircle size={20} />,
    href: 'https://wa.me/923129114002?text=Assalamualaikum!',
    label: 'WhatsApp',
    bg: 'bg-green-100',
    hoverBg: 'hover:bg-green-600',
    hoverText: 'hover:text-white',
  },
  {
    icon: <Linkedin size={20} />,
    href: 'https://www.linkedin.com/in/muhammad-tahir-hasni-021a562ba/',
    label: 'LinkedIn',
    bg: 'bg-blue-100',
    hoverBg: 'hover:bg-blue-700',
    hoverText: 'hover:text-white',
  },
  {
    icon: <Twitter size={20} />,
    href: 'https://x.com/hasni73298',
    label: 'Twitter',
    bg: 'bg-sky-100',
    hoverBg: 'hover:bg-sky-600',
    hoverText: 'hover:text-white',
  },
  {
    icon: <Facebook size={20} />,
    href: 'https://facebook.com/yourpage',
    label: 'Facebook',
    bg: 'bg-blue-100',
    hoverBg: 'hover:bg-blue-600',
    hoverText: 'hover:text-white',
  },
];

const SocialSidebar = () => {
  return (
    <div className="hidden md:flex fixed top-[35%] right-2 z-50 flex-col gap-3">
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          title={item.label}
          className={`group flex items-center justify-center rounded-full p-3 transition-all duration-300 shadow-md ${item.bg} ${item.hoverBg} ${item.hoverText} hover:scale-105`}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialSidebar;






// // src/components/SocialSidebar.tsx
// 'use client';

// import { Facebook, Twitter, Linkedin, Mail, MessageCircle } from 'lucide-react';
// import Link from 'next/link';

// const socials = [
//   {
//     icon: <Mail size={20} />,
//     href: "mailto:muhammadtahirhasni@gmail.com",
//     label: "Email",
//     bg: "bg-gray-100",
//     hoverBg: "hover:bg-indigo-600",
//     hoverText: "hover:text-white",
//   },
//   {
//     icon: <MessageCircle size={20} />,
//     href: "https://wa.me/923129114002?text=Assalamualaikum!",
//     label: "WhatsApp",
//     bg: "bg-green-100",
//     hoverBg: "hover:bg-green-600",
//     hoverText: "hover:text-white",
//   },
//   {
//     icon: <Linkedin size={20} />,
//     href: "https://www.linkedin.com/in/muhammad-tahir-hasni-021a562ba/",
//     label: "LinkedIn",
//     bg: "bg-blue-100",
//     hoverBg: "hover:bg-blue-700",
//     hoverText: "hover:text-white",
//   },
//   {
//     icon: <Twitter size={20} />,
//     href: "https://x.com/hasni73298",
//     label: "Twitter",
//     bg: "bg-sky-100",
//     hoverBg: "hover:bg-sky-600",
//     hoverText: "hover:text-white",
//   },
//   {
//     icon: <Facebook size={20} />,
//     href: "https://facebook.com/yourpage",
//     label: "Facebook",
//     bg: "bg-blue-100",
//     hoverBg: "hover:bg-blue-600",
//     hoverText: "hover:text-white",
//   },
// ];

// const SocialSidebar = () => {
//   return (
//     <div className="fixed top-[35%] right-0.5 z-50 flex flex-col gap-3">
//       {socials.map((item, index) => (
//         <Link
//           key={index}
//           href={item.href}
//           target="_blank"
//           aria-label={item.label}
//           title={item.label}
//           className={`group rounded-full p-3 shadow-md transition duration-300 ${item.bg} ${item.hoverBg} ${item.hoverText}`}
//         >
//           {item.icon}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default SocialSidebar;
