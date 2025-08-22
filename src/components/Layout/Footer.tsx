import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, MapPin, Instagram, Facebook, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BK</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Brij Kishore Jewellers</h3>
                <p className="text-sm text-gray-400">Trusted Since 1985</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for authentic gold, silver, and diamond jewelry in Ayodhya. 
              We pride ourselves on quality, purity, and exceptional craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span className="text-gray-400">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span className="text-gray-400">info@bkjewellers.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-500 mt-1" />
                <span className="text-gray-400">
                  9/6/123, Chowk Rikabganj Rd,<br />
                  Shakti Vihar Colony,<br />
                  Ayodhya, UP 224001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Brij Kishore Jewellers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer