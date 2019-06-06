import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../../pages/Home';
import CoinManagementScreen from '../../pages/CoinManagement';
import WalletAddressScreen from '../../pages/WalletAddress';
import SendCoinScreen from '../../pages/SendCoin';
const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  CoinManagement: CoinManagementScreen,
  WalletAddress: WalletAddressScreen,
  SendCoin: SendCoinScreen
},
{
  initialRouteName: "Home"
}
)
export default StackNavigator; 