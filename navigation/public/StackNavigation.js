import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../../pages/Home';
import CoinManagementScreen from '../../pages/CoinManagement';
const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  CoinManagement: CoinManagementScreen
},
{
  initialRouteName: "Home"
}
)
export default StackNavigator; 