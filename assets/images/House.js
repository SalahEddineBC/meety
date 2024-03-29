import React from "react";
import Svg, { Path } from "react-native-svg";

const House = ({color="#fff",...props}) => (
  <Svg width={20.479} height={19.255} viewBox="0 0 20.479 19.255" {...props}>
    <Path
      d="M17.104 9.435a.581.581 0 0 0-.59.591v8.068h-4.186v-3.295a.583.583 0 0 0-.569-.579H8.733a.6.6 0 0 0-.6.579v3.295H3.957v-7.8a.58.58 0 0 0-1.159 0v8.39a.574.574 0 0 0 .569.57h5.366a.574.574 0 0 0 .569-.57v-3.295h1.867v3.295a.578.578 0 0 0 .59.57h5.345a.574.574 0 0 0 .569-.57v-8.659a.577.577 0 0 0-.569-.59z"
      fill={color}
    />
    <Path
      d="M20.313 9.9l-4.658-4.677V2.029a.59.59 0 0 0-.6-.588.576.576 0 0 0-.569.588v2.019L10.644.183a.564.564 0 0 0-.4-.183.583.583 0 0 0-.419.183L.18 9.831a.553.553 0 0 0 0 .815.553.553 0 0 0 .816 0l9.251-9.229 9.23 9.316a.57.57 0 0 0 .419.151.648.648 0 0 0 .419-.151.609.609 0 0 0-.002-.833z"
      fill={color}
    />
  </Svg>
);

export default House;
