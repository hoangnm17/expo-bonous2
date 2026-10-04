import * as React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function AllAppsIcon({ focused }) {
  return (
    <View style={{ width: 28, height: 28, alignItems: 'center', justifyContent: 'center' }}>
      {focused ? <ActiveIcon /> : <InactiveIcon />}
    </View>
  );
}

// Đang chọn: ví trắng trong vòng tròn xanh
function ActiveIcon() {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28">
      <Circle cx={14} cy={14} r={14} fill="#185ece" />
      <Circle cx={14} cy={14} r={13.5} fill="none" stroke="#fafafa" strokeWidth={1} />
      <Path fill="#fff" d="M13.981,15.82h3.916v0.692h-3.916Z" />
      <Path
        fill="#fff"
        d="M19.694,8.865L8.148,8.865A0.385,0.385 0,0 0,7.763 9.249v9.309a0.385,0.385 0,0 0,0.385 0.385L19.694,18.943a0.385,0.385 0,0 0,0.385 -0.385L20.079,9.249A0.385,0.385 0,0 0,19.694 8.865ZM13.212,17.171L13.212,15.065a0.385,0.385 0,0 1,0.385 -0.385h4.685a0.385,0.385 0,0 1,0.385 0.385v2.106a0.385,0.385 0,0 1,-0.583 0.583L13.597,17.556A0.385,0.385 0,0 1,13.212 17.171Z"
      />
      <Path
        fill="#fff"
        d="M13.771,8.095L13.706,7.731A0.385,0.385 0,0 0,13.332 7.413L8.981,7.413a0.385,0.385 0,0 0,-0.379 0.318l-0.064,0.365Z"
      />
    </Svg>
  );
}

// Chưa chọn: ví xám nhạt
function InactiveIcon() {
  return (
    <Svg width={23} height={23} viewBox="0 0 23 23">
      <Path fill="#8b8b8b" d="M11.4386,14.936h5.932v1.049h-5.932Z" />
      <Path
        fill="#8b8b8b"
        d="M20.0926,4.399L2.6016,4.399A0.583,0.583 0,0 0,2.0186 4.982v14.1a0.583,0.583 0,0 0,0.583 0.583L20.0926,19.665a0.583,0.583 0,0 0,0.583 -0.583v-14.1A0.583,0.583 0,0 0,20.0926 4.399ZM10.2736,16.9819L10.2736,13.791a0.583,0.583 0,0 1,0.583 -0.583h7.1a0.583,0.583 0,0 1,0.583 0.583v3.191a0.583,0.583 0,0 1,-0.583 0.583h-7.1A0.583,0.583 0,0 1,10.2736 16.9819Z"
      />
      <Path
        fill="#8b8b8b"
        d="M11.1196,3.234l-0.1,-0.552A0.583,0.583 0,0 0,10.4486 2.2L3.8636,2.2A0.583,0.583 0,0 0,3.2866 2.681l-0.1,0.552Z"
      />
    </Svg>
  );
}