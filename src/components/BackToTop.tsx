'use client';

import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
} 