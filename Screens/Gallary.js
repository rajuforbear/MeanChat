import { View, TouchableOpacity, Text, SafeAreaView, ScrollView, PermissionsAndroid, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

import { WindowsHeight, WindowsWidth } from '../Units/Diementsions';
import Entypo from "react-native-vector-icons/Entypo"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native'
// import DoPost from '../Units/DoPost';

const Gallary = () => {

  const Navigation = useNavigation()

  const [BigPhto, setBigPhot] = useState()
  const[fileName,setFileName]=useState()
  useEffect(() => {
    checkPermission()
  }, [])

  const [edges, setEges] = useState([])


  const checkPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Access the storage',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getPhoto()
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getPhoto = async () => {
    const photos = CameraRoll.getPhotos({
      first: 50,
      assetType: "Photos"
    })

    setEges((await (photos)).edges.map(edges => edges.node))
  }

  const doPost = async () => {

    try {
      if (BigPhto !== null) {

        await AsyncStorage.setItem("PostImg", BigPhto);
        Navigation.navigate("Post");
      }

    } catch (error) {
      console.log(error)
    }

  }
 
  const GetBigImg=(uri,name)=>{

    setBigPhot(uri),
    setFileName(name)
    
  }



  //console.log(BigPhto)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: WindowsHeight / 15, backgroundColor: "white", flexDirection: "row" }}>
        <Entypo name="cross" size={35} color="skyblue" style={{ alignSelf: "center" }} />
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20, marginLeft: "5%", color: "skyblue" }}>Do Post</Text>
        <TouchableOpacity onPress={() => { doPost() }} style={{ alignSelf: "center", marginLeft: "45%" }}><Entypo name="arrow-long-right" size={35} color={"skyblue"} /></TouchableOpacity>

      </View>

      <ScrollView>
        {BigPhto && <Image style={{ height: WindowsHeight / 2, width: "100%", alignSelf: "center" }} source={{ uri: BigPhto }} />}
        <View style={{ height: WindowsHeight / 15, backgroundColor: "white", flexDirection: "row" }}>

          <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20, }}>Gallary</Text>
          <Entypo name="chevron-right" size={25} style={{ alignSelf: "center", marginTop: "2%", marginLeft: "5%" }} />

        </View>
        <FlatList
          data={edges}
          numColumns={4}
          renderItem={(item) => {

            return (
              <TouchableOpacity onPress={() => setBigPhot(item.item.image.uri)}>
                <Image style={{ height: WindowsHeight / 6, width: WindowsWidth / 3, margin: 1 }} source={{ uri: item.item.image.uri }} />
              </TouchableOpacity>
            )
          }}
        />
      </ScrollView>
      <View style={{ height: WindowsHeight / 15, backgroundColor: "white", flexDirection: "row" }}></View>
    </SafeAreaView>
  )
}

export default Gallary