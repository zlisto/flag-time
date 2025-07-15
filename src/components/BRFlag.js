import React from 'react';

const BRFlag = ({ width = 160, height = 96 }) => (
  <svg width={width} height={height} viewBox="0 0 16 9.6" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0.5rem', boxShadow: '0 2px 8px #0004' }}>
    <rect width="16" height="9.6" fill="#009B3A" />
    <polygon points="8,1.2 15,4.8 8,8.4 1,4.8" fill="#FFDF00" />
    <circle cx="8" cy="4.8" r="2.2" fill="#3E4095" />
    <ellipse cx="8" cy="4.8" rx="2.2" ry="0.4" fill="#fff" transform="rotate(-15 8 4.8)" />
  </svg>
);

export default BRFlag; 