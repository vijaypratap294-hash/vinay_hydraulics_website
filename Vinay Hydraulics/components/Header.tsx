
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="ri-car-line text-white text-lg"></i>
            </div>
            <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Pacifico, serif' }}>
              ParkStack
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Products
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Solutions
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Get Quote
            </button>
            <button className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer">
              <i className="ri-menu-line text-gray-600 text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
