import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { windowsHeigh, windowsWidht } from '../Instagram/Components/Deimesions';
import { WindowsWidth } from '../Units/Diementsions';
import Icon from "react-native-vector-icons/Ionicons"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { removeCartItem } from './ReduxTookit/Slice';



const Cart = () => {

    const Navigation=useNavigation()


    const [data, setData] = useState();

    const Items = useSelector(state => state.Cart)

    let adedItems = [];
    adedItems = Items
    const dispatch = useDispatch()


    const reMoveItem = (index) => {
        dispatch(removeCartItem(index))
    }









    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: windowsHeigh / 12, backgroundColor: "white", elevation: 2, flexDirection: "row", justifyContent: "space-between" }}>
                <Text onPress={()=>Navigation.goBack()} style={{ fontWeight: "bold", fontSize: 23, margin: "2%",marginLeft:"5%" }}>Back{"  >"}</Text>
                <TouchableOpacity style={styles.cartBtn}>
                    <Icon name="cart" style={{ marginLeft: "-20%",color:"white" }} size={30} />
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 ,marginLeft:"10%"}}>{adedItems.length}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: "100%", marginTop: "5%" }}>
                <FlatList
                    data={Items}
                    numColumns={2}
                    scrollEnabled={true}

                    renderItem={(item) => {



                        //  console.log(item.index)
                        if (item != null) {
                            return (
                                <View style={styles.Items}>
                                    <Image style={styles.img} source={{ uri: item.item.image }} />
                                    <View style={styles.verticalView}>
                                        <Text style={styles.itemName}>{item.item.title.substring(0, 18)}</Text>
                                        <View style={{
                                            flexDirection: "row", margin: "3%",
                                            marginTop: "3%"
                                        }}>

                                            <View style={{ marginLeft: "10%" }}>

                                                <Text style={styles.price}>$ {item.item.price}</Text>
                                                <TouchableOpacity onPress={() => reMoveItem(item.index)} style={styles.btn}><Text style={{ alignSelf: "center", fontWeight: "bold", color: "white" }}>Remove from Cart</Text></TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Items: {
        height: windowsHeigh / 3.8,
        width: windowsWidht / 2,
        margin: ".5%",
        marginVertical: "2%",
        backgroundColor: "white",
        elevation: 3,
        borderRadius: 9
    },
    verticalView: {
        // flexDirection: "row",
        margin: "3%"
    },
    itemName: {

        fontWeight: "bold",
        fontSize: 16,
        color: "black",
        textAlign: "center"

    },
    img: {
        height: windowsHeigh / 10,
        width: WindowsWidth / 6,
        alignSelf: "center", marginTop: "3%"

    },
    price: {
        fontWeight: "bold",
        fontSize: 20,
        color: "green",
        alignSelf: "center"
    },
    btn: {
        height: windowsHeigh / 20,
        width: WindowsWidth / 3,
        backgroundColor: "green",
        alivation: 2,
        borderRadius: 16,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"

    },
    cartBtn: {
        height: windowsHeigh / 20,
        width: windowsWidht / 4.9,
        backgroundColor: "gold",
        margin: "5%",
        marginTop: "3%",
        borderRadius: 16,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderColor:"white"
    }
})
export default Cart