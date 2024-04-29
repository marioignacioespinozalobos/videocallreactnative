// App.js
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { StyleSheet, View } from 'react-native';
import { yourAppID, yourAppSign, userID, callID } from '../config';

export default function VideoCallScreen({ route, navigation }) {
    
  const { username } = route.params;
 
  return (
        <View style={styles.container}>
          <ZegoUIKitPrebuiltCall
                appID={yourAppID}
                appSign={yourAppSign}
                userID={userID} // userID can be something like a phone number or the user id on your own user system. 
                userName={username}
                callID={callID} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { navigation.navigate('HomeScreen') },
                    onHangUp: () => { navigation.navigate('HomeScreen') },
                }}          
              /> 
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});