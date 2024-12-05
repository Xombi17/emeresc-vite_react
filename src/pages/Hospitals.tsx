import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Bed, Clock, Phone } from 'lucide-react';
import { useHospitalSearch, type Hospital } from '../hooks/useHospitalSearch';

const hospitals: Hospital[] = [
  {
    id: 1,
    name: 'Central City Hospital',
    address: '123 Healthcare Ave, Medical District',
    distance: '2.5 km',
    beds: 15,
    waitTime: '10 mins',
    phone: '+1 (555) 000-0001',
  },
  {
    id: 2,
    name: "St. Mary's Medical Center",
    address: '456 Wellness Blvd, Uptown',
    distance: '3.8 km',
    beds: 8,
    waitTime: '25 mins',
    phone: '+1 (555) 000-0002',
  },
  {
    id: 3,
    name: 'Metropolitan General',
    address: '789 Emergency Road, Downtown',
    distance: '5.2 km',
    beds: 23,
    waitTime: '15 mins',
    phone: '+1 (555) 000-0003',
  },
  {
    id: 4,
    name: 'Jupiter Hospital',
    address: '789 Emergency Road, Downtown',
    distance: '5.2 km',
    beds: 23,
    waitTime: '15 mins',
    phone: '+1 (555) 000-0003',
  },
];

export const HospitalsPage = () => {
  const { searchQuery, setSearchQuery, filteredHospitals } = useHospitalSearch(hospitals);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Hospitals</h1>
          <p className="text-lg text-gray-600">Locate nearby hospitals and check availability</p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hospitals by name or location"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {filteredHospitals.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <p className="text-gray-500">No hospitals found matching your search criteria.</p>
                </motion.div>
              ) : (
                filteredHospitals.map((hospital) => (
                  <motion.div
                    key={hospital.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-200"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{hospital.name}</h3>
                        <p className="text-gray-500 flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {hospital.address}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">{hospital.distance}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <Bed className="h-5 w-5 mx-auto text-red-500 mb-1" />
                        <span className="block text-sm font-medium">{hospital.beds} beds</span>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <Clock className="h-5 w-5 mx-auto text-red-500 mb-1" />
                        <span className="block text-sm font-medium">{hospital.waitTime}</span>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <Phone className="h-5 w-5 mx-auto text-red-500 mb-1" />
                        <span className="block text-sm font-medium">{hospital.phone}</span>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
                        Get Directions
                      </button>
                      <button className="flex-1 bg-white text-red-500 py-2 px-4 rounded-md border border-red-500 hover:bg-red-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4 sticky top-24">
              <div className="bg-gray-100 h-[calc(100vh-300px)] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};