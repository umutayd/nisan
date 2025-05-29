import React from 'react';

const LocationInfo: React.FC = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="bg-gray-300 bg-opacity-60 px-8 py-4 rounded-full flex flex-col md:flex-row md:items-center md:gap-6 text-center text-gray-800">
        <div className="text-lg font-medium">14 Temmuz 2025</div>
        <div className="hidden md:block">|</div>
        <div className="text-lg font-medium">Garden Kale Termal Otel, Afyonkarahisar</div>
      </div>
    </div>
  );
};

export default LocationInfo;