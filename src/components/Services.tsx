'use client';
import React from 'react';
import { ChartBarIcon, PresentationChartLineIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
// import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getServicesContent } from '@/lib/contentful';

// const servicesArray = [
//   {
//     title: "Financial Analysis",
//     description: "Comprehensive analysis of financial statements, market trends, and investment opportunities.",
//     icon: ChartBarIcon,
//   },
//   {
//     title: "Investment Strategy",
//     description: "Customized investment strategies aligned with your goals and risk tolerance.",
//     icon: PresentationChartLineIcon,
//   },
//   {
//     title: "Risk Management",
//     description: "Identify and mitigate financial risks through advanced risk assessment techniques.",
//     icon: ShieldCheckIcon,
//   },
//   {
//     title: "Wealth Planning",
//     description: "Long-term wealth management and growth strategies for sustainable financial success.",
//     icon: CurrencyDollarIcon,
//   },
// ];

export default function Services() {
  const [servicesData, setServicesData] = useState({
    title: "",
    description: "",
    t1title: "",
    t1desc: "",
    t2title: "",
    t2desc: "",
    t3title: "",
    t3desc: "",
    t4title: "",
    t4desc: ""
  });

  useEffect(() => {
    async function loadServicesContent() {
      const content = await getServicesContent();
      if (content) {
        setServicesData(content);
      }
    }

    loadServicesContent();
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{servicesData.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {servicesData.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <ChartBarIcon className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">{servicesData.t1title}</h3>
            <p className="text-gray-600">{servicesData.t1desc}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <PresentationChartLineIcon className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">{servicesData.t2title}</h3>
            <p className="text-gray-600">{servicesData.t2desc}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">{servicesData.t3title}</h3>
            <p className="text-gray-600">{servicesData.t3desc}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <CurrencyDollarIcon className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-gray-800 mb-4">{servicesData.t4title}</h3>
            <p className="text-gray-600">{servicesData.t4desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 