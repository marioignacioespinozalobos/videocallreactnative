import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from './screens/HomeScreen'
import  VideoCallScreen  from './screens/VideoCallScreen'


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
      </Stack.Navigator>
    </NavigationContainer>     
  )  
}

export default App