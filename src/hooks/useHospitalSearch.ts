import { useState, useMemo } from 'react';

export interface Hospital {
  id: number;
  name: string;
  address: string;
  distance: string;
  beds: number;
  waitTime: string;
  phone: string;
}

export const useHospitalSearch = (hospitals: Hospital[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHospitals = useMemo(() => {
    if (!searchQuery.trim()) return hospitals;

    const query = searchQuery.toLowerCase();
    return hospitals.filter(
      hospital =>
        hospital.name.toLowerCase().includes(query) ||
        hospital.address.toLowerCase().includes(query)
    );
  }, [hospitals, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredHospitals,
  };
};