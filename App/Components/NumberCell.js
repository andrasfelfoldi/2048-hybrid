import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/NumberCellStyle'
import { Colors } from '../Themes/'

export default class NumberCell extends Component {

  state = {};
  colors = {
    2: Colors.frost,
    4: Colors.ricePaper,
    8: Colors.panther,
    16: Colors.silver,
    32: Colors.steel,
    64: Colors.snow,
    128: Colors.frost,
    256: Colors.frost,
    512: Colors.frost,
    1024: Colors.frost,
    2048: Colors.frost,
  }

  render () {

    let backgroundColor = this.props.number ? this.colors[this.props.number] : Colors.fire;
    


    return (
      <View style={{...styles.gridCell, backgroundColor }} >
        {this.props.number > 0 && <Text>{this.props.number}</Text>}
      </View>
    )
  }
}
