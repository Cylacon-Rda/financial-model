# Quick Reference - Financial Formulas

## Revenue Formulas

### Patient Volume Growth
```
Year N Patients = Patients/Month (Y1) × 12 × (1 + Growth Rate)^(N-1)
```

### Patient Service Revenue
```
Annual Revenue = Total Patients × Service Fee
```

### Commission Revenue
```
Commission per Patient = Service Fee × Commission Rate
Annual Commission = Total Patients × Commission per Patient
```

### Total Revenue
```
Total Revenue = Service Revenue + Commission Revenue
```

## Expense Formulas

### Annual Expenses
```
Annual Marketing = Monthly Marketing × 12
Annual Operating = Monthly Operating × 12
Total Expenses = Marketing + Operating
```

## Profitability Formulas

### EBITDA
```
EBITDA = Total Revenue - Total Expenses
```

### Taxes
```
Taxable Income = MAX(0, EBITDA)
Taxes = Taxable Income × Tax Rate
```

### Net Income
```
Net Income = EBITDA - Taxes
```

## Cash Flow Formulas

### Operating Cash Flow
```
Cash Flow = Net Income
```

### Cash Balance
```
Beginning Cash (Y1) = Startup Capital
Beginning Cash (YN) = Previous Year End Cash
Ending Cash = Beginning Cash + Cash Flow
```

## Balance Sheet Formulas

### Assets
```
Total Assets = Cash Balance
```

### Liabilities
```
Total Liabilities = 0
```

### Equity
```
Equity = Startup Capital + Cumulative Net Income
```

### Balance Check
```
Assets = Liabilities + Equity (Must always be true)
```

## Key Metrics Formulas

### Break-Even Point
```
Monthly Revenue = (Patients/Mo × Service Fee) + (Patients/Mo × Service Fee × Commission Rate)
Monthly Expenses = Marketing + Operating
Monthly Profit = Monthly Revenue - Monthly Expenses
After-Tax Profit = Monthly Profit × (1 - Tax Rate)
Break-Even Months = Startup Capital ÷ After-Tax Profit
```

### Cash Runway
```
Monthly Burn = Monthly Expenses - Monthly Revenue
Runway = Startup Capital ÷ Monthly Burn
```
Note: Only applies when expenses exceed revenue

## Default Values (MedGate Rwanda)

| Parameter | Default Value | Unit |
|-----------|--------------|------|
| Startup Capital | 50,000,000 | RWF |
| Patients/Month Y1 | 10 | patients |
| Growth Rate | 50 | % |
| Service Fee | 500,000 | RWF |
| Commission Rate | 15 | % |
| Monthly Marketing | 2,000,000 | RWF |
| Monthly Operating | 3,000,000 | RWF |
| Tax Rate | 28 | % |

## Example Calculation (Year 1)

**Given:**
- Startup Capital: RWF 50,000,000
- 10 patients/month
- RWF 500,000 service fee
- 15% commission rate

**Calculate:**
1. Annual Patients: 10 × 12 = 120
2. Service Revenue: 120 × 500,000 = RWF 60,000,000
3. Commission/Patient: 500,000 × 0.15 = RWF 75,000
4. Commission Revenue: 120 × 75,000 = RWF 9,000,000
5. Total Revenue: 60M + 9M = RWF 69,000,000

6. Marketing: 2,000,000 × 12 = RWF 24,000,000
7. Operating: 3,000,000 × 12 = RWF 36,000,000
8. Total Expenses: 24M + 36M = RWF 60,000,000

9. EBITDA: 69M - 60M = RWF 9,000,000
10. Taxes: 9M × 0.28 = RWF 2,520,000
11. Net Income: 9M - 2.52M = RWF 6,480,000

12. Ending Cash: 50M + 6.48M = RWF 56,480,000

## Interpretation Guide

### Revenue Growth
- **Good**: 20-50% annual growth
- **Aggressive**: 50-100% growth
- **Unsustainable**: >100% growth

### Profitability Timeline
- **Excellent**: Profitable Year 1
- **Good**: Profitable Year 2
- **Acceptable**: Profitable Year 3
- **Risky**: Not profitable by Year 3

### Cash Runway
- **Comfortable**: 24+ months
- **Adequate**: 18-24 months
- **Tight**: 12-18 months
- **Critical**: <12 months

### Break-Even
- **Fast**: <12 months
- **Normal**: 12-24 months
- **Slow**: 24-36 months
- **Concerning**: >36 months

## Unit Conversions

### RWF to USD (approximate)
- RWF 1,000 ≈ USD 0.77
- RWF 1,000,000 ≈ USD 770
- RWF 10,000,000 ≈ USD 7,700
- RWF 50,000,000 ≈ USD 38,500

Note: Exchange rates fluctuate. Check current rates for accurate conversions.

## Financial Health Indicators

### Gross Margin
```
Gross Margin = (Revenue - Direct Costs) / Revenue
```
For MedGate: Direct costs are minimal (platform model)
Target: >70%

### Operating Margin
```
Operating Margin = EBITDA / Revenue
```
Target: >15% by Year 3

### Cash Burn Rate
```
Burn Rate = (Beginning Cash - Ending Cash) / Months
```
Only relevant if losing money

## Scenario Planning

### Conservative Model
- Lower patient volume (-30%)
- Lower growth rate (25%)
- Higher costs (+20%)

### Aggressive Model
- Higher patient volume (+50%)
- Higher growth rate (75%)
- Lower costs (-10%)

### Realistic Model
- Market-validated patient volume
- Industry-average growth (40%)
- Quoted costs

## Red Flags

Watch out for:
- Cash going negative
- Break-even >36 months
- Growth assumptions >100% annually
- Costs not growing with revenue
- Commission rates >25% (unlikely)
- Service fees not competitive

## Green Flags

Good signs:
- Positive cash throughout
- Break-even <24 months
- Growing margins over time
- Revenue growing faster than costs
- Increasing cash balance
- Realistic assumptions

---

Keep this handy when reviewing or creating financial models!
