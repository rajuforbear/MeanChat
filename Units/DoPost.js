import { View, Text,Image,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'
import storage from "@react-native-firebase/storage"
import { WindowsHeight, WindowsWidth } from './Diementsions'



const DoPost = () => {




  const [uri,setUri]=useState(null);

  const img=require('../assets/users/user-1.jpg')
 const img2=img.toString()

  useEffect(()=>{
    getPhoto()
  },[])

  const getPhoto =async()=>{

    const uri =await AsyncStorage.getItem("PostImg");
    console.log(uri)
    setUri(uri)

  }

  const Store=async()=>{
    const fileExt = uri.split('/').pop()



    

       const fileName = fileExt
      console.log(fileName)
       const imageData = await storage().ref(`Photos/${fileName}`).putFile(uri)
        console.log(imageData)
  }

  return (
   <View style={{flex:1,alignItems:"center",}}>
    <Image style={{height:WindowsHeight/2,width:WindowsWidth/1.5,marginTop:"15%"}}  source={{uri:uri}}/>
    <Button onPress={()=>Store()} title='DoPosat'/>
   </View>
  )
}

export default DoPost