import { YearlyFinancials, formatCurrency } from '../lib/financialCalculations';

interface BalanceSheetProps {
  yearlyData: YearlyFinancials[];
}

export default function BalanceSheet({ yearlyData }: BalanceSheetProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Balance Sheet (5-Year Projection)</h2>

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
            <tr className="bg-blue-50 font-semibold">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ASSETS
              </td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 pl-12">
                Cash and Cash Equivalents
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {formatCurrency(data.cashBalance)}
                </td>
              ))}
            </tr>
            <tr className="bg-blue-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                Total Assets
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 text-right">
                  {formatCurrency(data.assets)}
                </td>
              ))}
            </tr>
            <tr className="bg-red-50 font-semibold">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                LIABILITIES
              </td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 pl-12">
                Current Liabilities
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {formatCurrency(data.liabilities)}
                </td>
              ))}
            </tr>
            <tr className="bg-red-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                Total Liabilities
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 text-right">
                  {formatCurrency(data.liabilities)}
                </td>
              ))}
            </tr>
            <tr className="bg-green-50 font-semibold">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                EQUITY
              </td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 pl-12">
                Shareholders' Equity
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {formatCurrency(data.equity)}
                </td>
              ))}
            </tr>
            <tr className="bg-green-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                Total Equity
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 text-right">
                  {formatCurrency(data.equity)}
                </td>
              ))}
            </tr>
            <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                Total Liabilities + Equity
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 text-right">
                  {formatCurrency(data.liabilities + data.equity)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
