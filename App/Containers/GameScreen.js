import React, { Component } from 'react'
import { View, Image, KeyboardAvoidingView, Text, PanResponder } from 'react-native'
import { connect } from 'react-redux'
import RoundedButton from "../Components/RoundedButton";
import { Images } from '../Themes'
import { moveNumbers } from "../Utils/GridActions";
import { getRandomInt } from "../Utils/RandomGenerator";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/GameScreenStyle'
import NumberCell from '../Components/NumberCell';

class GameScreen extends Component {

  state={numbers: [
    [0, 0, 0, 0],
    [8, 2, 0, 2],
    [0, 0, 0, 0],
    [0, 4, 0, 0],
  ]};

  componentWillMount = () => {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        let x = gestureState.dx;
        let y = gestureState.dy;
        let newNumbers,
            remainingPositions = [];

        if (Math.abs(x) > Math.abs(y)) {
          if (x >= 0) {
            newNumbers = moveNumbers(this.state.numbers, 'right');
          }
          else {
            newNumbers = moveNumbers(this.state.numbers, 'left');
          }
        }
        else {
          if (y >= 0) {
            newNumbers = moveNumbers(this.state.numbers, 'down');
          }
          else {
            newNumbers = moveNumbers(this.state.numbers, 'up');
          }
        }

        newNumbers.forEach((row, i) => {
          row.forEach((num, j) => {
            if(num === 0){
              remainingPositions.push({row: i, col: j});
            }
          });
        });

        addedNumberPosition = remainingPositions[getRandomInt(0, remainingPositions.length)];
        newNumbers[addedNumberPosition.row][addedNumberPosition.col] = 2;
        this.setState({numbers: newNumbers});
      }
    })
  }

  getGridCells = () => {
    let cells = [];

    for(let i=0; i<16; i++){
      cells.push(
        <View key={i} style={styles.gridCell}>
          <NumberCell number={2}/>
        </View>
      );
    }

    return cells;
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <View style={styles.centered}>
            <View style={styles.gridContainer} {...this.PanResponder.panHandlers}>
              {/* {this.getGridCells()} */}
              {this.state.numbers.map((row, i) => 
                row.map((number, j) => 
                  <View key={`${i}${j}`} style={styles.gridCell}>
                    <NumberCell number={number}/>
                  </View>
                )
              )}
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
