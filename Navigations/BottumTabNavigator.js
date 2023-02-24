import React from 'react'
import { View, Text,Image } from 'react-native'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen'
import Search from '../Screens/Search'
import Gallary from '../Screens/Gallary'
import Reels from '../Screens/Reels'
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import Profile from '../Screens/Profile'
import { WindowsHeight, WindowsWidth } from '../Units/Diementsions'

const Tab = createBottomTabNavigator()

const BottumTabNavigator = () => {
  return (

      <Tab.Navigator screenOptions={{ headerShown: false,tabBarShowLabel:false }}>
        <Tab.Screen name="HomeScreen" component={HomeScreen}

           options={

      
              
            {
              
            tabBarIcon:({color})=>(
              <Entypo name="home" size={25} color={color}/>
            ),
          
           }}
           
        />
        <Tab.Screen name="search" component={Search} 
         options={{
          tabBarIcon:({color})=>(
            <Feather name="search" size={25} color={color}/>
          )
         }}
        />
        <Tab.Screen name="Galary" component={Gallary}
         options={{
          tabBarIcon:({color})=>(
            <Feather name='plus-square' size={25} color={color}/>
          )
         }}
        />
        <Tab.Screen name="Reels" component={Reels}
           
      options={{      tabBarIcon:({color})=>(
            <Entypo name="video" size={25} color={color}/>
          )
      }}
        
        />
        <Tab.Screen name="Profile" component={Profile} 
          options={{
            tabBarIcon:()=>(
              <Image style={{height:WindowsHeight/28,width:WindowsWidth/14,borderRadius:50}} source={require("../assets/users/user-1.jpg")}/>
            )
          }}
        />

      </Tab.Navigator>
   
  )
}

export default BottumTabNavigator