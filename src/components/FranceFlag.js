import React from 'react';

const FranceFlag = ({ width = 160, height = 96 }) => (
  <svg width={width} height={height} viewBox="0 0 16 9.6" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0.5rem', boxShadow: '0 2px 8px #0004' }}>
    {/* Blue stripe */}
    <rect x="0" y="0" width="5.33" height="9.6" fill="#0055A4" />
    {/* White stripe */}
    <rect x="5.33" y="0" width="5.33" height="9.6" fill="#fff" />
    {/* Red stripe */}
    <rect x="10.66" y="0" width="5.34" height="9.6" fill="#EF4135" />
  </svg>
);

export default FranceFlag; 