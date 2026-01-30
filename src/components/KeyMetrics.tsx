import { TrendingUp, Calendar, DollarSign } from 'lucide-react';
import { formatCurrency } from '../lib/financialCalculations';

interface KeyMetricsProps {
  breakEvenMonth: number;
  cashRunway: number;
  totalRevenue5Y: number;
  totalNetIncome5Y: number;
}

export default function KeyMetrics({ breakEvenMonth, cashRunway, totalRevenue5Y, totalNetIncome5Y }: KeyMetricsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Metrics</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-600">Break-Even Point</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {breakEvenMonth > 0 ? `${breakEvenMonth} months` : 'Not Reached'}
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-sm font-medium text-gray-600">Cash Runway</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {cashRunway > 0 ? `${cashRunway} months` : 'Infinite'}
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <DollarSign className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-sm font-medium text-gray-600">Total Revenue (5Y)</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {formatCurrency(totalRevenue5Y)}
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <DollarSign className="w-5 h-5 text-emerald-600 mr-2" />
            <span className="text-sm font-medium text-gray-600">Total Net Income (5Y)</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {formatCurrency(totalNetIncome5Y)}
          </p>
        </div>
      </div>
    </div>
  );
}
