import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import PublicScreen from './public/StackNavigation';
export default createAppContainer(createSwitchNavigator(
  {
    Public: PublicScreen,
  },
  {
    initialRouteName: 'Public',
  }
))