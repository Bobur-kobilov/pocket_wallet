import React, {Component} from 'react';
import {View,Text,Image,ScrollView,TouchableWithoutFeedback} from 'react-native';
import {styles} from '../assets/styles'
import CardView from 'react-native-cardview';
import ActionButton from 'react-native-action-button';
import LinearGradient from 'react-native-linear-gradient';
import Modal from '../components/modal';
import { Icon } from 'react-native-elements'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  static navigationOptions = {
    header: null
}
  onClick = () => {
    this.modal.openModal()
  }
  navigateToCoinManagement = () =>{
    this.props.navigation.navigate('CoinManagement')
  }
  render () {
    return (
      
    <LinearGradient colors={['#f7f7f7','#f4fbff', '#c9edff', '#f7f7f7']} style={styles.container_home}>
      <View flexDirection="row">
        <View style={{flex:1,alignItems:"flex-end"}}>
        <Icon
          name='user'
          type='feather'
          color='black'
          containerStyle ={styles.user_icon} />
          <Icon
          name='bell'
          type='feather'
          color='black'
          containerStyle ={styles.bell_icon} />
          </View>
        </View>
      <ScrollView>
        <Text style={styles.total_balance}>{`Total Balance`}</Text>
        <Text style={styles.balance}>{`$ 100`}</Text>
        <TouchableWithoutFeedback onPress={this.navigateToCoinManagement}>
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
        </TouchableWithoutFeedback>
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
          <Modal onRef={ref=>(this.modal=ref)}></Modal>
          <ActionButton
          buttonColor="#607df2"
          onPress={() => { this.onClick()}}
          />
        </LinearGradient>

    )
  }
}