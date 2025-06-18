import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={8}
      height={12}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.469 4.04L2.839.41a1.188 1.188 0 10-1.68 1.68l3.63 3.63a.396.396 0 010 .56L1.16 9.91a1.188 1.188 0 101.68 1.68l3.63-3.63a2.775 2.775 0 000-3.92z"
        fill={props?.color ? props?.color : '#A1A1AA'}
      />
    </Svg>
  );
}

export default SvgComponent;
