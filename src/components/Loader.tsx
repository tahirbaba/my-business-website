'use client';
import { useEffect, useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a short loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black transition-all duration-500">
      <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
