import { ChartBarIcon, PresentationChartLineIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Financial Analysis",
    description: "Comprehensive analysis of financial statements, market trends, and investment opportunities.",
    icon: ChartBarIcon,
  },
  {
    title: "Investment Strategy",
    description: "Customized investment strategies aligned with your goals and risk tolerance.",
    icon: PresentationChartLineIcon,
  },
  {
    title: "Risk Management",
    description: "Identify and mitigate financial risks through advanced risk assessment techniques.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Wealth Planning",
    description: "Long-term wealth management and growth strategies for sustainable financial success.",
    icon: CurrencyDollarIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive financial analysis and consulting services to help you achieve your financial goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 