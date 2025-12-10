
'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Michael Chen',
      position: 'Property Manager',
      company: 'Metropolitan Plaza',
      content: 'The hydraulic puzzle parking system has transformed our building. We now accommodate 180 cars in the space that previously held only 75. The automated system is reliable and our residents love the convenience.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      position: 'Facilities Director',
      company: 'Downtown Medical Center',
      content: 'Installation was seamless and the system has been operating flawlessly for over two years. The space savings and quick retrieval times have significantly improved our parking situation.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      position: 'Urban Planner',
      company: 'City Development Authority',
      content: 'These parking solutions are exactly what our city needs. The environmental benefits and space efficiency make them perfect for our smart city initiatives.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from property managers, developers, and urban planners who have successfully implemented our hydraulic parking solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
