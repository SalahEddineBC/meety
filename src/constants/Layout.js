import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Constants from 'expo-constants';

export default {
  window: {
    width,
    height,
    statusBar:Constants.statusBarHeight
  },
  isSmallDevice: width < 375,
};
