import React, {Component} from 'react';
import {View, Stylesheet,Text,Image,ScrollView} from 'react-native';
import {styles} from '../assets/styles'
import CardView from 'react-native-cardview';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from '../components/modal';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  onClick = () => {
    this.isOpen = !this.isOpen
    // if (this.isOpen == true)
    this.modal.openModal() // do stuff
    // else {
    //   this.modal.closeModal()
    // }
  }
  render () {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.total_balance}>{`Total Balance`}</Text>
        <Text style={styles.balance}>{`$ 100`}</Text>
        <View flexDirection="row">
          <CardView
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}
            style = {styles.card}
            >
            <View flexDirection="row">
              <View style={{flex:1}}>
                <Image
                style={styles.image}
                source={require('../assets/images/bit_icon.png')}
                />
              </View>
              <View style={{flex:10}}>
                <Text style={styles.coin_full_name}>Bitcoin</Text>
              </View>
            </View>
            <Text style={styles.coin_name}>0.0005 BTC</Text>
            <Text style={styles.coin_name}>40 USD</Text>
          </CardView>
        </View>
        <View flexDirection="row">
          <CardView
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}
            style = {styles.card}
            >
            <View flexDirection="row">
              <View style={{flex:1}}>
                <Image
                style={styles.image}
                source={require('../assets/images/ether_icon.png')}
                />
              </View>
              <View style={{flex:10}}>
              <Text style={styles.coin_full_name}>Ethereum</Text>
              </View>
            </View>
            <Text style={styles.coin_name}>0.34 ETH</Text>
            <Text style={styles.coin_name}>200 USD</Text>
          </CardView>
        </View>
        <View flexDirection="row">
          <CardView
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}
            style = {styles.card}
            >
            <View flexDirection="row">
              <View style={{flex:1}}>
                <Image
                style={styles.image}
                source={require('../assets/images/blue_icon.png')}
                />
              </View>
              <View style={{flex:10}}>
                <Text style={styles.coin_full_name}>Blue Whale</Text>
              </View>
            </View>
            <Text style={styles.coin_name}>400 BWX</Text>
            <Text style={styles.coin_name}>10 USD</Text>
          </CardView>
        </View>
        </ScrollView>
        <View style={styles.fab}>
          <Modal onRef={ref=>(this.modal=ref)}></Modal>
          <ActionButton
          buttonColor="rgba(224,194,60,1)"
          onPress={() => { this.onClick()}}
          />
        </View>
      </View>
    )
  }
}