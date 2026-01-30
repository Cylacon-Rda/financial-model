import { YearlyFinancials, formatCurrency, formatNumber } from '../lib/financialCalculations';

interface IncomeStatementProps {
  yearlyData: YearlyFinancials[];
}

export default function IncomeStatement({ yearlyData }: IncomeStatementProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Income Statement (5-Year Projection)</h2>

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
            <tr className="bg-blue-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Total Patients
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {formatNumber(data.patients)}
                </td>
              ))}
            </tr>
            <tr className="bg-green-50 font-semibold">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Revenue
              </td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 pl-12">
                Patient Service Fees
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {formatCurrency(data.patientServiceRevenue)}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 pl-12">
                Accommodation/Travel Commission
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {formatCurrency(data.accommodationCommission)}
                </td>
              ))}
            </tr>
            <tr className="bg-green-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                Total Revenue
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-right">
                  {formatCurrency(data.totalRevenue)}
                </td>
              ))}
            </tr>
            <tr className="bg-red-50 font-semibold">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Operating Expenses
              </td>
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 pl-12">
                Marketing Expenses
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {formatCurrency(data.marketingExpenses)}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 pl-12">
                Operating Costs
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {formatCurrency(data.operatingExpenses)}
                </td>
              ))}
            </tr>
            <tr className="bg-red-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                Total Expenses
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-right">
                  {formatCurrency(data.totalExpenses)}
                </td>
              ))}
            </tr>
            <tr className="bg-amber-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                EBITDA
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className={`px-6 py-4 whitespace-nowrap text-sm font-bold text-right ${data.ebitda >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                  {formatCurrency(data.ebitda)}
                </td>
              ))}
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                Corporate Tax
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                  {formatCurrency(data.taxes)}
                </td>
              ))}
            </tr>
            <tr className="bg-gradient-to-r from-emerald-100 to-emerald-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                Net Income
              </td>
              {yearlyData.map((data) => (
                <td key={data.year} className={`px-6 py-4 whitespace-nowrap text-sm font-bold text-right ${data.netIncome >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                  {formatCurrency(data.netIncome)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
