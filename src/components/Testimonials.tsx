'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "FinAnalystPro transformed our financial strategy. Their insights helped us achieve 40% growth in just one year.",
  },
  {
    name: "Michael Chen",
    position: "CFO, Global Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "The team's expertise in risk management and investment strategy is unmatched. They're truly the best in the business.",
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, EcoInvest",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
    quote: "Working with FinAnalystPro was a game-changer for our startup. Their guidance was invaluable in securing our Series A funding.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients about their experience working with our team of financial experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 