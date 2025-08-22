import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

// Components
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import ScrollToTop from './components/UI/ScrollToTop'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CollectionPage from './pages/CollectionPage'
import ProductPage from './pages/ProductPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/AdminPage'

// SEO Component
import SEO from './components/SEO/SEO'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <ScrollToTop />
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}

export default App