import { StyleSheet } from 'react-native'
  
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
  container: {
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
    width: 120
  }, 
  button_recieve: {
    width: 120
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
  }
});
export { styles }