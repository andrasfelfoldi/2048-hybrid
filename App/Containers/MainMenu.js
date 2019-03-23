import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'

import { Images } from '../Themes'

// Styles
import styles from './Styles/MainMenuStyles'
import RoundedButton from '../Components/RoundedButton';

export default class MainMenu extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.centered}>
            <RoundedButton onPress={() => this.props.navigation.navigate('GameScreen')}>
                New Game
            </RoundedButton>
        </View>
      </View>
    )
  }
}
