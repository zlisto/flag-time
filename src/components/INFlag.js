import React from 'react';

const INFlag = ({ width = 160, height = 96 }) => (
  <svg width={width} height={height} viewBox="0 0 16 9.6" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0.5rem', boxShadow: '0 2px 8px #0004' }}>
    {/* Orange stripe */}
    <rect y="0" width="16" height="3.2" fill="#FF9933" />
    {/* White stripe */}
    <rect y="3.2" width="16" height="3.2" fill="#fff" />
    {/* Green stripe */}
    <rect y="6.4" width="16" height="3.2" fill="#138808" />
    {/* Blue Ashoka Chakra (stylized) */}
    <circle cx="8" cy="4.8" r="1.1" fill="none" stroke="#054187" strokeWidth="0.25" />
    {[...Array(24)].map((_, i) => (
      <line
        key={i}
        x1="8"
        y1="4.8"
        x2={8 + 1.1 * Math.cos((i * 2 * Math.PI) / 24)}
        y2={4.8 + 1.1 * Math.sin((i * 2 * Math.PI) / 24)}
        stroke="#054187"
        strokeWidth="0.05"
      />
    ))}
  </svg>
);

export default INFlag; 