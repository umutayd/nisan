import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import LocationInfo from './components/LocationInfo';
import Map from './components/Map';

function App() {
  return (
    <div className="min-h-screen bg-wedding bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="min-h-screen bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-[2px] 
                    flex flex-col items-center px-4 sm:px-6 py-6 sm:py-10">
        <div className="container mx-auto flex flex-col items-center justify-center max-w-6xl">
          <Header />
          
          <div className="w-full max-w-lg sm:max-w-2xl">
            <LocationInfo />
          </div>
          
          <div className="w-full flex justify-center">
            <Countdown />
          </div>
          
          <div className="w-full max-w-sm sm:max-w-4xl px-2 sm:px-0">
            <Map />
          </div>
          
          <footer className="mt-12 sm:mt-16 text-center px-4 py-6 w-full border-t border-white/10">
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
              Nur & Umut | Nişanımızda sizleri görmekten mutluluk duyarız
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;