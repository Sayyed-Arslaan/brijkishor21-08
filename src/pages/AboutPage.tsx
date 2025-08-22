import React from 'react'
import { motion } from 'framer-motion'
import { Award, Shield, Users, Clock } from 'lucide-react'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Legacy of Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over three decades, Brij Kishore Jewellers has been Ayodhya's trusted name 
              in authentic, high-quality jewelry, combining traditional craftsmanship with modern elegance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 1985 by Shri Brij Kishore, our jewelry house began with a simple vision: 
                to provide the people of Ayodhya with authentic, beautiful jewelry that celebrates 
                life's precious moments.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small shop has grown into one of Ayodhya's most trusted jewelry 
                destinations, serving thousands of satisfied customers who have made us part of 
                their most cherished celebrations.
              </p>
              <p className="text-gray-600">
                Today, we continue to uphold the same values of integrity, quality, and customer 
                service that our founder instilled, while embracing modern techniques and designs 
                to serve contemporary tastes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Traditional Jewelry Craftsmanship"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from selecting materials 
              to serving our customers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Authenticity',
                description: 'Every piece is genuine, certified, and comes with our guarantee of purity and quality.'
              },
              {
                icon: Award,
                title: 'Craftsmanship',
                description: 'Master artisans create each piece with meticulous attention to detail and traditional techniques.'
              },
              {
                icon: Users,
                title: 'Customer First',
                description: 'Your satisfaction is our priority. We build relationships, not just transactions.'
              },
              {
                icon: Clock,
                title: 'Timeless Quality',
                description: 'We create jewelry that lasts generations, becoming treasured family heirlooms.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hallmark Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="BIS Hallmark Certification"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hallmark & Purity Assurance</h2>
              <p className="text-gray-600 mb-6">
                We are proud to be BIS (Bureau of Indian Standards) certified, ensuring that 
                every piece of gold jewelry meets the highest standards of purity and quality.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">BIS Hallmark Certified</h4>
                    <p className="text-gray-600">All gold jewelry carries official BIS hallmark certification</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Purity Guarantee</h4>
                    <p className="text-gray-600">22K, 18K, and 14K gold options with guaranteed purity levels</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Testing</h4>
                    <p className="text-gray-600">Every piece undergoes rigorous quality checks before sale</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lifetime Support</h4>
                    <p className="text-gray-600">Ongoing maintenance and repair services for all purchases</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage