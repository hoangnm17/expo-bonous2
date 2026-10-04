import React from 'react';
import { Svg, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export default function DatingIcon({ size = 30 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48.001 48">
      <Defs>
        {/* gradientUnits="userSpaceOnUse" giữ nguyên —
            tọa độ x1,y1,x2,y2 tính theo hệ viewBox 48x48 */}
        <LinearGradient
          id="dating-grad1"
          gradientUnits="userSpaceOnUse"
          x1={22.5469}
          y1={23.6533}
          x2={49.7615}
          y2={20.8729}
        >
          <Stop offset={0} stopColor="#ffd653" />
          <Stop offset={1} stopColor="#ff6500" />
        </LinearGradient>
        <LinearGradient
          id="dating-grad2"
          gradientUnits="userSpaceOnUse"
          x1={-2.3276}
          y1={19.6656}
          x2={34.0649}
          y2={23.3833}
        >
          <Stop offset={0} stopColor="#5597ff" />
          <Stop offset={1} stopColor="#185ece" />
        </LinearGradient>
      </Defs>

      {/* Nền tròn xanh nhạt */}
      <Path
        d="M48.001,24a24,24 0,1 1,-24 -24A24,24 0,0 1,48.001 24Z"
        fill="#dfe8f5"
      />
      {/* Trái tim cam-vàng (nằm sau) */}
      <Path
        d="M28.1355,33.2853c-4.3358,-6.4973 -5.9759,-11.4741 -6.0069,-15.1051C22.0481,8.4624 33.5061,8.4605 35.5257,14.9939c5.9946,-3.2943 14.2358,4.6656 7.4237,11.5985C40.4103,29.1796 35.7719,31.624 28.1355,33.2853Z"
        fill="url(#dating-grad1)"
      />
      {/* Trái tim xanh (nằm trước, đè lên) */}
      <Path
        d="M25.9207,39.9804C31.7181,31.292 33.9093,24.6333 33.9519,19.7843 34.0649,6.7887 18.7455,6.7862 16.0393,15.5232c-8.0153,-4.4063 -19.034,6.2385 -9.9256,15.5074C9.5132,34.49 15.7149,37.7577 25.9207,39.9804Z"
        fill="url(#dating-grad2)"
      />
    </Svg>
  );
}