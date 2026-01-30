import { YearlyFinancials, formatCurrency } from '../lib/financialCalculations';
import { BarChart3, TrendingUp } from 'lucide-react';

interface ChartsProps {
  yearlyData: YearlyFinancials[];
}

export default function Charts({ yearlyData }: ChartsProps) {
  const maxRevenue = Math.max(...yearlyData.map(d => d.totalRevenue));
  const maxCash = Math.max(...yearlyData.map(d => d.cashBalance));

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Trends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Revenue Growth</h3>
          </div>
          <div className="space-y-3">
            {yearlyData.map((data) => (
              <div key={data.year}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Year {data.year}</span>
                  <span className="font-medium text-gray-900">{formatCurrency(data.totalRevenue)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-6 rounded-full flex items-center justify-end pr-2 text-white text-xs font-medium transition-all duration-500"
                    style={{ width: `${(data.totalRevenue / maxRevenue) * 100}%` }}
                  >
                    {(data.totalRevenue / maxRevenue) * 100 > 15 && `${Math.round((data.totalRevenue / maxRevenue) * 100)}%`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Cash Balance</h3>
          </div>
          <div className="space-y-3">
            {yearlyData.map((data) => (
              <div key={data.year}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Year {data.year}</span>
                  <span className={`font-medium ${data.cashBalance >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                    {formatCurrency(data.cashBalance)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div
                    className={`${data.cashBalance >= 0 ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-red-500 to-red-600'} h-6 rounded-full flex items-center justify-end pr-2 text-white text-xs font-medium transition-all duration-500`}
                    style={{ width: `${Math.abs(data.cashBalance / maxCash) * 100}%` }}
                  >
                    {(Math.abs(data.cashBalance / maxCash) * 100) > 15 && `${Math.round((Math.abs(data.cashBalance / maxCash) * 100))}%`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
