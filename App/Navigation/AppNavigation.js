import { createStackNavigator, createAppContainer } from 'react-navigation'
import GameScreen from '../Containers/GameScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import MainMenu from '../Containers/MainMenu';

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  GameScreen: { screen: GameScreen },
  LaunchScreen: LaunchScreen,
  MainMenu: MainMenu
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainMenu',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
