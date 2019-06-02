import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../../pages/Home';
const StackNavigator = createStackNavigator({
  Home: HomeScreen
},
{
  initialRouteName: "Home"
}
)
export default StackNavigator; 