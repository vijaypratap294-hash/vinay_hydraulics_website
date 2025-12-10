'use client';

export default function ProductsCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Parking?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Contact our engineering team to discuss your specific requirements and get a customized solution for your parking needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Get Custom Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}