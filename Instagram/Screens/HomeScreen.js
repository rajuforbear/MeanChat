import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Stories from '../Components/Home/Stories'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
       <Header/>
       <Stories/>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    }
})

export default HomeScreen