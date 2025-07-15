import React from 'react';

const GBFlag = ({ width = 160, height = 96 }) => (
  <svg width={width} height={height} viewBox="0 0 16 9.6" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0.5rem', boxShadow: '0 2px 8px #0004' }}>
    {/* Blue background */}
    <rect width="16" height="9.6" fill="#00247D" />
    {/* White diagonals */}
    <polygon points="0,0 2,0 16,7.6 16,9.6 14,9.6 0,2" fill="#fff" />
    <polygon points="16,0 14,0 0,7.6 0,9.6 2,9.6 16,2" fill="#fff" />
    {/* Red diagonals */}
    <polygon points="0,0 0.8,0 16,8.4 16,9.6 15.2,9.6 0,1.2" fill="#CF142B" />
    <polygon points="16,0 15.2,0 0,8.4 0,9.6 0.8,9.6 16,1.2" fill="#CF142B" />
    {/* White cross */}
    <rect x="6.4" width="3.2" height="9.6" fill="#fff" />
    <rect y="3.2" width="16" height="3.2" fill="#fff" />
    {/* Red cross */}
    <rect x="7.2" width="1.6" height="9.6" fill="#CF142B" />
    <rect y="4" width="16" height="1.6" fill="#CF142B" />
  </svg>
);

export default GBFlag; 