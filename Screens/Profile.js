import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import { WindowsHeight, WindowsWidth } from '../Units/Diementsions'
import { Post } from '../Units/Data'
import { ScrollView } from 'react-native-gesture-handler'
import auth from "@react-native-firebase/auth"
import { useNavigation, StackActions } from '@react-navigation/native'

const Profile = () => {






    const Navigation = useNavigation()

    const Logout = () => {




        Alert.alert("Alert", "Are you sure want to logout",
            [
                {
                    text: "Ok", onPress: async() => {
                       await auth().signOut()
                    }
                },
                { text: "Calnce", }

            ])

    }
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", margin: "1%" }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "skyblue" }}>RohanSahu24 </Text>
                        <Icon name="chevron-small-down" style={{ marginTop: "1%", marginLeft: "-1%" }} size={25} color={"black"} />

                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "flex-end", marginTop: "-9%" }}>
                        <Feather name='plus-square' size={30} color={"skyblue"} />
                        <Feather name='menu' size={30} color={"skyblue"} style={{ marginHorizontal: "5%", marginLeft: "7%" }} />

                    </View>

                </View>
                <View style={styles.profile}>

                    <TouchableOpacity onPress={() => Logout()}><Image style={styles.image} source={require('../assets/users/rohan.jpeg')} /></TouchableOpacity>


                    <Text style={styles.post}>5 <Text style={{ fontWeight: "400", fontSize: 13 }}>Posts</Text></Text>
                    <Text style={styles.follower}>800 M <Text style={{ fontWeight: "400", fontSize: 13 }}>followers</Text></Text>
                    <Text style={[styles.follower, { marginLeft: "5%" }]}>1  <Text style={{ fontWeight: "400", fontSize: 13 }}>following</Text></Text>
                </View>
                <Text style={{ marginTop: "-5%", fontWeight: "300", marginLeft: "2%" }}>I am the king of the instagram</Text>
                <View style={{ flexDirection: "row", width: WindowsWidth }}>
                    <TouchableOpacity style={styles.btn}><Text style={styles.txt}>Edit Profile</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn}><Text style={styles.txt}>Share Profile</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, { width: WindowsWidth / 10 }]}><Feather name="user-plus" size={23} color={"grey"} /></TouchableOpacity>

                </View>
                <View style={styles.status}>
                    <FlatList
                        data={Post}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.StatusDataViewer}>
                                    <Image style={[styles.img]} source={item.postImg} />
                                </View>
                                <Text style={styles.useName} >{item.useName}</Text>

                            </View>
                        )}
                    />
                </View>
                <View style={{ height: 1, backgroundColor: "black", marginBottom: "5%" }}></View>
                <FlatList
                    data={Post}
                    numColumns={3}

                    renderItem={({ item }) => (
                        <Image style={styles.postImg2} source={item.postImg} />
                    )}

                />

            </View>
        </ScrollView>



    )
}
const styles = StyleSheet.create({
    header: {
        margin: "3%"

    },
    profile: {
        flexDirection: "row",
        margin: "5%"
    },
    image: {
        height: WindowsHeight / 10,
        width: WindowsWidth / 5,
        borderRadius: 50,

    }, post: {
        width: 40,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginHorizontal: "13%",
        marginTop: "4%"
    },
    follower: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: "4%",
        width: 60,
        marginLeft: "-5%"
    },
    btn: {
        height: WindowsHeight / 24,
        width: WindowsWidth / 2.8,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
        marginLeft: "5%",
        borderRadius: 6
    },
    txt: {
        fontWeight: "bold",
        color: "grey"
    },
    status: {
        height: WindowsHeight / 8,
        width: "100%",
        marginVertical: "5%",
        marginLeft: "2%"
    },
    StatusDataViewer: {
        //backgroundColor: "lightgrey",
        marginHorizontal: 10,
        height: WindowsHeight / 11,
        width: WindowsWidth / 5.50,
        //  borderWidth: 2,
        borderRadius: 100,
        borderColor: "skyblue",

    },
    useName: {

        fontSize: 10,
        textAlign: "center",
        color: "black",
        marginVertical: 2
    },
    img: {
        height: WindowsHeight / 11,
        width: WindowsWidth / 5.50,
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
    postImg2: {
        width: WindowsWidth / 3,
        height: WindowsHeight / 6,
        margin: 2
    }
})

export default Profile