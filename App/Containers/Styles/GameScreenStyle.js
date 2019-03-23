import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles } from '../../Themes/'

const gridContainerWidth = Metrics.screenWidth - 2 * Metrics.section,
      gridGutterSize = 2,
      gridCellWidth = gridContainerWidth / 4 - 2 * gridGutterSize;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
  },

  gridContainer: {
    width: gridContainerWidth,
    height: gridContainerWidth,
    backgroundColor: Colors.fire,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    borderRadius: 10,
    flexWrap: 'wrap',
  },

  gridCell: {
    width: gridCellWidth,
    height: gridCellWidth,
    backgroundColor: Colors.frost,
    marginHorizontal: gridGutterSize,
    marginVertical: gridGutterSize,
    borderRadius: 8,
  }
  
})
