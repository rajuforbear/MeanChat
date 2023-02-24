import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { windowsHeigh, windowsWidht } from '../Instagram/Components/Deimesions'
import { WindowsWidth } from '../Units/Diementsions'


const Category = ({ onPress=()=>{}, ...props }) => {

    const [coloindex, seColorIndex] = useState()

    const colpr = "green"
    return (
        <View style={{ height: windowsHeigh / 13, justifyContent: "center", width: "100%" }}>
            <FlatList
                horizontal
                data={data}

                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity {...props} onPress={() => { onPress(item, index), seColorIndex(index) }} style={[{ alignItems: "center", justifyContent: "center", width: WindowsWidth / 4, margin: 10, borderRadius: 16, backgroundColor: "white" },
                        coloindex === index && { backgroundColor: colpr }]}>
                            <Text style={[{ fontWeight: "bold", fontSize: 17 ,color:"black"},coloindex===index&&{color:"white"}]}>{item}</Text>
                        </TouchableOpacity>
                    )
                }}

            />
        </View>
    )
}

export default Category

const data = [
    'All',
    'mens',
    'womens',
    'electornic',
    'jwelery' 
]
