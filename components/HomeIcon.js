import * as React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function HomeIcon({ focused }) {
  return (
    <View style={{ width: 28, height: 28, alignItems: 'center', justifyContent: 'center' }}>
      {focused ? <ActiveIcon /> : <InactiveIcon />}
    </View>
  );
}

// Tab đang mở: ngôi nhà trắng trong vòng tròn xanh
function ActiveIcon() {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28">
      <Circle cx={14} cy={14} r={14} fill="#185ece" />
      <Circle cx={14} cy={14} r={13.5} fill="none" stroke="#fafafa" strokeWidth={1} />
      <Path
        fill="#fff"
        d="M18.876,19.969L9.121,19.969A1.4,1.4 0,0 1,7.727 18.577L7.727,11.416A2.5,2.5 0,0 1,8.466 9.73L13.013,6.412a1.467,1.467 0,0 1,1.974 0L19.533,9.73a2.5,2.5 0,0 1,0.739 1.682v7.161A1.4,1.4 0,0 1,18.876 19.969ZM13.193,12.564a0.5,0.5 0,0 0,-0.5 0.5L12.693,16.42a0.5,0.5 0,0 0,0.5 0.5L14.806,16.92a0.5,0.5 0,0 0,0.5 -0.5L15.306,13.064a0.5,0.5 0,0 0,-0.5 -0.5Z"
      />
    </Svg>
  );
}

// Tab chưa mở: ngôi nhà đen mờ 40%
function InactiveIcon() {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22">
      <Path
        fill="#000"
        fillOpacity={0.4}
        d="M17.705,20.582L4.292,20.582A1.917,1.917 0,0 1,2.375 18.669L2.375,8.822A3.435,3.435 0,0 1,3.391 6.51L9.643,1.942a2.017,2.017 0,0 1,2.714 0l6.251,4.568a3.436,3.436 0,0 1,1.016 2.312v9.847A1.919,1.919 0,0 1,17.705 20.582ZM9.705,10.4a0.5,0.5 0,0 0,-0.5 0.5v4.99a0.5,0.5 0,0 0,0.5 0.5L12.297,16.39a0.5,0.5 0,0 0,0.5 -0.5L12.797,10.901a0.5,0.5 0,0 0,-0.5 -0.5Z"
      />
    </Svg>
  );
}