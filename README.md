# MedGate Rwanda - Financial Modeling Application

A professional, investor-ready financial modeling tool built specifically for MedGate Rwanda's medical tourism platform.

## What This Application Does

This web application helps you:
- Create 5-year financial projections
- Calculate break-even points and cash runway
- Generate professional income statements, cash flow, and balance sheets
- Visualize revenue growth and cash trends
- Save and compare different financial scenarios

**No spreadsheet skills required.** Just enter your assumptions and get instant professional financial statements.

## Key Features

- **Simple Input Form**: Enter 8 key assumptions to model your entire business
- **Automatic Calculations**: All financial statements update in real-time
- **Professional Output**: Investor-ready reports following standard accounting principles
- **Scenario Planning**: Save multiple models to compare optimistic vs conservative projections
- **Visual Charts**: See revenue growth and cash trends at a glance
- **Database Persistence**: All models saved securely using Supabase

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Supabase account with database configured

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. The application will connect to your Supabase database using environment variables

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open in your browser.

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Documentation

This project includes comprehensive documentation:

1. **USER_GUIDE.md** - How to use the application (non-technical)
2. **FINANCIAL_LOGIC.md** - Detailed explanation of all financial calculations
3. **QUICK_REFERENCE.md** - Formula reference sheet

## Application Structure

### Input Fields (All Editable)

1. **Startup Capital (RWF)** - Initial investment amount
2. **Patients per Month (Year 1)** - Starting patient volume
3. **Annual Patient Growth Rate (%)** - Expected growth
4. **Average Service Fee per Patient (RWF)** - Revenue per patient
5. **Accommodation/Travel Commission Rate (%)** - Partner commission
6. **Monthly Marketing Cost (RWF)** - Marketing expenses
7. **Monthly Operating Costs (RWF)** - Infrastructure, staff, tools
8. **Corporate Tax Rate (%)** - Tax on profits (default 28% for Rwanda)

### Output Sections

1. **Key Metrics**
   - Break-even point
   - Cash runway
   - Total 5-year revenue
   - Total 5-year net income

2. **Financial Trends (Charts)**
   - Revenue growth visualization
   - Cash balance trends

3. **Income Statement**
   - Revenue breakdown (patient fees + commissions)
   - Operating expenses (marketing + operations)
   - EBITDA
   - Taxes
   - Net income

4. **Cash Flow Statement**
   - Operating cash flow
   - Beginning and ending cash balances

5. **Balance Sheet**
   - Assets (cash)
   - Liabilities (none in base model)
   - Equity
   - Balanced accounting equation

## Business Model

MedGate Rwanda operates a **platform-based service model**:

### Revenue Streams
- **Patient service fees**: Direct charges to medical tourists
- **Partner commissions**: Percentage from accommodation and travel bookings
- **Future**: Affiliate partnerships and premium services

### Key Assumptions
- No fees charged to hospitals
- Service-based (no inventory or manufacturing)
- Rwanda-based with regional expansion potential
- Digital platform with low capital requirements

## Financial Principles

The model follows standard accounting practices:

- **Accrual accounting** for revenue and expense recognition
- **Matching principle** for period allocation
- **Conservatism** in assumptions
- **Balance sheet equation**: Assets = Liabilities + Equity
- **Cash flow focus** for startup viability

## Use Cases

### For Founders
- Validate business model viability
- Plan cash requirements
- Set growth targets
- Track actual vs projected performance

### For Investors
- Evaluate business potential
- Assess capital efficiency
- Review assumptions and projections
- Compare scenarios

### For Incubators/Accelerators
- Screen applications
- Mentor financial planning
- Track portfolio company progress
- Prepare for investor meetings

### For Grant Applications
- Demonstrate financial planning
- Show path to sustainability
- Justify funding requirements
- Project social impact (patient reach)

## Database Schema

The application uses a single table:

```sql
financial_models (
  id uuid PRIMARY KEY,
  model_name text,
  startup_capital numeric,
  patients_per_month_y1 numeric,
  patient_growth_rate numeric,
  avg_service_fee numeric,
  accommodation_commission_rate numeric,
  monthly_marketing_cost numeric,
  monthly_operating_cost numeric,
  corporate_tax_rate numeric,
  created_at timestamptz,
  updated_at timestamptz
)
```

## Calculation Engine

Core financial calculations are in `src/lib/financialCalculations.ts`:

- **calculateFinancials()**: Main calculation function
- **calculateBreakEvenMonth()**: Break-even analysis
- **calculateCashRunway()**: Cash runway calculation
- **formatCurrency()**: RWF formatting
- **formatNumber()**: Number formatting

All calculations are pure functions with no side effects.

## Component Architecture

```
src/
├── App.tsx                         # Main application container
├── lib/
│   ├── supabase.ts                # Database client
│   └── financialCalculations.ts   # Core calculation logic
└── components/
    ├── InputForm.tsx              # User input form
    ├── KeyMetrics.tsx             # Top-level metrics cards
    ├── Charts.tsx                 # Revenue and cash trend charts
    ├── IncomeStatement.tsx        # Income statement table
    ├── CashFlowStatement.tsx      # Cash flow table
    └── BalanceSheet.tsx           # Balance sheet table
```

## Customization

### Adjusting Default Values

Edit `src/App.tsx` to change initial values:

```typescript
const [inputs, setInputs] = useState<FinancialInputs>({
  startupCapital: 50000000,        // Change this
  patientsPerMonthY1: 10,          // Change this
  // ... other defaults
});
```

### Adding New Revenue Streams

1. Add input field in `InputForm.tsx`
2. Update calculation in `financialCalculations.ts`
3. Display in `IncomeStatement.tsx`

### Modifying Expense Categories

1. Add expense inputs in `InputForm.tsx`
2. Include in `calculateFinancials()` total expenses
3. Show breakdown in `IncomeStatement.tsx`

## Rwanda Context

### Tax Rate
- Corporate income tax: 28%
- VAT: 18% (not included in this model)

### Market Opportunity
- Growing medical tourism in East Africa
- Rwanda positioning as regional healthcare hub
- Government support for health sector development
- Increasing medical travel from neighboring countries

### Financial Environment
- Currency: Rwandan Franc (RWF)
- Startup-friendly policies
- Active incubator ecosystem
- Growing investor interest in health tech

## Limitations

This is a simplified model. It does NOT include:

- Working capital (receivables, payables, inventory)
- Debt financing or interest
- Depreciation or amortization
- Multiple scenarios in one view
- Detailed cost breakdowns
- Seasonal variations
- Foreign exchange considerations
- Staff hiring plans
- Detailed capex planning

For comprehensive financial planning, consider working with a CFO or financial advisor.

## Future Enhancements

Potential additions:
- Multiple scenario comparison view
- Detailed cost breakdown by category
- Staff hiring and compensation planning
- Debt financing options
- Sensitivity analysis
- Export to PDF/Excel
- Collaborative features
- Historical actuals vs projections
- Dashboard for investors

## Support

For questions or issues:
1. Review the USER_GUIDE.md
2. Check FINANCIAL_LOGIC.md for calculation details
3. Consult QUICK_REFERENCE.md for formulas

## License

Built for MedGate Rwanda and the Rwandan startup ecosystem.

## Contributing

To improve this application:
1. Test with real business scenarios
2. Validate assumptions with market research
3. Get feedback from financial advisors
4. Share with other medical tourism startups

---

**Built for Rwandan entrepreneurs. Designed for investor readiness.**
