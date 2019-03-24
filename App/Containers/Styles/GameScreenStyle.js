import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles } from '../../Themes/'

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
    width: Metrics.gridContainerWidth,
    height: Metrics.gridContainerWidth,
    // backgroundColor: Colors.panther,
    backgroundColor: 'transparent',
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  gridCell: {
    width: Metrics.gridCellWidth,
    height: Metrics.gridCellWidth,
    backgroundColor: Colors.fire,
    marginHorizontal: Metrics.gridGutterSize,
    marginVertical: Metrics.gridGutterSize,
    borderRadius: 8,
  }
  
})
