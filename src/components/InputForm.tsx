import { FinancialInputs } from '../lib/financialCalculations';

interface InputFormProps {
  inputs: FinancialInputs;
  onChange: (inputs: FinancialInputs) => void;
  onSave: () => void;
}

export default function InputForm({ inputs, onChange, onSave }: InputFormProps) {
  const handleChange = (field: keyof FinancialInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    onChange({ ...inputs, [field]: numValue });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Financial Model Inputs</h2>
        <span className="text-sm text-green-600 font-medium">Editable</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Startup Capital (RWF)
          </label>
          <input
            type="number"
            value={inputs.startupCapital}
            onChange={(e) => handleChange('startupCapital', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Patients per Month (Year 1)
          </label>
          <input
            type="number"
            value={inputs.patientsPerMonthY1}
            onChange={(e) => handleChange('patientsPerMonthY1', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Annual Patient Growth Rate (%)
          </label>
          <input
            type="number"
            value={inputs.patientGrowthRate}
            onChange={(e) => handleChange('patientGrowthRate', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average Service Fee per Patient (RWF)
          </label>
          <input
            type="number"
            value={inputs.avgServiceFee}
            onChange={(e) => handleChange('avgServiceFee', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Accommodation/Travel Commission Rate (%)
          </label>
          <input
            type="number"
            value={inputs.accommodationCommissionRate}
            onChange={(e) => handleChange('accommodationCommissionRate', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Marketing Cost (RWF)
          </label>
          <input
            type="number"
            value={inputs.monthlyMarketingCost}
            onChange={(e) => handleChange('monthlyMarketingCost', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Operating Costs (RWF)
          </label>
          <input
            type="number"
            value={inputs.monthlyOperatingCost}
            onChange={(e) => handleChange('monthlyOperatingCost', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Corporate Tax Rate (%)
          </label>
          <input
            type="number"
            value={inputs.corporateTaxRate}
            onChange={(e) => handleChange('corporateTaxRate', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={onSave}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Save Model
        </button>
      </div>
    </div>
  );
}
