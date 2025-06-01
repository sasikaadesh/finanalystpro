import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team of financial experts to discuss your financial goals and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPinIcon className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
                <p className="text-gray-600 mt-2">123 Financial District<br />New York, NY 10004</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <PhoneIcon className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600 mt-2">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600 mt-2">contact@finanalystpro.com</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 text-gray-800"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 