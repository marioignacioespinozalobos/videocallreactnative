import { View, Text, TextInput, Button } from 'react-native'
import {  useState } from 'react'

const HomeScreen = ({ navigation }) => {
  
  const [ username, setUsername ] = useState("");
    
  return (
    <View>
        <Text>HomeScreen</Text>
        
        <TextInput       
          placeholder="Ingresa tu nombre"
          onChangeText = { text => setUsername(text)}
        />          
        <Button title="LLamar"  
          onPress = {() => {
                    navigation.navigate('VideoCallScreen', { username });
          }}
         />
    </View>
  )  
}


export default HomeScreen