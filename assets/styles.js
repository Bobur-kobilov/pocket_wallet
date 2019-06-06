import { StyleSheet } from 'react-native'
import {Dimensions } from "react-native"; 
const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({   
  total_balance: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 75,
  },
  balance: {
    fontSize: 30,
    margin: 15,
    fontWeight: `bold`,
    textAlign: 'center',
  },
  container_home: {
    flex: 1
  },
  image: {
    width: 20,
    height: 20,
    margin: 10,
    justifyContent: 'flex-start'
    
  },
  button: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    top: 110
  },
  button_send: {
    width: 160,
    margin: 5
  }, 
  button_recieve: {
    width: 160,
    margin: 5
  }, 
  coin_name:{
    margin: 7
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    margin: 8,
  },
  card_view: {
    alignItems: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center',
    
  },
  coin_full_name: {
    justifyContent: 'flex-end',
    margin: 10,
  },
   actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  fab: {
    position: 'absolute', left: 0, right: 0, bottom: 70
  },
  user_icon: {
    position: 'absolute',
    top: 30,
    right: 20
  },
  bell_icon: {
    position: 'absolute',
    top: 30,
    right: 60
  },
  coin_manage_text: {
    top: 35,
    fontSize: 15,
    textAlign: 'center',
  },
  coin_manage_amount: {
    top:70,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  list: {
    top: 120,
    margin: 10,
  },
  transaction_text: {
    textAlign: 'center',
    top: 120,
    fontSize: 18,

  }, 
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff',
    margin: 10 
  },
  head: { 
    height: 40,  
  },
  wrapper: { 
    flexDirection: 'row' 
  },
  title: { 
    flex: 1,
   },
  row: {  
    height: 28
    },
  text: { 
    textAlign: 'center',
    fontSize: 10
   },
   wallet_address_text: {
    textAlign: 'center',
    top: 80
   }, 
   qr_code: {
     alignItems: 'center',
     top: 100,
     margin: 10
   },
   clipboard_copy: {
    width: screenWidth/2
   },
   share: {
    width: screenWidth/2,
   }, 
   bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  bottom_button: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    bottom: 0
  },
  list_container: {
    borderBottomColor: '#eaebed',
    borderBottomWidth: 0.3,
    // marginBottom: 30,
  },
  list_transaction_container: {
    borderColor: 'skyblue',
    borderWidth: 0.2,
    margin: 2
  },
  member_text: {
    textAlign: 'center',
    margin: 2,
    color:'#3d3c3c'
  },
  search_bar: {
    backgroundColor:'white',
    borderTopColor:'white',
    borderTopWidth: 0,
    borderBottomColor: '#e3e4e5',
    // borderBottomWidth: 1,
  },
  manual_enter: {
    margin:5,
    borderTopColor: 'white'
  },
  tab_view: {
    color: 'white',
    backgroundColor: 'white'
  }
});
export { styles }