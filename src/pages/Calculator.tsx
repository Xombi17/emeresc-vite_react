import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Shield, PlusCircle } from 'lucide-react';
import { calculateTotalCost, type InsurancePlan } from '../utils/calculatorUtils';

const treatments = [
  { name: 'General Consultation', basePrice: 100, category: 'Consultation' },
  { name: 'Emergency Care', basePrice: 500, category: 'Emergency' },
  { name: 'Basic Surgery', basePrice: 2500, category: 'Surgery' },
  { name: 'Specialized Surgery', basePrice: 5000, category: 'Surgery' },
];

const insurancePlans: InsurancePlan[] = [
  { name: 'Basic Plan', coverage: 70, deductible: 500 },
  { name: 'Standard Plan', coverage: 80, deductible: 300 },
  { name: 'Premium Plan', coverage: 90, deductible: 100 },
];

export const CalculatorPage = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [selectedInsurance, setSelectedInsurance] = useState<InsurancePlan | null>(null);
  const [additionalCharges, setAdditionalCharges] = useState(0);

  const costs = calculateTotalCost(
    selectedTreatment.basePrice,
    selectedInsurance,
    additionalCharges
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Treatment Cost Calculator</h1>
          <p className="text-lg text-gray-600">Estimate your medical expenses with insurance coverage</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Treatment
              </label>
              <select
                value={selectedTreatment.name}
                onChange={(e) => setSelectedTreatment(
                  treatments.find(t => t.name === e.target.value) || treatments[0]
                )}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
                {treatments.map((treatment) => (
                  <option key={treatment.name} value={treatment.name}>
                    {treatment.name} - ${treatment.basePrice}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Insurance Plan
              </label>
              <select
                value={selectedInsurance?.name || ''}
                onChange={(e) => setSelectedInsurance(
                  insurancePlans.find(p => p.name === e.target.value) || null
                )}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              >
                <option value="">No Insurance</option>
                {insurancePlans.map((plan) => (
                  <option key={plan.name} value={plan.name}>
                    {plan.name} ({plan.coverage}% coverage)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Charges
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  value={additionalCharges}
                  onChange={(e) => setAdditionalCharges(Number(e.target.value))}
                  className="w-full pl-7 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <DollarSign className="h-8 w-8 text-red-500 mb-2" />
              <p className="text-sm text-gray-600">Total Cost</p>
              <p className="text-2xl font-bold">${costs.total}</p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <Shield className="h-8 w-8 text-green-500 mb-2" />
              <p className="text-sm text-gray-600">Insurance Coverage</p>
              <p className="text-2xl font-bold">${costs.covered}</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <Calculator className="h-8 w-8 text-blue-500 mb-2" />
              <p className="text-sm text-gray-600">Out of Pocket</p>
              <p className="text-2xl font-bold">${costs.outOfPocket}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};