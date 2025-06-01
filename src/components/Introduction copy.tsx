'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getIntroduction } from '@/lib/contentful';

type IntroContent = {
  title: string;
  content: string;
} | null;

export default function About() {
  const [introContent, setIntroContent] = useState<IntroContent>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchIntroContent() {
      try {
        const content = await getIntroduction();
        console.log('Contentful content received:', content);
        setIntroContent(content);
      } catch (error) {
        console.error('Error fetching introduction content:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchIntroContent();
  }, []);

  // Fallback content in case of loading or error
  const defaultTitle = "Your Trusted Partner in Financial Success";
  const defaultDescription = "At FinAnalystPro, we combine deep financial expertise with cutting-edge analytics to provide you with actionable insights and strategies for sustainable growth.....";

  const displayTitle = isLoading ? defaultTitle : (introContent?.title ?? defaultTitle);
  const displayContent = isLoading ? defaultDescription : (introContent?.content ?? defaultDescription);

  console.log('Current display state:', {
    isLoading,
    introContent,
    displayTitle,
    displayContent
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {displayTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {displayContent}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Financial Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-xl">
              <p className="text-lg font-semibold">
                "Expert financial guidance for your business success"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 