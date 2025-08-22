import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visit Our Store
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our exquisite jewelry collection in person. We're located in the heart of Ayodhya, 
              ready to help you find the perfect piece for your special moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Visit us at our store or reach out through any of the following channels. 
                  Our experienced team is here to assist you with all your jewelry needs.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Store Address</h3>
                    <p className="text-gray-600">
                      9/6/123, Chowk Rikabganj Rd,<br />
                      Shakti Vihar Colony,<br />
                      Ayodhya, Uttar Pradesh 224001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919876543210" className="hover:text-amber-600 transition-colors">
                        +91 9876543210
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@bkjewellers.com" className="hover:text-amber-600 transition-colors">
                        info@bkjewellers.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Store Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Store Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p>Sunday: 11:00 AM - 7:00 PM</p>
                      <p className="text-sm text-amber-600 font-medium">Open on all festivals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="h-full min-h-[500px]"
            >
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-full">
                <iframe 
                  src="https://www.google.com/maps?q=9/6/123%2C%20Chowk%20Rikabganj%20Rd%2C%20Shakti%20Vihar%20Colony%2C%20Ayodhya%2C%20Uttar%20Pradesh%20224001&z=16&output=embed" 
                  width="100%" 
                  height="420" 
                  style={{border:0, borderRadius:'16px'}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[500px]"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Visit Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Visit Our Store?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference of personalized service and authentic craftsmanship
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Consultation',
                description: 'Our experienced jewelers provide personalized guidance to help you choose the perfect piece.',
                icon: '👨‍💼'
              },
              {
                title: 'Authentic Products',
                description: 'Every piece is BIS hallmark certified and comes with a guarantee of purity and quality.',
                icon: '✨'
              },
              {
                title: 'Custom Designs',
                description: 'We create bespoke jewelry pieces tailored to your specific requirements and preferences.',
                icon: '🎨'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage