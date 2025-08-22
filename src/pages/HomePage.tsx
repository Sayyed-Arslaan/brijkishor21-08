import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Shield, Award, ArrowRight } from 'lucide-react'
import Button from '../components/UI/Button'

const HomePage: React.FC = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Gold Necklace Set',
      category: 'Gold',
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=500',
      purity: '22K',
      slug: 'gold-necklace-set'
    },
    {
      id: 2,
      name: 'Diamond Earrings',
      category: 'Diamond',
      image: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=500',
      purity: '18K',
      slug: 'diamond-earrings'
    },
    {
      id: 3,
      name: 'Silver Bangles',
      category: 'Silver',
      image: 'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=500',
      purity: '925',
      slug: 'silver-bangles'
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
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Trusted Jewellers in{' '}
                <span className="text-gradient">Ayodhya</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover exquisite gold, silver, and diamond jewelry crafted with precision 
                and certified for purity. Your trusted partner since 1985.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button as={Link} to="/collection" variant="primary" size="lg">
                  Explore Collection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button as={Link} to="/contact" variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Jewelry Collection"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">BIS Hallmark</p>
                    <p className="text-sm text-gray-600">Certified Purity</p>
                  </div>
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
            <p className="text-lg text-gray-600">Quality, trust, and excellence in every piece</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hallmark Certified</h3>
              <p className="text-gray-600">All our gold jewelry comes with BIS hallmark certification ensuring purity and quality.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Since 1985</h3>
              <p className="text-gray-600">Four decades of trust and excellence in serving the Ayodhya community.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handcrafted jewelry with attention to detail and superior craftsmanship.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-lg text-gray-600">Discover our most popular jewelry pieces</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <Link to={`/product/${product.slug}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                      {product.purity}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.category} Jewelry</p>
                  <Button as={Link} to={`/product/${product.slug}`} variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button as={Link} to="/collection" variant="primary" size="lg">
              View All Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage