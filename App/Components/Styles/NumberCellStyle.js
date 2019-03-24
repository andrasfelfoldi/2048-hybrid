import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1
  },

  gridCell: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.fire,
    // marginHorizontal: Metrics.gridGutterSize,
    // marginVertical: Metrics.gridGutterSize,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
