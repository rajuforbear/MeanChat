import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import Video from 'react-native-video';
import { WindowsHeight, WindowsWidth } from '../Units/Diementsions';
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Icon from "react-native-vector-icons/FontAwesome"
import SwiperFlatList from 'react-native-swiper-flatlist';
import { Post } from '../Units/Data';
import { FlatList } from 'react-native-gesture-handler';


const data = [{
    id: 1,
},
{
    id: 2
},
{
    id: 3
}
]








const Reels = () => {

    const [curruntIndex, setcurrentIndex] = useState(0)



    const renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1 }}>
                <Video source={item.uri}
                    resizeMode='cover'
                    style={styles.backgroundVideo}


                    paused={curruntIndex != index}
                    repeat
                />
                <View style={{ flex: 1, position: "absolute" }}>

                    <SafeAreaView>
                        <View style={styles.flexHorizontal}>
                            <Text style={styles.txt}>Reels</Text>
                            <Feather name='camera' size={30} color={'skyblue'} style={{ margin: "7%" }} />
                        </View>
                    </SafeAreaView>
                    <View style={styles.bottumView}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.imgcontainer}>
                                <Image style={styles.img} source={item.img} />
                            </View>
                            <Text style={styles.useName}>{item.useName} <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>. Follow</Text></Text>
                        </View>
                        <Text style={{ fontSize: 13, fontWeight: "bold", color: "white", marginVertical: "2%", color: "skyblue", width: WindowsWidth - 20 }}>. Follow @RohanSahu24<Text style={{ fontSize: 12, fontWeight: "500", color: "white", textAlign: "center" }}> hi my name is raju barde please view more...</Text></Text>
                        <Text style={{ color: "white" }}>Original adio-: <Text style={{ color: "skyblue" }}> by arijt singh</Text></Text>
                        <View style={{ flexDirection: "row", marginVertical: "3%" }}>
                            <AntDesign name="heart" size={25} color={'skyblue'} />
                            <Icon name="comment" size={25} color={'skyblue'} style={{ marginHorizontal: "7%" }} />
                            <Feather name="send" size={25} color={'skyblue'} />
                            <Feather name="save" size={25} color={'skyblue'} style={{ marginHorizontal: "7%" }} />
                            <View style={{ marginTop: "2%", flexDirection: "row" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <AntDesign name="heart" size={12} color={'skyblue'} style={{ marginLeft: "5%" }} />
                                    <Text style={{ fontSize: 8, color: "white", fontWeight: "300" }}>123 Likes</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: "10%" }}>
                                    <Icon name="comment" size={12} color={'skyblue'} />
                                    <Text style={{ fontSize: 8, color: "white", fontWeight: "300" }}>123 comments</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        )
    }


    const onChangeIndex = ({ index }) => {
        setcurrentIndex(index)

    }


    return (




        <SwiperFlatList
            showPagination={false}
            autoplayLoop={true}
            data={Post}
            vertical={false}
            pagingEnabled

            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            onChangeIndex={onChangeIndex}
            style={{ flex: 1 }}

        />




    )
}

export default Reels



const styles = StyleSheet.create({
    backgroundVideo: {


        height: WindowsHeight,
        width: WindowsWidth,


    },
    flexHorizontal: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: "3%",
        marginTop: "-3%"


    },
    txt: {
        fontSize: 22,
        fontWeight: "bold",
        color: "skyblue",
        margin: "5%"
    },
    bottumView: {
        flex: 1,
        justifyContent: "flex-end",
        paddingVertical: 24,
        paddingHorizontal: 16,
        marginTop: "108%"
    },
    img: {
        height: WindowsHeight / 18,
        width: WindowsWidth / 9.5,
        borderRadius: 50
    },
    imgcontainer: {
        alignItems: "center",
        justifyContent: "center",
        height: WindowsHeight / 15.8,
        width: WindowsWidth / 8.3,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: "skyblue",
        backgroundColor: "white"
    },
    useName: {
        fontWeight: "bold",
        fontSize: 16,
        color: "skyblue",
        margin: "3%"
    }
});