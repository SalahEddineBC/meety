import React from "react";
import Svg, { Path } from "react-native-svg";

const Notification = ({color,...props}) => (
  <Svg width={16.046} height={19.255} viewBox="0 0 16.046 19.255" {...props}>
    <Path
      d="M15.989 16.241l-1.378-2.3a6.825 6.825 0 0 1-.972-3.509V8.424a5.616 5.616 0 1 0-11.232 0v2.011a6.825 6.825 0 0 1-.972 3.509l-1.378 2.3a.4.4 0 0 0 .344.607h15.242a.4.4 0 0 0 .344-.607zm-14.879-.2l1.013-1.689a7.62 7.62 0 0 0 1.086-3.922V8.424a4.814 4.814 0 1 1 9.627 0v2.011a7.627 7.627 0 0 0 1.085 3.922l1.016 1.684z"
      fill={color}
    />
    <Path
      d="M8.024 0a1.606 1.606 0 0 0-1.6 1.6v1.6a.4.4 0 0 0 .8 0V1.6a.8.8 0 1 1 1.6 0v1.6a.4.4 0 0 0 .8 0V1.6a1.606 1.606 0 0 0-1.6-1.6zM9.76 16.243a.402.402 0 1 0-.693.406 1.2 1.2 0 1 1-2.084 0 .402.402 0 1 0-.693-.406 2.007 2.007 0 1 0 3.471 0z"
      fill={color}
    />
  </Svg>
);

export default Notification;
