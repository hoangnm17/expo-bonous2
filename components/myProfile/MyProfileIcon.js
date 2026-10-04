import React from 'react';
import { Svg, Path, G } from 'react-native-svg';

export default function MyProfileIcon({ color = '#1e88e5', size = 20 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <G>
        <Path
          d="M16.673,13.202a12.63,12.63 0,0 0,-13.221 0A2.589,2.589 0,0 0,2.273 15.385v3.706L17.857,19.091v-3.706A2.59,2.59 0,0 0,16.673 13.202Z"
          fill={color}
        />
        <Path
          d="M13.279,2.24a4.545,4.545 0,1 1,-6.428 0,4.545 4.545,0 0,1 6.428,0"
          fill={color}
        />
      </G>
    </Svg>
  );
}