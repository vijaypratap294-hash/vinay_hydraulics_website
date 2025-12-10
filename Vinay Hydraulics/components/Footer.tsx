
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-car-line text-white text-lg"></i>
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: 'Pacifico, serif' }}>
                ParkStack
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Leading provider of hydraulic puzzle parking systems and automated parking solutions for urban environments.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <i className="ri-youtube-fill text-white"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/puzzle-parking" className="hover:text-white transition-colors cursor-pointer">Puzzle Parking</Link></li>
              <li><Link href="/vertical-stacks" className="hover:text-white transition-colors cursor-pointer">Vertical Stacks</Link></li>
              <li><Link href="/underground" className="hover:text-white transition-colors cursor-pointer">Underground Systems</Link></li>
              <li><Link href="/custom-solutions" className="hover:text-white transition-colors cursor-pointer">Custom Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors cursor-pointer">Careers</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors cursor-pointer">News</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/documentation" className="hover:text-white transition-colors cursor-pointer">Documentation</Link></li>
              <li><Link href="/maintenance" className="hover:text-white transition-colors cursor-pointer">Maintenance</Link></li>
              <li><Link href="/warranty" className="hover:text-white transition-colors cursor-pointer">Warranty</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors cursor-pointer">Technical Support</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ParkStack. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
