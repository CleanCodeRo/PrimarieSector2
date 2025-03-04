import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 mr-2 text-green-500" />
              <span className="font-bold text-xl">Boston's Green New Deal</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building a healthy, equitable, and resilient Boston for generations to come.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#priority-areas" className="text-gray-400 hover:text-white">Priority Areas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Get Involved</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Priority Areas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Buildings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Energy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Water & Climate Resilience</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Housing & Land Use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Inclusive Economy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Education & Awareness</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-green-500" />
                <span className="text-gray-400">Boston City Hall, 1 City Hall Square, Boston, MA 02201</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-500" />
                <span className="text-gray-400">(617) 635-4000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-500" />
                <span className="text-gray-400">greennewdeal@boston.gov</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} City of Boston. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;