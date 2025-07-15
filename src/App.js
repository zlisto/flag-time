import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Clock from './components/Clock';
import ThailandFlag from './components/ThailandFlag';
import USFlag from './components/USFlag';
import GBFlag from './components/GBFlag';
import JPFlag from './components/JPFlag';
import BRFlag from './components/BRFlag';
import INFlag from './components/INFlag';

const countries = [
  { name: 'United States', code: 'US', flag: '🇺🇸', timezone: 'America/New_York' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', timezone: 'Europe/London' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵', timezone: 'Asia/Tokyo' },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷', timezone: 'America/Sao_Paulo' },
  { name: 'India', code: 'IN', flag: '🇮🇳', timezone: 'Asia/Kolkata' },
  { name: 'Thailand', code: 'TH', flag: '🇹🇭', timezone: 'Asia/Bangkok' },
  // Add more countries as needed
];

function App() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const audioRef = useRef(null);

  useEffect(() => {
    if (selectedCountry.code === 'TH') {
      audioRef.current && audioRef.current.play();
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [selectedCountry]);

  return (
    <div className="App app-black-pink">
      <header className="App-header">
        <h1>Flag Time</h1>
        <select
          value={selectedCountry.code}
          onChange={e => {
            const country = countries.find(c => c.code === e.target.value);
            setSelectedCountry(country);
          }}
        >
          {countries.map(country => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <div style={{ fontSize: '5rem', margin: '1rem', minHeight: '100px' }}>
          {selectedCountry.code === 'TH' && <ThailandFlag width={160} height={96} />}
          {selectedCountry.code === 'US' && <USFlag width={160} height={96} />}
          {selectedCountry.code === 'GB' && <GBFlag width={160} height={96} />}
          {selectedCountry.code === 'JP' && <JPFlag width={160} height={96} />}
          {selectedCountry.code === 'BR' && <BRFlag width={160} height={96} />}
          {selectedCountry.code === 'IN' && <INFlag width={160} height={96} />}
        </div>
        {/* Audio player for Thailand flag */}
        <audio
          ref={audioRef}
          src="/Diplo - Jump Beat.mp3"
          loop
          style={{ display: 'none' }}
        />
        {/* Clock component will go here */}
        <div style={{ marginTop: '2rem' }}>
          <Clock timezone={selectedCountry.timezone} />
        </div>
      </header>
    </div>
  );
}

export default App;
