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

  centered: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
  },

  gridContainer: {
    width: gridContainerWidth,
    height: gridContainerWidth,
    // backgroundColor: Colors.panther,
    backgroundColor: 'transparent',
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    borderRadius: 10,
    flexWrap: 'wrap',
  },

  gridCell: {
    width: gridCellWidth,
    height: gridCellWidth,
    backgroundColor: Colors.fire,
    marginHorizontal: gridGutterSize,
    marginVertical: gridGutterSize,
    borderRadius: 8,
  }
  
})
