import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Activity, DollarSign, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Emergency Healthcare</span>
                <span className="block text-red-500">Made Accessible</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Revolutionizing healthcare accessibility with instant emergency response, 
                hospital information, and cost transparency. Your health, our priority.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/sos"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Emergency SOS
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/hospitals"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10 transition-colors"
                  >
                    Find Hospitals
                  </Link>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Link to="/sos">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              >
                <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">SOS System</h3>
                <p className="mt-2 text-gray-500">Instant emergency response and contact notification</p>
              </motion.div>
            </Link>

            <Link to="/hospitals">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              >
                <Activity className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Hospital Directory</h3>
                <p className="mt-2 text-gray-500">Real-time bed availability and treatment options</p>
              </motion.div>
            </Link>

            <Link to="/calculator">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              >
                <DollarSign className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Cost Calculator</h3>
                <p className="mt-2 text-gray-500">Transparent treatment cost estimation</p>
              </motion.div>
            </Link>

            <Link to="/schemes">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              >
                <FileText className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Government Schemes</h3>
                <p className="mt-2 text-gray-500">Healthcare policy information and eligibility</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};