
'use client';

export default function StatsSection() {
  const stats = [
    {
      number: '500+',
      label: 'Installations Worldwide',
      icon: 'ri-global-line'
    },
    {
      number: '200%',
      label: 'Space Efficiency Increase',
      icon: 'ri-stack-line'
    },
    {
      number: '2 Min',
      label: 'Average Retrieval Time',
      icon: 'ri-time-line'
    },
    {
      number: '99.9%',
      label: 'System Reliability',
      icon: 'ri-shield-check-line'
    }
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Proven Performance
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our hydraulic parking systems have been successfully deployed across the globe, delivering exceptional results and customer satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-white text-2xl`}></i>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
