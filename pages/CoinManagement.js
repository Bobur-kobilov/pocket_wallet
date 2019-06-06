import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native'
import { Button,ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../assets/styles';


export default class CoinManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      tableHead: ['No', 'Coin', 'TXID', 'Date'],
      tableTitle: ['1', '2', '3', '4','5'],
      tableData: [
        ['BTC', '32fbsdkbf3', '2019-05-05'],
        ['BTC', '32fbsdkbf3', '2019-05-05'],
        ['BTC', '32fbsdkbf3', '2019-05-05'],
        ['BTC', '32fbsdkbf3', '2019-05-05'],
        ['BTC', '32fbsdkbf3', '2019-05-05'],
      ]
    }
  }
  static navigationOptions = {
    header: null
  }
  componentWillMount() {
    const list = [
      {
        name: 'Bitcoin',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '50 USD',
        transaction: 'Sent',
        coinAmount: '100'
      },
      {
        name: 'Ethereum',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '200 USD',
        transaction: 'Received',
        coinAmount: '43.4340'
      },
      {
        name: 'Ripple',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '5 USD',
        transaction: 'Sent',
        coinAmount: '40000'
      },
      {
        name: 'Synco',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '500 USD',
        transaction: 'Received',
        coinAmount: '1345323210'
      },
      {
        name: 'Blue Whale',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '240 USD',
        transaction: 'Sent',
        coinAmount: '3532'
      },
      {
        name: 'Alpcon',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '200 USD',
        transaction: 'Received',
        coinAmount: '523'
      },
    ]
    this.setState({
      list:list
    })
  }
   navigateToWalletAddress = () =>{
     this.props.navigation.navigate('WalletAddress')
   }
   navigateToSendCoin = () =>{
     this.props.navigation.navigate('SendCoin')
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
          onPress = {this.navigateToWalletAddress}
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
            onPress = {this.navigateToSendCoin}
          />
          </View>
          </View>
        </View>
        <Text style={styles.transaction_text}>Transactions</Text>
        <ScrollView style={styles.list}>
        {
          this.state.list.map((l, i) => (
          <ListItem
            key={i}
            // leftAvatar={{ icon: { name: 'bitcoin', type: 'font-awesome', color:'yellow' } }}
            title={l.name}
            subtitle={l.transaction}
            rightSubtitle = {l.subtitle}
            rightTitle = {l.coinAmount}
            titleStyle={{ color: '#3d3c3c' }}
            subtitleStyle={{ color: '#3d3c3c' }}
            rightTitleStyle={{ color: '#3d3c3c' }}
            containerStyle = {styles.list_transaction_container}
          />
        ))
        }
        </ScrollView>
      </View>
    )
  }
}