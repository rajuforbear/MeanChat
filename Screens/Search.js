import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Post } from '../Units/Data'
import { WindowsHeight, WindowsWidth } from '../Units/Diementsions'
import Feather from "react-native-vector-icons/Feather"
import { FlatList } from 'react-native-gesture-handler'


const Search = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        <Feather style={{ margin: "3%" }} name="search" size={25} />
        <TextInput placeholder='Search' style={{ fontSize: 16, fontWeight: "bold", flex: 1 }} />

      </View>
      <FlatList
        data={Post}
        style={{ marginTop: "5%" }}
        numColumns={4}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer}>
            <Image style={{ height: "100%", width: "100%" }} source={item.postImg} />
          </TouchableOpacity>
        )}
      />

    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "lightgrey",
    height: WindowsHeight / 17,
    marginTop: "5%",
    marginHorizontal: "3%",
    borderRadius: 16,
    flexDirection: "row"
  },
  imageContainer: {

    width: WindowsWidth / 3,
    height: WindowsHeight / 5,
    margin: 1
  }
})

export default Search