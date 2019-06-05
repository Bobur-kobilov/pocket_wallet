import React, {Component} from 'react';
import {View, Text, Image} from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from '../assets/styles';

export default class CoinManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <Text style={styles.coin_manage_text}>Bitcoin</Text>
        <Text style={styles.coin_manage_amount}>0 BTC</Text>
        <View style={styles.button_wrapper}>
        <View flexDirection="row">
          <View style={styles.button}>
          <Button
           icon={
            <Icon
              name="arrow-down"
              size={15}
              color="skyblue"
            />
          }
          type = 'outline'
          containerStyle = {styles.button_recieve}
          title="Receive"
          />
          <Button
           icon={
            <Icon
              name="arrow-up"
              size={15}
              color="skyblue"
            />
          }
          type = 'outline'
          containerStyle = {styles.button_send}
          title="Send"
          />
          </View>
          </View>
        </View>
      </View>
    )
  }
}