import React, {Component} from 'react';
import {View, Text,Platform,TouchableOpacity} from 'react-native';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';
import { ListItem,SearchBar } from 'react-native-elements';
import { styles } from '../assets/styles';
import { ScrollView } from 'react-native-gesture-handler';
import PhonePicker from '../components/PhonePicker'
export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      search: '',
      valid: "",
      type: "",
      value: ""
    }
  }
  updateSearch = search => {
    this.setState({ search });
  };
  onPressFlag(){
    this.myCountryPicker.open()
  }
  getContactList = () =>{
    if (Platform.OS == 'ios') {
    Contacts.getAll((err, contacts) => {
      if (err) {
        throw err;
      }
      this.setState({contacts:contacts})
     console.log(contacts)
    })
  } else {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.'
      }
    ).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied'){
          // error
        } else {
          // contacts returned in Array
        }
      })
    })
  }
  }
  componentWillMount() {
  console.log("HI!!!")
   this.getContactList()

  }
  render() {
    const { search } = this.state;
    return (
      <View>
      <SearchBar
      containerStyle = {styles.search_bar}
      inputContainerStyle = {styles.search_bar}
      placeholder="Name / Phone"
      onChangeText={this.updateSearch}
      value={search}
      />
      <PhonePicker></PhonePicker>
       
      <ScrollView>
        <Text style={styles.member_text}>Members 7</Text>
        {
          this.state.contacts.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ icon: { name: 'user', type: 'font-awesome' } }}
            title={l.givenName + ' ' + l.familyName}
            subtitle={l.phoneNumbers[0].number}
            titleStyle={{ color: '#3d3c3c' }}
            subtitleStyle={{ color: '#3d3c3c' }}
            containerStyle = {styles.list_container}
          />
        ))
        }
        <Text style={styles.member_text}>Non-members 7</Text>
        {
          this.state.contacts.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ icon: { name: 'user', type: 'font-awesome' } }}
            title={l.givenName + ' ' + l.familyName}
            subtitle={l.phoneNumbers[0].number}
            titleStyle={{ color: '#3d3c3c' }}
            subtitleStyle={{ color: '#3d3c3c' }}
            containerStyle = {styles.list_container}
          />
        ))
        }
      </ScrollView>
    </View>
    )
  }
}