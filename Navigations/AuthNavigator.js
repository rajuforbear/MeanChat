import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../Screens/LoginScreen'
import SignUpScreen from '../Screens/SignUpScreen'
import Icon from "react-native-vector-icons/FontAwesome"
import HomeScreen from '../Screens/HomeScreen'
import BottumTabNavigator from './BottumTabNavigator'
import SPlashScreen from '../Screens/SPlashScreen'
import DoPost from '../Units/DoPost'

  const Stack=createStackNavigator()

const AuthNavigator = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName={"splash"}>
        <Stack.Screen name="splash" component={SPlashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen}
          options={{headerShown:false }}
        />
        <Stack.Screen name="Register" component={SignUpScreen}
         options={({Navigator})=>({
          title:'',
          headerStyle:{
            backgroundColor:"#f9fafd",
            elevation:0
          },
        
         })}
        />
        <Stack.Screen name="Home" component={BottumTabNavigator}
         options={({Navigator})=>({
          title:'',
          headerShown:false,
          headerStyle:{
            backgroundColor:"#f9fafd",
            elevation:0
          },
        
         })}
        />
        <Stack.Screen name="Post" component={DoPost} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigator