import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mt-16 rounded-xl overflow-hidden shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-300">
      <iframe
        title="Nişan Lokasyonu"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Garden+Kale+Termal+Otel,Hürriyet,+İzmir+Yolu+6.Km,+03140+Erkmen/Afyonkarahisar+Merkez/Afyonkarahisar&center=38.783533,30.473955"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      ></iframe>
    </div>
  );
};

export default Map;