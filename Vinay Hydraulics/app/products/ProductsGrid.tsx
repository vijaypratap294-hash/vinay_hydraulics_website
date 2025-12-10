'use client';

export default function ProductsGrid() {
  const products = [
    {
      title: 'Hydraulic Puzzle Parking',
      subtitle: 'Multi-Level Automated System',
      description: 'Advanced multi-level hydraulic system with sliding and lifting mechanisms designed for maximum space utilization in urban environments.',
      image: 'https://readdy.ai/api/search-image?query=Advanced%20hydraulic%20puzzle%20parking%20system%20with%20multiple%20car%20platforms%20arranged%20in%20grid%20pattern%2C%20sliding%20mechanisms%2C%20lifting%20platforms%2C%20modern%20industrial%20design%2C%20metallic%20silver%20and%20blue%20colors%2C%20clean%20professional%20environment%2C%20high-tech%20automotive%20equipment%2C%20precise%20engineering%2C%20automated%20parking%20facility%20with%20control%20systems&width=800&height=600&seq=puzzle-detail&orientation=landscape',
      features: ['Up to 8 levels capacity', 'Automated retrieval system', 'Weather resistant coating', 'Remote monitoring capability', 'Emergency backup power', 'Safety sensor integration'],
      capacity: '16-64 vehicles',
      retrievalTime: '60-90 seconds',
      powerConsumption: '15-25 kW',
      dimensions: '12m x 8m x 24m'
    },
    {
      title: 'Vertical Stack Parking',
      subtitle: 'Compact Tower Solution',
      description: 'Space-efficient vertical parking towers with hydraulic lift systems, perfect for dense urban areas with limited ground space.',
      image: 'https://readdy.ai/api/search-image?query=Vertical%20stack%20parking%20tower%20with%20hydraulic%20lift%20system%2C%20tall%20metal%20structure%20with%20multiple%20car%20platforms%20stacked%20vertically%2C%20modern%20urban%20setting%2C%20sleek%20design%2C%20blue%20and%20silver%20colors%2C%20professional%20industrial%20environment%2C%20automated%20vehicle%20storage%20system%20with%20control%20panel&width=800&height=600&seq=vertical-detail&orientation=landscape',
      features: ['Space efficient design', 'Quick access technology', 'Advanced safety sensors', 'Energy efficient motors', 'Modular construction', 'Weather protection'],
      capacity: '8-20 vehicles',
      retrievalTime: '45-60 seconds',
      powerConsumption: '8-12 kW',
      dimensions: '6m x 6m x 15m'
    },
    {
      title: 'Underground Parking',
      subtitle: 'Subterranean Storage System',
      description: 'Innovative underground hydraulic parking systems that maximize land use efficiency while providing secure vehicle storage.',
      image: 'https://readdy.ai/api/search-image?query=Underground%20hydraulic%20parking%20system%20with%20multiple%20levels%20below%20ground%2C%20modern%20concrete%20structure%2C%20hydraulic%20lift%20platforms%2C%20LED%20lighting%20system%2C%20organized%20car%20storage%2C%20professional%20industrial%20design%2C%20clean%20and%20spacious%20environment%2C%20advanced%20engineering%20with%20control%20systems&width=800&height=600&seq=underground-detail&orientation=landscape',
      features: ['Underground design', 'Complete weather protection', 'Enhanced security features', 'Easy maintenance access', 'Flood protection system', 'Fire safety integration'],
      capacity: '20-100 vehicles',
      retrievalTime: '90-120 seconds',
      powerConsumption: '20-35 kW',
      dimensions: '20m x 15m x 12m'
    },
    {
      title: 'Rotary Parking System',
      subtitle: 'Circular Automated Solution',
      description: 'Innovative rotary parking system that rotates vehicles on a circular platform, optimizing space in compact areas.',
      image: 'https://readdy.ai/api/search-image?query=Rotary%20parking%20system%20with%20circular%20platform%2C%20cars%20arranged%20in%20circle%2C%20rotating%20mechanism%2C%20hydraulic%20support%20structure%2C%20modern%20industrial%20design%2C%20metallic%20finish%2C%20professional%20environment%2C%20automated%20vehicle%20positioning%20system%2C%20control%20panel%20interface&width=800&height=600&seq=rotary-detail&orientation=landscape',
      features: ['Circular rotation system', 'Compact footprint', 'Automated positioning', 'Low maintenance design', 'Quiet operation', 'User-friendly interface'],
      capacity: '8-16 vehicles',
      retrievalTime: '30-45 seconds',
      powerConsumption: '5-10 kW',
      dimensions: '8m x 8m x 4m'
    },
    {
      title: 'Pit Parking System',
      subtitle: 'Ground-Level Solution',
      description: 'Ground-level pit parking system with hydraulic lifts that lower vehicles below surface level for efficient space utilization.',
      image: 'https://readdy.ai/api/search-image?query=Pit%20parking%20system%20with%20hydraulic%20platform%20at%20ground%20level%2C%20cars%20being%20lowered%20into%20underground%20pit%2C%20modern%20concrete%20structure%2C%20hydraulic%20lift%20mechanism%2C%20professional%20industrial%20environment%2C%20safety%20barriers%2C%20control%20system%2C%20clean%20organized%20layout&width=800&height=600&seq=pit-detail&orientation=landscape',
      features: ['Ground level access', 'Hydraulic pit design', 'Waterproof construction', 'Safety barrier system', 'Emergency evacuation', 'Remote operation'],
      capacity: '4-12 vehicles',
      retrievalTime: '40-60 seconds',
      powerConsumption: '6-15 kW',
      dimensions: '10m x 6m x 3m'
    },
    {
      title: 'Tower Parking System',
      subtitle: 'High-Rise Solution',
      description: 'High-capacity tower parking system with multiple levels and advanced hydraulic technology for maximum vehicle storage.',
      image: 'https://readdy.ai/api/search-image?query=Tower%20parking%20system%20with%20tall%20structure%2C%20multiple%20levels%20of%20car%20platforms%2C%20hydraulic%20lift%20system%2C%20modern%20steel%20construction%2C%20blue%20and%20silver%20colors%2C%20professional%20industrial%20environment%2C%20automated%20vehicle%20handling%2C%20control%20systems%2C%20urban%20setting&width=800&height=600&seq=tower-detail&orientation=landscape',
      features: ['High capacity storage', 'Multi-level design', 'Fast retrieval system', 'Structural stability', 'Weather resistance', 'Smart control system'],
      capacity: '50-200 vehicles',
      retrievalTime: '120-180 seconds',
      powerConsumption: '25-50 kW',
      dimensions: '15m x 15m x 40m'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of hydraulic parking systems, each designed to solve specific urban parking challenges with innovative engineering and smart automation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-80 bg-cover bg-center bg-top" style={{ backgroundImage: `url('${product.image}')` }}></div>
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {product.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Capacity</p>
                    <p className="font-semibold text-gray-900">{product.capacity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Retrieval Time</p>
                    <p className="font-semibold text-gray-900">{product.retrievalTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Power</p>
                    <p className="font-semibold text-gray-900">{product.powerConsumption}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Dimensions</p>
                    <p className="font-semibold text-gray-900">{product.dimensions}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <i className="ri-check-line text-white text-xs"></i>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                    Get Quote
                  </button>
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}