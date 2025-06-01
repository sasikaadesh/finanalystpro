'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getAboutContent } from '@/lib/contentful';
import Image from 'next/image';

// Default image URL for fallback
const DEFAULT_IMAGE_URL = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80";

export default function About() {
  // State for about section data with initial values
  const [aboutData, setAboutData] = useState<{
    title: string;
    description: string;
    image: string | null;
  }>({
    title: "Your Trusted Partner in Financial Success!",
    description: "At FinAnalystPro, we combine deep financial expertise with cutting-edge analytics to provide you with actionable insights and strategies for sustainable growth!",
    image: null,
  });

  // Track loading state
  const [isLoading, setIsLoading] = useState(true);

  // Fetch content from Contentful on component mount
  useEffect(() => {
    async function loadAboutContent() {
      try {
        const content = await getAboutContent();
        if (content) {
          setAboutData(content as { title: string; description: string; image: string | null });
        }
      } catch (error) {
        console.error('Error loading about content:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadAboutContent();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column with text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {aboutData.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {aboutData.description}
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

          {/* Right column with image and quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative bg-gray-100">
              {isLoading ? (
                // Loading skeleton
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              ) : aboutData.image ? (
                <Image
                  src={aboutData.image}
                  alt="Financial Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  onError={(e) => {
                    const imgElement = e.target as HTMLImageElement;
                    imgElement.src = DEFAULT_IMAGE_URL;
                  }}
                />
              ) : (
                // Fallback image only shown if there's an error or no image from Contentful
                <Image
                  src={DEFAULT_IMAGE_URL}
                  alt="Financial Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              )}
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-xl">
              <p className="text-lg font-semibold">
                &ldquo;Expert financial guidance for your business success&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 