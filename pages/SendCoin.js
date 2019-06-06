import * as React from 'react';
import { View, StyleSheet, Dimensions,TouchableWithoutFeedback } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import ContactList from '../components/Contacts';
// import styles from '../assets/styles'
const FirstRoute = () => (
  <ContactList></ContactList>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);


export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Contacts' },
      { key: 'second', title: 'Address' },
    ],
  };
//   static navigationOptions = {
//     header: null
// }
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: 'skyblue',color:'black' }}
            // fontStyle= {{color:'black'}}
          />
        }
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style = {styles.tab_view}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});