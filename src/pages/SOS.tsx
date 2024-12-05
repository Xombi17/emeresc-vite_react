import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Bell, Users } from 'lucide-react';

export const SOSPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency SOS</h1>
          <p className="text-lg text-gray-600">Quick access to emergency services and contacts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-red-500 text-white p-8 rounded-lg shadow-lg text-center"
          >
            <Phone className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Emergency Call</h2>
            <p>Instantly connect with emergency services</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-orange-500 text-white p-8 rounded-lg shadow-lg text-center"
          >
            <Bell className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Alert Contacts</h2>
            <p>Notify your emergency contacts</p>
          </motion.button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-red-500" />
                Your Location
              </h3>
              <div className="bg-gray-100 h-64 rounded-lg"></div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="h-6 w-6 mr-2 text-red-500" />
                Emergency Contacts
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((contact) => (
                  <div key={contact} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">Emergency Contact {contact}</p>
                      <p className="text-sm text-gray-500">+1 (555) 000-000{contact}</p>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                      <Phone className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};