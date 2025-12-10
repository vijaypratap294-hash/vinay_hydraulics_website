'use client';

import { useState } from 'react';
import DemoModal from './DemoModal';

export default function HeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <>
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20high-tech%20hydraulic%20car%20parking%20system%20with%20multiple%20levels%2C%20sleek%20metal%20framework%2C%20automated%20vehicle%20lifting%20platforms%2C%20professional%20industrial%20setting%20with%20clean%20white%20background%2C%20bright%20lighting%2C%20contemporary%20architectural%20design%2C%20blue%20and%20silver%20color%20scheme%2C%20sophisticated%20engineering%20equipment%2C%20spacious%20parking%20facility&width=1920&height=1080&seq=hero-parking&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-full px-6 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Revolutionary
                <span className="text-blue-400"> Hydraulic</span>
                <br />
                Parking Solutions
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Transform your parking space with our innovative puzzle parking stacks and hydraulic systems. Maximize capacity while minimizing footprint with cutting-edge automation technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToProducts}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Explore Solutions
                </button>
                <button 
                  onClick={openDemoModal}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
}