import { StyleSheet } from 'react-native'
  
const styles = StyleSheet.create({   
  total_balance: {
    fontSize: 20,
    // backgroundColor: `rgba(255, 255, 255, 1)`,
    textAlign: 'center',
    marginTop: 75,
  },
  balance: {
    fontSize: 30,
    // backgroundColor: `rgba(255, 255, 255, 1)`,
    margin: 15,
    fontWeight: `bold`,
    textAlign: 'center',
  },
  container: {
    flex: 1
    // alignItems: `stretch`,
    // backgroundColor: `rgba(255, 255, 255, 1)`,
    // justifyContent: `flex-end`,
    // flexDirection: `column`,
    // margin: 70,
  },
  image: {
    width: 20,
    height: 20,
    margin: 10,
    justifyContent: 'flex-start'
    
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
    // backgroundColor: `rgba(255, 255, 255, 1)`,
    // textAlign: 'center',
    // display: 'inline-block'
    margin: 10,
    // marginLeft: 40,

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
    top: 50,
    right: 20
    // right: 0,
    // flex: 1,
    // justifyContent: 'flex-end'
  },
  bell_icon: {
    position: 'absolute',
    top: 50,
    right: 60
  }
});
export { styles }