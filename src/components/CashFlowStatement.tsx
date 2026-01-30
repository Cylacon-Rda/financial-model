import { YearlyFinancials, formatCurrency } from '../lib/financialCalculations';

interface CashFlowStatementProps {
  yearlyData: YearlyFinancials[];
  startupCapital: number;
}

export default function CashFlowStatement({ yearlyData, startupCapital }: CashFlowStatementProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Cash Flow Statement (5-Year Projection)</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Metric
              </th>
              {yearlyData.map((data) => (
                <th key={data.year} className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year {data.year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Cash from Operations (Net Income)
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className={`px-6 py-4 whitespace-nowrap text-sm text-right ${data.cashFlow >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                  {formatCurrency(data.cashFlow)}
                </td>
              ))}
            </tr>
            <tr className="bg-blue-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                Beginning Cash Balance
              </td>
              {yearlyData.map((data, index) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-right">
                  {formatCurrency(index === 0 ? startupCapital : yearlyData[index - 1].cashBalance)}
                </td>
              ))}
            </tr>
            <tr className="bg-gradient-to-r from-green-100 to-green-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                Ending Cash Balance
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className={`px-6 py-4 whitespace-nowrap text-sm font-bold text-right ${data.cashBalance >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                  {formatCurrency(data.cashBalance)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
