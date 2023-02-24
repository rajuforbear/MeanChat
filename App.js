import { View, Text, } from 'react-native'
import React from 'react'
import LoginScreen from './Screens/LoginScreen'
import AuthNavigator from './Navigations/AuthNavigator'
import SPlashScreen from './Screens/SPlashScreen'
import Header from './Instagram/Components/Home/Header'
import HomeScreen from './Instagram/Screens/HomeScreen'
import GetItems from './Redux/GetItems'
import Main from './Redux/Main'
import { Provider } from 'react-redux'

import myStore from './Redux/ReduxTookit/MyStore'





const App = () => {
  return (
    <Provider store={myStore}>
      <Main />

    </Provider>

  )
}

export default App 