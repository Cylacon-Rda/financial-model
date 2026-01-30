/*
  # Create financial models table

  1. New Tables
    - `financial_models`
      - `id` (uuid, primary key) - Unique identifier for each model
      - `model_name` (text) - Name of the financial model
      - `startup_capital` (numeric) - Initial startup capital in RWF
      - `patients_per_month_y1` (numeric) - Number of patients per month in Year 1
      - `patient_growth_rate` (numeric) - Annual patient growth rate as percentage
      - `avg_service_fee` (numeric) - Average service fee per patient in RWF
      - `accommodation_commission_rate` (numeric) - Commission rate from accommodation/travel partners as percentage
      - `monthly_marketing_cost` (numeric) - Monthly marketing expenses in RWF
      - `monthly_operating_cost` (numeric) - Monthly operating costs in RWF
      - `corporate_tax_rate` (numeric) - Corporate tax rate as percentage (default 28%)
      - `created_at` (timestamptz) - When the model was created
      - `updated_at` (timestamptz) - When the model was last updated

  2. Security
    - Enable RLS on `financial_models` table
    - Add policy to allow all operations for now (public app for MVP)
*/

CREATE TABLE IF NOT EXISTS financial_models (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  model_name text NOT NULL DEFAULT 'MedGate Financial Model',
  startup_capital numeric NOT NULL DEFAULT 50000000,
  patients_per_month_y1 numeric NOT NULL DEFAULT 10,
  patient_growth_rate numeric NOT NULL DEFAULT 50,
  avg_service_fee numeric NOT NULL DEFAULT 500000,
  accommodation_commission_rate numeric NOT NULL DEFAULT 15,
  monthly_marketing_cost numeric NOT NULL DEFAULT 2000000,
  monthly_operating_cost numeric NOT NULL DEFAULT 3000000,
  corporate_tax_rate numeric NOT NULL DEFAULT 28,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE financial_models ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all operations on financial models"
  ON financial_models
  FOR ALL
  USING (true)
  WITH CHECK (true);