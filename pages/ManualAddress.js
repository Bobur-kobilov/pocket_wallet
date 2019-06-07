import React, {Component} from 'react';
import {View, Text} from 'react-native';
import QRCodeScanner from '../components/QRCodeScanner'
export default class ManualAddress extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View>
        <QRCodeScanner></QRCodeScanner>
      </View>
    )
  }
}