import { View, Text,ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import Auth from "@react-native-firebase/auth"
import { useNavigation,StackActions } from '@react-navigation/native'
const SPlashScreen = () => {

    const Navigation=useNavigation()

    useEffect(()=>{
        setTimeout(async () => {
            const unsubcibe = await Auth().onAuthStateChanged((user) => {
              const isUser = user !== null ? "Home" : "Login"   
              Navigation.dispatch(StackActions.replace(isUser))
            })
            unsubcibe
          }, 3000);
    })

  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <ActivityIndicator  size={'large'} color={"skyblue"}/>
      <Text style={{textAlign:"center",marginVertical:5,marginLeft:5,color:"skyblue",fontWeight:"bold"}}>Loding......</Text>
    </View>
  )
}

export default SPlashScreen