import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, Search } from 'lucide-react'
import Button from '../components/UI/Button'

const CollectionPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Gold', 'Silver', 'Diamond', 'Bridal']

  const products = [
    {
      id: 1,
      name: 'Gold Necklace Set',
      category: 'Gold',
      purity: '22K',
      image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'gold-necklace-set'
    },
    {
      id: 2,
      name: 'Diamond Earrings',
      category: 'Diamond',
      purity: '18K',
      image: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'diamond-earrings'
    },
    {
      id: 3,
      name: 'Silver Bangles',
      category: 'Silver',
      purity: '925',
      image: 'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'silver-bangles'
    },
    {
      id: 4,
      name: 'Bridal Ring Set',
      category: 'Bridal',
      purity: '22K',
      image: 'https://images.pexels.com/photos/1454174/pexels-photo-1454174.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'bridal-ring-set'
    },
    {
      id: 5,
      name: 'Gold Chain',
      category: 'Gold',
      purity: '22K',
      image: 'https://images.pexels.com/photos/1454175/pexels-photo-1454175.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'gold-chain'
    },
    {
      id: 6,
      name: 'Diamond Ring',
      category: 'Diamond',
      purity: '18K',
      image: 'https://images.pexels.com/photos/1454176/pexels-photo-1454176.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'diamond-ring'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
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
              Our Jewelry Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our exquisite range of gold, silver, diamond, and bridal jewelry, 
              crafted with precision and certified for purity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search jewelry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.purity}
                  </div>
                  <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">Premium {product.category.toLowerCase()} jewelry</p>
                  
                  <div className="flex gap-3">
                    <Button to={`/product/${product.slug}`} className="flex-1">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default CollectionPage