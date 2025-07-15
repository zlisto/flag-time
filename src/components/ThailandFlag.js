import React from 'react';

const ThailandFlag = ({ width = 160, height = 96 }) => (
  <svg width={width} height={height} viewBox="0 0 16 9.6" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0.5rem', boxShadow: '0 2px 8px #0004' }}>
    {/* Red stripe (top) */}
    <rect y="0" width="16" height="1.92" fill="#A51931" />
    {/* White stripe */}
    <rect y="1.92" width="16" height="1.28" fill="#fff" />
    {/* Blue stripe (center, double width) */}
    <rect y="3.2" width="16" height="3.2" fill="#2D2A4A" />
    {/* White stripe */}
    <rect y="6.4" width="16" height="1.28" fill="#fff" />
    {/* Red stripe (bottom) */}
    <rect y="7.68" width="16" height="1.92" fill="#A51931" />
  </svg>
);

export default ThailandFlag; 