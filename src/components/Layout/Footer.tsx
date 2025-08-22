import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">BK</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Brij Kishore Jewellers</h3>
                <p className="text-xs text-gray-400">Trusted Since 1985</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for authentic gold, silver, and diamond jewelry in Ayodhya. 
              Quality assured with hallmark certification.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  9/6/123, Chowk Rikabganj Rd,<br />
                  Shakti Vihar Colony,<br />
                  Ayodhya, UP 224001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-400">+91 9876543210</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-5 h-5 text-amber-400 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm mb-2">Quality Certifications:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-amber-600 text-white text-xs rounded">BIS Hallmark</span>
                <span className="px-2 py-1 bg-amber-600 text-white text-xs rounded">916 Gold</span>
                <span className="px-2 py-1 bg-amber-600 text-white text-xs rounded">Certified</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Brij Kishore Jewellers. All rights reserved. | Trusted Jewellers in Ayodhya
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer