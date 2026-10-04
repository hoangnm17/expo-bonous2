import * as React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function ProfileIcon({ focused }) {
  return (
    <View style={{ width: 28, height: 28, alignItems: 'center', justifyContent: 'center' }}>
      {focused ? <ActiveIcon /> : <InactiveIcon />}
    </View>
  );
}

// Tab đang mở: người trắng trong vòng tròn xanh
function ActiveIcon() {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28">
      <Circle cx={14} cy={14} r={14} fill="#185ece" />
      <Circle cx={14} cy={14} r={13.5} fill="none" stroke="#fafafa" strokeWidth={1} />
      <Path
        fill="#fff"
        d="M19.005,15.902a9.472,9.472 0,0 0,-9.916 0A1.942,1.942 0,0 0,8.205 17.539L8.205,20.32L19.893,20.32v-2.779A1.942,1.942 0,0 0,19.005 15.902Z"
      />
      <Path
        fill="#fff"
        d="M16.459,7.681a3.409,3.409 0,1 1,-4.821 0,3.409 3.409,0 0,1 4.821,0"
      />
    </Svg>
  );
}

// Tab chưa mở: người đen mờ 40%
function InactiveIcon() {
  return (
    <Svg width={19} height={19} viewBox="0 0 19 19">
      <Path
        fill="#000"
        fillOpacity={0.4}
        d="M15.842,12.543a12,12 0,0 0,-12.56 0A2.459,2.459 0,0 0,2.159 14.617v3.521L16.964,18.138L16.964,14.617A2.46,2.46 0,0 0,15.842 12.543Z"
      />
      <Path
        fill="#000"
        fillOpacity={0.4}
        d="M12.615,2.129a4.318,4.318 0,1 1,-6.107 0,4.318 4.318,0 0,1 6.107,0"
      />
    </Svg>
  );
}