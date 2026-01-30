export interface FinancialInputs {
  startupCapital: number;
  patientsPerMonthY1: number;
  patientGrowthRate: number;
  avgServiceFee: number;
  accommodationCommissionRate: number;
  monthlyMarketingCost: number;
  monthlyOperatingCost: number;
  corporateTaxRate: number;
}

export interface YearlyFinancials {
  year: number;
  patients: number;
  patientServiceRevenue: number;
  accommodationCommission: number;
  totalRevenue: number;
  marketingExpenses: number;
  operatingExpenses: number;
  totalExpenses: number;
  ebitda: number;
  taxes: number;
  netIncome: number;
  cashFlow: number;
  cashBalance: number;
  assets: number;
  liabilities: number;
  equity: number;
}

export interface FinancialResults {
  yearlyData: YearlyFinancials[];
  breakEvenMonth: number;
  cashRunway: number;
}

export function calculateFinancials(inputs: FinancialInputs): FinancialResults {
  const yearlyData: YearlyFinancials[] = [];
  let cumulativeCash = inputs.startupCapital;

  const avgAccommodationRevenue = inputs.avgServiceFee * (inputs.accommodationCommissionRate / 100);

  for (let year = 1; year <= 5; year++) {
    const growthMultiplier = Math.pow(1 + inputs.patientGrowthRate / 100, year - 1);
    const annualPatients = Math.round(inputs.patientsPerMonthY1 * 12 * growthMultiplier);

    const patientServiceRevenue = annualPatients * inputs.avgServiceFee;
    const accommodationCommission = annualPatients * avgAccommodationRevenue;
    const totalRevenue = patientServiceRevenue + accommodationCommission;

    const marketingExpenses = inputs.monthlyMarketingCost * 12;
    const operatingExpenses = inputs.monthlyOperatingCost * 12;
    const totalExpenses = marketingExpenses + operatingExpenses;

    const ebitda = totalRevenue - totalExpenses;

    const taxableIncome = Math.max(0, ebitda);
    const taxes = taxableIncome * (inputs.corporateTaxRate / 100);

    const netIncome = ebitda - taxes;

    const cashFlow = netIncome;
    cumulativeCash += cashFlow;

    const assets = cumulativeCash;
    const liabilities = 0;
    const equity = inputs.startupCapital + yearlyData.reduce((sum, y) => sum + y.netIncome, 0) + netIncome;

    yearlyData.push({
      year,
      patients: annualPatients,
      patientServiceRevenue,
      accommodationCommission,
      totalRevenue,
      marketingExpenses,
      operatingExpenses,
      totalExpenses,
      ebitda,
      taxes,
      netIncome,
      cashFlow,
      cashBalance: cumulativeCash,
      assets,
      liabilities,
      equity,
    });
  }

  const breakEvenMonth = calculateBreakEvenMonth(inputs);
  const cashRunway = calculateCashRunway(inputs);

  return {
    yearlyData,
    breakEvenMonth,
    cashRunway,
  };
}

function calculateBreakEvenMonth(inputs: FinancialInputs): number {
  const monthlyRevenue =
    (inputs.patientsPerMonthY1 * inputs.avgServiceFee) +
    (inputs.patientsPerMonthY1 * inputs.avgServiceFee * inputs.accommodationCommissionRate / 100);

  const monthlyExpenses = inputs.monthlyMarketingCost + inputs.monthlyOperatingCost;

  if (monthlyRevenue <= monthlyExpenses) {
    return -1;
  }

  const monthlyNetIncome = monthlyRevenue - monthlyExpenses;
  const taxAdjustedIncome = monthlyNetIncome * (1 - inputs.corporateTaxRate / 100);

  if (taxAdjustedIncome <= 0) {
    return -1;
  }

  const monthsToBreakEven = Math.ceil(inputs.startupCapital / taxAdjustedIncome);
  return monthsToBreakEven;
}

function calculateCashRunway(inputs: FinancialInputs): number {
  const monthlyRevenue =
    (inputs.patientsPerMonthY1 * inputs.avgServiceFee) +
    (inputs.patientsPerMonthY1 * inputs.avgServiceFee * inputs.accommodationCommissionRate / 100);

  const monthlyExpenses = inputs.monthlyMarketingCost + inputs.monthlyOperatingCost;
  const monthlyBurn = monthlyExpenses - monthlyRevenue;

  if (monthlyBurn <= 0) {
    return -1;
  }

  return Math.floor(inputs.startupCapital / monthlyBurn);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-RW').format(num);
}
