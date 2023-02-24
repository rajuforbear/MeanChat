import { View, Text, StyleSheet, FlatList, Image, ImageBackground } from 'react-native'
import React,{useEffect,useState} from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Fontisto from "react-native-vector-icons/Fontisto"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import { WindowsHeight, WindowsWidth } from '../Units/Diementsions'
import { ScrollView } from 'react-native-gesture-handler'
import { StatusData, Post } from '../Units/Data'
import Header from '../Instagram/Components/Home/Header'
import Stories from '../Instagram/Components/Home/Stories'
import axios from "axios"


const HomeScreen = () => {

    const [data,setData]=useState()
    
    // useEffect(()=>{
    //     getData()
    // },[])


    //     const getData=()=>{
    //         const options = {
    //             method: 'GET',
    //             url: 'https://instagram28.p.rapidapi.com/medias',
    //             params: {user_id: '25025320', batch_size: '20'},
    //             headers: {
    //               'X-RapidAPI-Key': '8f0ab9fa53msh6b935297afdc747p13ccfcjsn89d584f61d6b',
    //               'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
    //             }
    //           };
              
    //         //   axios.request(options).then(function (response) {
    //         //      setData(response.data)
    //         //   }).catch(function (error) {
    //         //       console.error(error);
    //         //   });
    //     }

    //     console.log(data.data.user.)

    return (
        <View style={styles.container}>
           
  
          <Header/>
          <Stories/>
        
                <View>
                    <FlatList
                        data={Post}

                        renderItem={({ item }) => (
                            <View style={styles.postContainer}>
                                <View style={{ height: 0.7, width: WindowsWidth, backgroundColor: "skyblue", marginTop: "-1%" }}></View>
                                <View style={{ flexDirection: "row" }}>
                                    <Image style={styles.img2} source={item.img} />
                                    <View style={styles.nameContainer}>
                                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "skyblue" }}>{item.useName}</Text>
                                        <Text>{item.locat}</Text>
                                    </View>
                                    <MaterialCommunityIcons name='dots-vertical' size={28} style={styles.icon} />
                                </View>

                                <Image style={styles.postImg} source={item.postImg} />

                                <View style={{ margin: "5%", flexDirection: "row" }}>
                                    <MaterialCommunityIcons name='cards-heart-outline' size={30} color={"skyblue"} />
                                    <Fontisto name='comment' size={24} style={{ marginHorizontal: "7%" }} color={"skyblue"} />
                                    <Feather name='send' size={28} color={"skyblue"} />
                                    <Feather name='save' size={28} color={"skyblue"} style={{ marginLeft: "50%" }} />
                                </View>
                                <View style={{ margin: "5%" ,height:"100%"}}>
                                   <Text style={{fontSize:16,fontWeight:"bold",color:"skyblue",marginTop:"-10%"}}>1 Like</Text>
                                   <Text style={{fontSize:16,fontWeight:"bold",color:"skyblue"}}>{item.locat}<Text style={{fontSize:15,fontWeight:"300",color:"black"}}>The Online Proofing Software for Marketing Teams and Agencies. Document review made</Text></Text>
                                   <Text style={{fontWeight:"100"}}>View all 4 comments...</Text>
                                </View>

                            </View>
                        )}

                    />
                </View>
          
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    tilteContiner: {

        width: "100%",
        flexDirection: "row",

        height: '7%'
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "skyblue", marginLeft: "3%"
    },
    heart: {
        flexDirection: "row",
        marginLeft: "35%",
        marginTop: "3%"
    },
    status: {
        height: WindowsHeight / 8,
        width: "100%",
        marginVertical: 4,
        marginLeft: "2%"
    },
    StatusDataViewer: {
        backgroundColor: "lightgrey",
        marginHorizontal: 4,
        height: WindowsHeight / 11,
        width: WindowsWidth / 5.70,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: "skyblue"
    },
    useName: {

        fontSize: 10,
        textAlign: "center",
        color: "black",
        marginVertical: 2
    },
    img: {
        height: WindowsHeight / 13,
        width: WindowsWidth / 6.70,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: "5%"
    },
    postImg: {
        height: WindowsHeight / 2,
        width: WindowsWidth / .5,
        borderWidth: 1,
        marginTop: "3%"
    },
    postContainer: {
        height: WindowsHeight / 1.2
    },
    img2: {
        height: WindowsHeight / 16.5,
        width: WindowsWidth / 8.70,
        borderRadius: 100,
        marginVertical: 5,
        marginLeft: 5
    },
    nameContainer: {
        alignSelf: "center",
        marginLeft: "5%",
        marginVertical: 5,
        width: WindowsWidth / 1.5
    },
    icon: {
        alignSelf: "center",
        marginLeft: "8%",
        color: "skyblue"
    }
})

export default HomeScreen