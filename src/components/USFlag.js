import React from 'react';

const USFlag = ({ width = 160, height = 96 }) => (
  <svg width={width} height={height} viewBox="0 0 16 9.6" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0.5rem', boxShadow: '0 2px 8px #0004' }}>
    {/* 13 stripes */}
    {[...Array(13)].map((_, i) => (
      <rect key={i} y={(9.6 / 13) * i} width="16" height={9.6 / 13} fill={i % 2 === 0 ? '#B22234' : '#fff'} />
    ))}
    {/* Blue canton */}
    <rect x="0" y="0" width="6.4" height={9.6 * 7 / 13} fill="#3C3B6E" />
    {/* Stylized stars */}
    {[...Array(9)].map((_, row) =>
      [...Array(row % 2 === 0 ? 6 : 5)].map((_, col) => (
        <circle
          key={row + '-' + col}
          cx={0.6 + col * 1.05 + (row % 2 === 0 ? 0 : 0.525)}
          cy={0.6 + row * 0.7}
          r="0.15"
          fill="#fff"
        />
      ))
    )}
  </svg>
);

export default USFlag; 