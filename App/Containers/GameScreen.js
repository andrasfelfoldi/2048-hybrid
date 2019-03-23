import React, { Component } from 'react'
import { View, Image, KeyboardAvoidingView, Text, PanResponder } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from "../Components/RoundedButton";
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/GameScreenStyle'

class GameScreen extends Component {

  state={text: 'asd'};

  componentWillMount = () => {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        let x = gestureState.dx;
        let y = gestureState.dy;
        if (Math.abs(x) > Math.abs(y)) {
          if (x >= 0) {
            this.setState({text: 'right'});
            // this.props.onSwipePerformed('right')
          }
          else {
            this.setState({text: 'left'});
            // this.props.onSwipePerformed('left')
          }
        }
        else {
          if (y >= 0) {
            this.setState({text: 'down'});
            // this.props.onSwipePerformed('down')
          }
          else {
            this.setState({text: 'up'});
            // this.props.onSwipePerformed('up')
          }
        }
      }
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.centered}>
            <View style={styles.gridContainer} {...this.PanResponder.panHandlers}>
              <View style={styles.gridCell}>
                <Text >{this.state.text}</Text>
              </View>
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
