import React from "react";
import Svg, { Path } from "react-native-svg";

const Add = ({color,...props}) => (
  <Svg width={19.73} height={19.73} viewBox="0 0 19.73 19.73" {...props}>
    <Path
      d="M9.865 19.73a2.68 2.68 0 0 1-2.69-2.664v-4.511H2.664a2.691 2.691 0 0 1 0-5.381h4.511v-4.51a2.691 2.691 0 0 1 5.381 0v4.511h4.511a2.691 2.691 0 0 1 0 5.381h-4.512v4.511a2.68 2.68 0 0 1-2.69 2.663zM2.664 8.071a1.794 1.794 0 0 0 0 3.587h5.407v5.407a1.794 1.794 0 0 0 3.587 0v-5.406h5.407a1.794 1.794 0 0 0 0-3.587h-5.406V2.664a1.794 1.794 0 0 0-3.587 0v5.407z"
      fill={color}
    />
  </Svg>
);

export default Add;
