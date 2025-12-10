
'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-stack-line',
      title: 'Space Optimization',
      description: 'Increase parking capacity by up to 200% with our vertical stacking systems'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'Automated Operation',
      description: 'Fully automated hydraulic systems with smart card and mobile app control'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Enhanced Security',
      description: 'Advanced safety features including emergency stops and vehicle detection'
    },
    {
      icon: 'ri-time-line',
      title: 'Quick Access',
      description: 'Retrieve your vehicle in under 2 minutes with our high-speed systems'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Eco-Friendly',
      description: 'Energy-efficient hydraulic systems with minimal environmental impact'
    },
    {
      icon: 'ri-tools-line',
      title: 'Low Maintenance',
      description: 'Durable construction with predictive maintenance and remote monitoring'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Parking Systems?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hydraulic puzzle parking stacks combine innovation, efficiency, and reliability to deliver the ultimate parking solution for modern urban environments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-blue-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
