import { useState, useEffect } from 'react';
import { Building2, AlertCircle } from 'lucide-react';
import { supabase } from './lib/supabase';
import {
  FinancialInputs,
  calculateFinancials,
  FinancialResults,
} from './lib/financialCalculations';
import InputForm from './components/InputForm';
import KeyMetrics from './components/KeyMetrics';
import IncomeStatement from './components/IncomeStatement';
import CashFlowStatement from './components/CashFlowStatement';
import BalanceSheet from './components/BalanceSheet';
import Charts from './components/Charts';

function App() {
  const [inputs, setInputs] = useState<FinancialInputs>({
    startupCapital: 50000000,
    patientsPerMonthY1: 10,
    patientGrowthRate: 50,
    avgServiceFee: 500000,
    accommodationCommissionRate: 15,
    monthlyMarketingCost: 2000000,
    monthlyOperatingCost: 3000000,
    corporateTaxRate: 28,
  });

  const [results, setResults] = useState<FinancialResults | null>(null);
  const [saveMessage, setSaveMessage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLatestModel();
  }, []);

  useEffect(() => {
    const newResults = calculateFinancials(inputs);
    setResults(newResults);
  }, [inputs]);

  const loadLatestModel = async () => {
    try {
      const { data, error } = await supabase
        .from('financial_models')
        .select('*')
        .order('updated_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setInputs({
          startupCapital: Number(data.startup_capital),
          patientsPerMonthY1: Number(data.patients_per_month_y1),
          patientGrowthRate: Number(data.patient_growth_rate),
          avgServiceFee: Number(data.avg_service_fee),
          accommodationCommissionRate: Number(data.accommodation_commission_rate),
          monthlyMarketingCost: Number(data.monthly_marketing_cost),
          monthlyOperatingCost: Number(data.monthly_operating_cost),
          corporateTaxRate: Number(data.corporate_tax_rate),
        });
      }
    } catch (error) {
      console.error('Error loading model:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const { error } = await supabase.from('financial_models').insert({
        startup_capital: inputs.startupCapital,
        patients_per_month_y1: inputs.patientsPerMonthY1,
        patient_growth_rate: inputs.patientGrowthRate,
        avg_service_fee: inputs.avgServiceFee,
        accommodation_commission_rate: inputs.accommodationCommissionRate,
        monthly_marketing_cost: inputs.monthlyMarketingCost,
        monthly_operating_cost: inputs.monthlyOperatingCost,
        corporate_tax_rate: inputs.corporateTaxRate,
      });

      if (error) throw error;

      setSaveMessage('Model saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      console.error('Error saving model:', error);
      setSaveMessage('Error saving model');
      setTimeout(() => setSaveMessage(''), 3000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  const totalRevenue5Y = results?.yearlyData.reduce((sum, y) => sum + y.totalRevenue, 0) || 0;
  const totalNetIncome5Y = results?.yearlyData.reduce((sum, y) => sum + y.netIncome, 0) || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building2 className="w-10 h-10 text-blue-600 mr-4" />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">MedGate Rwanda</h1>
                <p className="text-gray-600 mt-1">Financial Model & 5-Year Projection</p>
              </div>
            </div>
            {saveMessage && (
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                {saveMessage}
              </div>
            )}
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">About This Model</h3>
          <p className="text-blue-800 text-sm leading-relaxed">
            This financial model projects the next 5 years for MedGate Rwanda, an AI-powered medical tourism platform.
            Revenue comes from patient service fees and accommodation/travel partner commissions. The platform does not
            charge hospitals and operates as a service-based business in Rwanda and East Africa.
          </p>
        </div>

        <InputForm inputs={inputs} onChange={setInputs} onSave={handleSave} />

        {results && (
          <>
            <KeyMetrics
              breakEvenMonth={results.breakEvenMonth}
              cashRunway={results.cashRunway}
              totalRevenue5Y={totalRevenue5Y}
              totalNetIncome5Y={totalNetIncome5Y}
            />

            <Charts yearlyData={results.yearlyData} />

            <IncomeStatement yearlyData={results.yearlyData} />

            <CashFlowStatement
              yearlyData={results.yearlyData}
              startupCapital={inputs.startupCapital}
            />

            <BalanceSheet yearlyData={results.yearlyData} />
          </>
        )}

        <div className="bg-gray-50 rounded-lg p-6 mt-6">
          <h3 className="font-semibold text-gray-900 mb-3">Key Assumptions</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Platform business model with no hospital commission fees</li>
            <li>• Service-based revenue from patient fees and partner commissions</li>
            <li>• Rwanda as base market with regional expansion potential</li>
            <li>• No inventory or manufacturing costs</li>
            <li>• Corporate tax rate follows Rwanda tax regulations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
