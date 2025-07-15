import React from 'react';

const BangladeshFlag = ({ width = 160, height = 96 }) => (
  <svg width={width} height={height} viewBox="0 0 16 9.6" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0.5rem', boxShadow: '0 2px 8px #0004' }}>
    {/* Green background */}
    <rect width="16" height="9.6" fill="#006a4e" />
    {/* Red circle */}
    <circle cx="6.4" cy="4.8" r="2.88" fill="#f42a41" />
  </svg>
);

export default BangladeshFlag; 