# MedGate Rwanda - Financial Model Documentation

## Overview

This financial modeling application provides a comprehensive 5-year projection for MedGate Rwanda, an AI-powered medical tourism and patient concierge platform operating in Rwanda and East Africa.

## Business Model

MedGate Rwanda operates on a service-based platform model with the following key characteristics:

- **NO hospital commissions**: The platform does not charge hospitals
- **Revenue streams**:
  1. Patient service fees
  2. Accommodation and travel partner commissions
  3. Potential affiliate partnerships

## Financial Logic Explained

### Revenue Calculations

#### 1. Patient Service Revenue
```
Annual Patients = Patients per Month (Year 1) × 12 × Growth Rate^(Year-1)
Patient Service Revenue = Annual Patients × Average Service Fee
```

Example: If you start with 10 patients/month in Year 1 with 50% annual growth:
- Year 1: 10 × 12 = 120 patients
- Year 2: 10 × 12 × 1.5 = 180 patients
- Year 3: 10 × 12 × 1.5² = 270 patients

#### 2. Accommodation/Travel Commission
```
Commission per Patient = Average Service Fee × Commission Rate (%)
Total Commission Revenue = Annual Patients × Commission per Patient
```

Example: With RWF 500,000 service fee and 15% commission rate:
- Commission per patient = 500,000 × 0.15 = RWF 75,000
- If 120 patients/year: 120 × 75,000 = RWF 9,000,000

#### 3. Total Revenue
```
Total Revenue = Patient Service Revenue + Accommodation Commission
```

### Expense Calculations

#### Operating Expenses
```
Annual Marketing Expenses = Monthly Marketing Cost × 12
Annual Operating Expenses = Monthly Operating Cost × 12
Total Expenses = Marketing + Operating Expenses
```

Note: The model assumes consistent monthly costs across all years. You can adjust inputs to reflect planned changes.

### Income Statement

#### EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization)
```
EBITDA = Total Revenue - Total Expenses
```

#### Taxes
```
Taxable Income = Maximum(0, EBITDA)
Taxes = Taxable Income × Corporate Tax Rate
```

Note: Taxes only apply to positive income. Losses do not generate tax credits in this simplified model.

#### Net Income
```
Net Income = EBITDA - Taxes
```

### Cash Flow Statement

#### Operating Cash Flow
```
Cash Flow from Operations = Net Income
```

Note: Since this is a service-based platform with no inventory, receivables, or payables assumptions, operating cash flow equals net income.

#### Cash Balance
```
Beginning Cash (Year 1) = Startup Capital
Beginning Cash (Year N) = Previous Year Ending Cash
Ending Cash = Beginning Cash + Cash Flow from Operations
```

### Balance Sheet

#### Assets
```
Total Assets = Cash and Cash Equivalents
```

Note: This simplified model assumes all value is held in cash. No fixed assets, inventory, or receivables are modeled.

#### Liabilities
```
Total Liabilities = 0
```

Note: The model assumes no debt financing. All operations are equity-funded.

#### Equity
```
Shareholders' Equity = Startup Capital + Cumulative Net Income
```

The accounting equation holds: Assets = Liabilities + Equity

### Key Metrics

#### Break-Even Point
```
Monthly Revenue = (Patients/Month × Service Fee) + (Patients/Month × Commission)
Monthly Expenses = Marketing Cost + Operating Cost
Monthly Net Income = Monthly Revenue - Monthly Expenses
Tax-Adjusted Income = Monthly Net Income × (1 - Tax Rate)

Break-Even Months = Startup Capital ÷ Tax-Adjusted Income
```

This tells you how many months until cumulative profits offset initial investment.

#### Cash Runway
```
Monthly Burn = Monthly Expenses - Monthly Revenue
Cash Runway = Startup Capital ÷ Monthly Burn
```

Only applicable if expenses exceed revenue. Shows how long the startup can operate before running out of cash.

## Accounting Principles Applied

1. **Accrual Accounting**: Revenue recognized when earned, expenses when incurred
2. **Matching Principle**: Expenses matched to the period they relate to
3. **Going Concern**: Assumes business continues operating
4. **Conservatism**: Tax liabilities calculated on positive income only
5. **Balance Sheet Equation**: Assets = Liabilities + Equity (always balanced)

## Key Assumptions

1. **No hospital fees**: Platform charges patients and earns commissions, not hospitals
2. **Consistent growth**: Patient growth rate applies uniformly year-over-year
3. **Fixed costs**: Monthly costs remain constant (adjust inputs to model changes)
4. **No debt**: Business operates on equity financing only
5. **No working capital**: Immediate cash conversion (no receivables/payables delays)
6. **No capex**: Service business with no significant capital expenditure needs
7. **Rwanda base**: Corporate tax rate defaults to Rwanda's 28% rate
8. **Linear scaling**: Commission rate applies uniformly to all patients

## Limitations

This is a simplified financial model designed for:
- Initial planning and investor presentations
- Scenario analysis and sensitivity testing
- Understanding basic financial mechanics
- Grant and incubator applications

It does NOT include:
- Detailed working capital management
- Debt financing options
- Capital expenditure planning
- Foreign exchange considerations
- Seasonal variations
- Detailed cost breakdowns by department
- Multiple revenue scenarios
- Advanced risk modeling

## How to Use This Model

### Step 1: Enter Your Assumptions
Adjust the input fields based on your business plan:
- **Startup Capital**: How much initial investment do you have?
- **Patients per Month (Year 1)**: Realistic starting patient volume
- **Growth Rate**: Conservative estimates (50% is aggressive, 20-30% more typical)
- **Service Fee**: Average revenue per patient transaction
- **Commission Rate**: Expected % from accommodation/travel partners
- **Marketing Cost**: Monthly spend on patient acquisition
- **Operating Cost**: Infrastructure, tools, staff salaries

### Step 2: Review Key Metrics
Check the key metrics card:
- Break-even point shows when you'll recover investment
- Cash runway shows how long funds will last if negative
- Total figures give big-picture view

### Step 3: Analyze Financial Statements
Review each statement:
- **Income Statement**: Is the business profitable? When?
- **Cash Flow**: Will you run out of cash before profitability?
- **Balance Sheet**: Is equity growing? (Good sign)

### Step 4: Test Scenarios
Create different models by adjusting:
- Growth rates (optimistic vs conservative)
- Patient volumes (best case vs worst case)
- Cost structures (lean vs fully-staffed)

### Step 5: Save Your Models
Click "Save Model" to store different scenarios in the database for comparison.

## For Investors and Incubators

This model demonstrates:
1. Clear understanding of revenue model
2. Realistic expense planning
3. Path to profitability
4. Cash requirements and runway
5. Growth trajectory and scalability

The model uses standard accounting principles and can be easily validated by financial professionals.

## Technical Notes

- All currency is in Rwandan Francs (RWF)
- Calculations follow GAAP/IFRS principles
- Data persists in Supabase database
- Automatic recalculation on input changes
- 5-year projection horizon is standard for startups

## Support

For questions about the financial logic or how to use this model effectively, consult with a financial advisor familiar with Rwanda's startup ecosystem and medical tourism industry.
