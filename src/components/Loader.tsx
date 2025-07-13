'use client';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black transition-all duration-500">
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-[6px] md:border-[8px] border-indigo-500 border-t-transparent rounded-full animate-spin transition-all duration-300 ease-in-out" />
    </div>
  );
};

export default Loader;
