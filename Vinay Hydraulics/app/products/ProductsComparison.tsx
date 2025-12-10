'use client';

export default function ProductsComparison() {
  const comparisonData = [
    {
      feature: 'Space Efficiency',
      puzzle: 'Excellent',
      vertical: 'Very Good',
      underground: 'Good',
      rotary: 'Good',
      pit: 'Fair',
      tower: 'Excellent'
    },
    {
      feature: 'Installation Cost',
      puzzle: 'Medium',
      vertical: 'Low',
      underground: 'High',
      rotary: 'Medium',
      pit: 'Low',
      tower: 'High'
    },
    {
      feature: 'Retrieval Speed',
      puzzle: 'Medium',
      vertical: 'Fast',
      underground: 'Slow',
      rotary: 'Very Fast',
      pit: 'Fast',
      tower: 'Slow'
    },
    {
      feature: 'Maintenance',
      puzzle: 'Medium',
      vertical: 'Low',
      underground: 'Medium',
      rotary: 'Low',
      pit: 'Low',
      tower: 'Medium'
    },
    {
      feature: 'Weather Protection',
      puzzle: 'Good',
      vertical: 'Fair',
      underground: 'Excellent',
      rotary: 'Good',
      pit: 'Good',
      tower: 'Fair'
    },
    {
      feature: 'Security Level',
      puzzle: 'High',
      vertical: 'Medium',
      underground: 'Very High',
      rotary: 'Medium',
      pit: 'High',
      tower: 'Medium'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent':
      case 'Very High':
      case 'Very Fast':
        return 'bg-green-100 text-green-800';
      case 'Very Good':
      case 'High':
      case 'Fast':
        return 'bg-blue-100 text-blue-800';
      case 'Good':
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Fair':
      case 'Low':
      case 'Slow':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Product Comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare our different hydraulic parking systems to find the perfect solution for your specific requirements and site conditions.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Puzzle</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Vertical</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Underground</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Rotary</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pit</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Tower</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(row.puzzle)}`}>
                        {row.puzzle}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(row.vertical)}`}>
                        {row.vertical}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(row.underground)}`}>
                        {row.underground}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(row.rotary)}`}>
                        {row.rotary}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(row.pit)}`}>
                        {row.pit}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(row.tower)}`}>
                        {row.tower}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}