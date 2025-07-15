import React, { useEffect, useState } from 'react';

function getTimeInTimezone(timezone) {
  try {
    return new Date().toLocaleTimeString('en-US', { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  } catch {
    return 'Invalid Timezone';
  }
}

const Clock = ({ timezone }) => {
  const [time, setTime] = useState(getTimeInTimezone(timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeInTimezone(timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div style={{
      color: '#ff69b4',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      background: 'rgba(0,0,0,0.5)',
      borderRadius: '1rem',
      padding: '1rem 2rem',
      boxShadow: '0 2px 16px 0 rgba(255, 20, 147, 0.1)',
      letterSpacing: '2px',
      margin: '0 auto',
      minWidth: '200px',
      textAlign: 'center',
    }}>
      {time}
    </div>
  );
};

export default Clock; 