
'use client';

export default function ProductsSection() {
  const products = [
    {
      title: 'Hydraulic Puzzle Parking',
      description: 'Multi-level hydraulic system with sliding and lifting mechanisms for maximum space utilization',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20hydraulic%20puzzle%20parking%20system%20with%20multiple%20car%20platforms%2C%20sliding%20mechanisms%2C%20lifting%20platforms%2C%20modern%20industrial%20design%2C%20metallic%20silver%20and%20blue%20colors%2C%20clean%20professional%20environment%2C%20high-tech%20automotive%20equipment%2C%20precise%20engineering%2C%20automated%20parking%20facility&width=600&height=400&seq=puzzle-parking&orientation=landscape',
      features: ['Up to 8 levels', 'Automated retrieval', 'Weather resistant', 'Remote monitoring']
    },
    {
      title: 'Vertical Stack Parking',
      description: 'Compact vertical parking towers with hydraulic lift systems for urban environments',
      image: 'https://readdy.ai/api/search-image?query=Vertical%20stack%20parking%20tower%20with%20hydraulic%20lift%20system%2C%20tall%20metal%20structure%2C%20multiple%20car%20platforms%20stacked%20vertically%2C%20modern%20urban%20setting%2C%20sleek%20design%2C%20blue%20and%20silver%20colors%2C%20professional%20industrial%20environment%2C%20automated%20vehicle%20storage%20system&width=600&height=400&seq=vertical-stack&orientation=landscape',
      features: ['Space efficient', 'Quick access', 'Safety sensors', 'Energy efficient']
    },
    {
      title: 'Underground Parking',
      description: 'Subterranean hydraulic parking systems for maximum land use efficiency',
      image: 'https://readdy.ai/api/search-image?query=Underground%20hydraulic%20parking%20system%20with%20multiple%20levels%20below%20ground%2C%20modern%20concrete%20structure%2C%20hydraulic%20lift%20platforms%2C%20LED%20lighting%2C%20organized%20car%20storage%2C%20professional%20industrial%20design%2C%20clean%20and%20spacious%20environment%2C%20advanced%20engineering&width=600&height=400&seq=underground-parking&orientation=landscape',
      features: ['Underground design', 'Weather protection', 'Security features', 'Maintenance access']
    }
  ];

  return (
    <section id="products-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Parking Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of hydraulic parking systems designed to meet diverse urban parking challenges with innovative engineering and smart automation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }}></div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
