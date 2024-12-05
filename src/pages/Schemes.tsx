import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { type HealthcareScheme } from '../utils/schemeUtils';

const schemes: HealthcareScheme[] = [
  {
    id: 'scheme1',
    name: 'Universal Health Coverage',
    description: 'Comprehensive healthcare coverage for all citizens',
    eligibilityCriteria: ['Citizen', 'No Other Coverage'],
    benefits: [
      'Free primary healthcare',
      'Subsidized medications',
      'Emergency care coverage',
    ],
    coverageAmount: 100000,
    documents: ['National ID', 'Proof of Address', 'Income Certificate'],
  },
  {
    id: 'scheme2',
    name: 'Senior Care Plus',
    description: 'Enhanced healthcare benefits for senior citizens',
    eligibilityCriteria: ['Age 60+', 'Resident'],
    benefits: [
      'Free health checkups',
      'Prescription coverage',
      'Home healthcare services',
    ],
    coverageAmount: 150000,
    documents: ['Age Proof', 'Residence Certificate'],
  },
  {
    id: 'scheme3',
    name: 'Rural Health Initiative',
    description: 'Special healthcare program for rural communities',
    eligibilityCriteria: ['Rural Resident', 'Below Poverty Line'],
    benefits: [
      'Mobile healthcare units',
      'Free medications',
      'Transportation assistance',
    ],
    coverageAmount: 75000,
    documents: ['Rural Residence Proof', 'Income Certificate', 'Ration Card'],
  },
];

export const SchemesPage = () => {
  const [expandedScheme, setExpandedScheme] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Healthcare Schemes</h1>
          <p className="text-lg text-gray-600">Explore available healthcare policies and benefits</p>
        </div>

        <div className="space-y-6">
          {schemes.map((scheme) => (
            <motion.div
              key={scheme.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={false}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedScheme(
                  expandedScheme === scheme.id ? null : scheme.id
                )}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-6 w-6 text-red-500" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{scheme.name}</h3>
                      <p className="text-sm text-gray-500">{scheme.description}</p>
                    </div>
                  </div>
                  {expandedScheme === scheme.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>

              {expandedScheme === scheme.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-200 p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Eligibility Criteria</h4>
                      <ul className="space-y-2">
                        {scheme.eligibilityCriteria.map((criteria) => (
                          <li key={criteria} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {criteria}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
                      <ul className="space-y-2">
                        {scheme.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="font-medium text-gray-900 mb-2">Required Documents</h4>
                      <ul className="space-y-2">
                        {scheme.documents.map((document) => (
                          <li key={document} className="flex items-center text-sm text-gray-600">
                            <FileText className="h-4 w-4 text-blue-500 mr-2" />
                            {document}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-2">
                      <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};