import React from 'react';

const KoreaFlag = ({ width = 160, height = 96 }) => (
  <svg width={width} height={height} viewBox="0 0 16 9.6" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0.5rem', boxShadow: '0 2px 8px #0004' }}>
    {/* White background */}
    <rect width="16" height="9.6" fill="#fff" />
    {/* Red and blue circle (taegeuk) */}
    <path d="M8 4.8a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0z" fill="#c60c30" transform="translate(2.4,0) scale(1.2)" />
    <path d="M8 4.8a2.4 2.4 0 1 0 4.8 0 2.4 2.4 0 0 0-4.8 0z" fill="#003478" transform="translate(-2.4,0) scale(1.2)" />
    {/* Simple black trigrams (stylized) */}
    {/* Top left */}
    <rect x="1.2" y="1.2" width="0.8" height="2.4" fill="#000" />
    <rect x="2.4" y="1.2" width="0.8" height="2.4" fill="#000" />
    {/* Bottom right */}
    <rect x="14" y="6" width="0.8" height="2.4" fill="#000" />
    <rect x="12.8" y="6" width="0.8" height="2.4" fill="#000" />
  </svg>
);

export default KoreaFlag; 