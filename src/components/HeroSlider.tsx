'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: "Expert Financial Analysis",
    description: "Make informed decisions with our comprehensive financial insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Strategic Investment Planning",
    description: "Build your wealth with our proven investment strategies",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Risk Management Solutions",
    description: "Protect your assets with our advanced risk assessment tools",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl md:text-2xl max-w-2xl mx-auto">{slide.description}</p>
                  <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 