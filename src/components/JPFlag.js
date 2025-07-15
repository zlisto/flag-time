import React from 'react';

const JPFlag = ({ width = 160, height = 96 }) => (
  <svg width={width} height={height} viewBox="0 0 16 9.6" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0.5rem', boxShadow: '0 2px 8px #0004' }}>
    <rect width="16" height="9.6" fill="#fff" />
    <circle cx="8" cy="4.8" r="2.88" fill="#BC002D" />
  </svg>
);

export default JPFlag; 