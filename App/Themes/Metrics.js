import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height,
      screenHeight = width < height ? height : width,
      section = 25,
      gridContainerWidth = screenWidth - 2 * section,
      gridGutterSize = 2,
      gridCellWidth = gridContainerWidth / 4 - 2 * gridGutterSize;

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: section,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },

  gridContainerWidth: gridContainerWidth,
  gridGutterSize: gridGutterSize,
  gridCellWidth: gridCellWidth,
}

export default metrics
