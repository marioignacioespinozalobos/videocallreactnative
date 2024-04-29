import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import VideoCallScreen from './screens/VideoCallScreen'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VideoCallss" component={VideoCallScreen} />
        </Stack.Navigator>
      </NavigationContainer>        
    </View>
  )  
}

export default App