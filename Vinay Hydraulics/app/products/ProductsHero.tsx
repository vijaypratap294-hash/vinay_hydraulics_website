'use client';

export default function ProductsHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=Modern%20hydraulic%20parking%20facility%20with%20multiple%20car%20platforms%2C%20automated%20systems%2C%20industrial%20setting%2C%20professional%20engineering%20environment%2C%20metallic%20structures%2C%20blue%20and%20silver%20colors%2C%20clean%20organized%20layout%2C%20advanced%20technology%2C%20urban%20parking%20solution%2C%20high-tech%20automotive%20equipment&width=1920&height=800&seq=products-hero&orientation=landscape')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hydraulic Parking Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Discover our comprehensive range of automated parking systems designed to maximize space efficiency and provide seamless vehicle storage solutions for urban environments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Download Catalog
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}