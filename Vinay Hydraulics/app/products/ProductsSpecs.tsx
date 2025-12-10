'use client';

export default function ProductsSpecs() {
  const specifications = [
    {
      category: 'Technical Specifications',
      items: [
        { label: 'Operating Temperature', value: '-20°C to +60°C' },
        { label: 'Hydraulic Pressure', value: '150-300 bar' },
        { label: 'Lifting Speed', value: '0.1-0.5 m/s' },
        { label: 'Safety Factor', value: '3:1 minimum' },
        { label: 'Noise Level', value: '< 60 dB' },
        { label: 'Power Supply', value: '380V/50Hz, 3-phase' }
      ]
    },
    {
      category: 'Safety Features',
      items: [
        { label: 'Emergency Stop', value: 'Multiple locations' },
        { label: 'Overload Protection', value: 'Automatic cutoff' },
        { label: 'Position Sensors', value: 'Proximity & limit switches' },
        { label: 'Backup Power', value: 'UPS system available' },
        { label: 'Fire Safety', value: 'Integrated suppression' },
        { label: 'Access Control', value: 'Card/keypad system' }
      ]
    },
    {
      category: 'Environmental Standards',
      items: [
        { label: 'Weather Resistance', value: 'IP65 rating' },
        { label: 'Corrosion Protection', value: 'Hot-dip galvanized' },
        { label: 'Material Standards', value: 'ISO 9001 certified' },
        { label: 'Environmental Impact', value: 'Low carbon footprint' },
        { label: 'Energy Efficiency', value: 'Class A rating' },
        { label: 'Maintenance', value: 'Scheduled & predictive' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All our hydraulic parking systems are built to the highest engineering standards with comprehensive safety features and environmental compliance.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {spec.category}
              </h3>
              <div className="space-y-4">
                {spec.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="text-gray-900 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}