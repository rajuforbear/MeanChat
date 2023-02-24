import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import GetItems from '../GetItems'
import Cart from '../Cart'

  const Stack = createStackNavigator()

const MyStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown:false}}>
            <Stack.Screen name="Item" component={GetItems} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyStack