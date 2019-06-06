import React, {Component } from 'react';
import {View, Text,ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode';
import { styles } from '../assets/styles';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class WalletAddress extends Component {
  constructor(props){
  super(props);
  this.state = {
    text: 'h432432423gdfsvjksdgblikfbglisdgblikfvfdfha432423432'
  }
}


render () {
  return (
    <View style={{flex:1}}>
    <ScrollView>
      <Text style={styles.wallet_address_text}>Wallet Address</Text>
      <View style={styles.qr_code}>
        <QRCode
            value={this.state.text}
            size={200}
            bgColor='navy'
            fgColor='white'/>
      </View>
      <Text style={styles.qr_code}>{this.state.text}</Text>
      </ScrollView>
      <View style={styles.bottom_button}>
      <Button
           icon={
            <Icon
              name="copy"
              size={28}
              color="skyblue"
            />
          }
          type = 'outline'
          containerStyle = {styles.clipboard_copy}
          title="Copy"
          />
          <Button
           icon={
            <Icon
              name="share-alt-square"
              size={28}
              color="skyblue"
            />
          }
          type = 'outline'
          containerStyle = {styles.share}
          title="Share"
          />
      </View>
    </View>
  )
}
}