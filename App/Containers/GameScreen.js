import React, { Component } from 'react'
import { View, Image, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from "../Components/RoundedButton";
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/GameScreenStyle'

class GameScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.centered}>
            <View style={styles.gridContainer}>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              <View style={styles.gridCell}></View>
              

            </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)
