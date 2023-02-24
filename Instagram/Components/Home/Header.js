import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { windowsHeigh, windowsWidht } from '../Deimesions'
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Fontisto from "react-native-vector-icons/Fontisto"

const Header = () => {
  const [unread,setUnread]=useState(true)
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <Image style={styles.logo} source={require('../../assessts/ins-logo.png')} />
        </View>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Feather name="plus-square"  color='skyblue' size={25}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="hearto" style={{marginHorizontal:1}}  color='skyblue' size={25}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBedge}>
            <Text style={styles.unreadBedgeText}>23</Text>
          </View>
          <Fontisto name="messenger"  color='skyblue' size={23}/>
        </TouchableOpacity>

      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  logo: {
    height: windowsHeigh / 16,
    width: windowsWidht / 2,
    resizeMode: "contain",
    tintColor: "skyblue",

    marginLeft: "-5%"
  },
  container: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  iconContainer:{
    flexDirection:"row",
    margin:"5%",
    justifyContent:"space-between",
    marginRight:"-3%",
    marginTop:"3%"
  },
  unreadBedge:{
    backgroundColor:"#FF3250",
    height:16,width:20,
    marginBottom:"-20%",
    zIndex:100, 
    borderRadius:10,
    marginLeft:"20%"
  },
  unreadBedgeText:{
    color:"white",
    fontWeight:"bold",
    alignSelf:"center",
    fontSize:10
  }
})
export default Header