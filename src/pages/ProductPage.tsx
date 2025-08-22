import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, Shield, Award, Star } from 'lucide-react'
import Button from '../components/UI/Button'

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()

  // Mock product data - in real app, this would come from API/database
  const product = {
    id: 1,
    name: 'Gold Necklace Set',
    category: 'Gold',
    purity: '22K',
    weight: '25.5g',
    images: [
      'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Exquisite handcrafted gold necklace set featuring traditional Indian designs with modern elegance. Perfect for weddings and special occasions.',
    features: [
      'BIS Hallmark Certified',
      'Traditional Craftsmanship',
      'Premium Quality Gold',
      'Lifetime Maintenance'
    ]
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product.name} (${product.purity})`
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+919876543210'
  }

  const handleEmail = () => {
    const subject = `Inquiry about ${product.name}`
    const body = `Hi,\n\nI'm interested in learning more about the ${product.name} (${product.purity}).\n\nPlease provide more details.\n\nThank you!`
    window.location.href = `mailto:info@bkjewellers.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {product.purity}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <span className="text-gray-600 ml-2">(Trusted Quality)</span>
                </div>
              </div>
            </div>

            {/* Product Specifications */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600">Purity:</span>
                  <span className="font-semibold text-gray-900 ml-2">{product.purity}</span>
                </div>
                <div>
                  <span className="text-gray-600">Weight:</span>
                  <span className="font-semibold text-gray-900 ml-2">{product.weight}</span>
                </div>
                <div>
                  <span className="text-gray-600">Category:</span>
                  <span className="font-semibold text-gray-900 ml-2">{product.category}</span>
                </div>
                <div>
                  <span className="text-gray-600">Certification:</span>
                  <span className="font-semibold text-gray-900 ml-2">BIS Hallmark</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Get in Touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Button>
                
                <Button
                  onClick={handleCall}
                  className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </Button>
                
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-amber-50 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-amber-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Quality</h4>
                    <p className="text-sm text-gray-600">BIS Hallmark Assured</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-amber-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Trusted Since 1985</h4>
                    <p className="text-sm text-gray-600">35+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage