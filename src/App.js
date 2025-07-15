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

function MuteButton({ muted, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: '0.5rem',
        padding: '0.5rem 1.2rem',
        fontSize: '1rem',
        borderRadius: '0.7rem',
        border: 'none',
        background: muted ? '#ffb6e6' : '#222',
        color: muted ? '#222' : '#ffb6e6',
        cursor: 'pointer',
        boxShadow: '0 2px 8px 0 rgba(255,182,230,0.10)',
        transition: 'all 0.2s',
      }}
      aria-label={muted ? 'Unmute music' : 'Mute music'}
    >
      {muted ? 'Unmute Music' : 'Mute Music'}
    </button>
  );
}

function App() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [webhookText, setWebhookText] = useState('');
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  // Play/pause music for Thailand
  useEffect(() => {
    if (selectedCountry.code === 'TH' && !muted) {
      audioRef.current && audioRef.current.play();
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [selectedCountry, muted]);

  // Call webhook when country changes
  useEffect(() => {
    const fetchWebhookText = async () => {
      setWebhookText(''); // Clear previous text while loading
      try {
        // TODO: Replace with your actual webhook URL
        const webhookUrl = 'https://zlisto.app.n8n.cloud/webhook-test/2a8bd082-37fc-42ec-b8f8-25b6baa4e8e9';//test
        //const webhookUrl = 'https://zlisto.app.n8n.cloud/webhook/2a8bd082-37fc-42ec-b8f8-25b6baa4e8e9';  //production
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ country: selectedCountry.name })
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setWebhookText(data.text || '');
      } catch (error) {
        setWebhookText(''); // Optionally show an error message
      }
    };
    fetchWebhookText();
  }, [selectedCountry]);

  // Try to play audio when unmuting
  const handleMuteToggle = () => {
    setMuted(m => {
      const newMuted = !m;
      if (!newMuted && selectedCountry.code === 'TH' && audioRef.current) {
        audioRef.current.play();
      }
      return newMuted;
    });
  };

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
        {/* Mute button for Thailand music */}
        {selectedCountry.code === 'TH' && (
          <MuteButton muted={muted} onClick={handleMuteToggle} />
        )}
        {/* Audio player for Thailand flag */}
        <audio
          ref={audioRef}
          src="/Diplo - Jump Beat.mp3"
          loop
          style={{ display: 'none' }}
          muted={muted}
        />
        {/* Clock component will go here */}
        <div style={{ marginTop: '2rem' }}>
          <Clock timezone={selectedCountry.timezone} />
        </div>
        {/* Webhook text display */}
        {webhookText && (
          <div style={{
            marginTop: '1.5rem',
            fontFamily: 'cursive, sans-serif',
            fontSize: '1.4rem',
            color: '#ffb6e6',
            background: 'rgba(30, 0, 40, 0.7)',
            padding: '1rem 2rem',
            borderRadius: '1rem',
            maxWidth: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            boxShadow: '0 2px 12px 0 rgba(255,182,230,0.15)',
            whiteSpace: 'pre-line',
          }}>
            {webhookText}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
