import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import LocationInfo from './components/LocationInfo';
import Map from './components/Map';

function App() {
  return (
    <div className="min-h-screen bg-wedding bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="min-h-screen bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm flex flex-col items-center px-4 py-10">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <Header />
          <LocationInfo />
          <Countdown />
          <Map />
          
          <footer className="mt-4">
            <p>Nur & Umut | Nişanımızda sizleri görmekten mutluluk duyarız</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;