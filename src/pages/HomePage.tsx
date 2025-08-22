import React from 'react'
import { motion } from 'framer-motion'
import { Star, Shield, Award, Clock } from 'lucide-react'
import Button from '../components/UI/Button'

const HomePage: React.FC = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Gold Necklace Set',
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Gold',
      purity: '22K'
    },
    {
      id: 2,
      name: 'Diamond Earrings',
      image: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Diamond',
      purity: '18K'
    },
    {
      id: 3,
      name: 'Silver Bangles',
      image: 'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Silver',
      purity: '925'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Trusted Jewellers in{' '}
                <span className="text-amber-600">Ayodhya</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover exquisite jewelry crafted with precision and passion. 
                Serving Ayodhya with authentic gold, silver, and diamond pieces since 1985.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/collection" size="lg">
                  Explore Collection
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Jewelry Collection"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <span className="font-semibold">Trusted Since 1985</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the finest in jewelry craftsmanship with our commitment to quality and authenticity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Hallmark Certified',
                description: 'All our gold jewelry comes with BIS hallmark certification ensuring purity and quality.'
              },
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'Handcrafted pieces using the finest materials and traditional techniques passed down generations.'
              },
              {
                icon: Clock,
                title: 'Legacy of Trust',
                description: 'Serving Ayodhya for over 35 years with unwavering commitment to customer satisfaction.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-gray-600">Discover our most popular and exquisite pieces</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-2 py-1 rounded-full text-sm">
                    {product.purity}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.category}</p>
                  <Button to={`/product/${product.id}`} className="w-full">
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/collection" variant="outline" size="lg">
              View All Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage