import * as React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function GoldIcon({ focused }) {
  return (
    <View style={{ width: 28, height: 28, alignItems: 'center', justifyContent: 'center' }}>
      {focused ? <ActiveIcon /> : <InactiveIcon />}
    </View>
  );
}

// Đang chọn: đĩa trắng viền xanh, cần joystick xanh ở giữa, trên nền tròn xanh
function ActiveIcon() {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28">
      <Circle cx={14} cy={14} r={14} fill="#185ece" />
      <Circle cx={14} cy={14} r={13.5} fill="none" stroke="#fafafa" strokeWidth={1} />
      <Circle cx={14} cy={14} r={8} fill="#fff" />
      <Circle cx={14} cy={14} r={6.4} fill="#fff" />
      <Circle cx={14} cy={14} r={5.9} fill="none" stroke="#185ece" strokeWidth={1} />
      <Path
        fill="#185ece"
        d="M14,11.333A0.8,0.8 0,0 1,14.8 12.133L14.8,15.866A0.8,0.8 0,0 1,14 16.666A0.8,0.8 0,0 1,13.2 15.866L13.2,12.133A0.8,0.8 0,0 1,14 11.333z"
      />
    </Svg>
  );
}

// Chưa chọn: đĩa xám, vòng trắng, cần sáng ở giữa
function InactiveIcon() {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22">
      <Circle cx={11} cy={11} r={11} fill="#969696" />
      <Circle cx={11} cy={11} r={8.8} fill="#969696" />
      <Circle cx={11} cy={11} r={8.3} fill="none" stroke="#fff" strokeWidth={1} />
      <Path
        fill="#fafafa"
        d="M11,7.333A1.1,1.1 0,0 1,12.1 8.433L12.1,13.566A1.1,1.1 0,0 1,11 14.666A1.1,1.1 0,0 1,9.9 13.566L9.9,8.433A1.1,1.1 0,0 1,11 7.333z"
      />
    </Svg>
  );
}