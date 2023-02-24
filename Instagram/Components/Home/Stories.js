import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StatusData } from '../../../Units/Data'
import { windowsHeigh, windowsWidht } from '../Deimesions'

export default function Stories() {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {
                    StatusData.map((story, index) => (
                        <View>
                            <Image style={styles.storyImage} source={story.img} />
                            <Text style={styles.storyText}>{story.useName}</Text>
                        </View>

                    ))
                }

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({

    storyImage: {
        height: windowsHeigh / 12,
        width: windowsWidht / 6,
        borderRadius: 50,
        borderColor: "skyblue",
        borderWidth: 3,
        marginLeft: 10
    },
    storyText:{
        color:"black",
        fontSize:10,
        textAlign:"center",
        fontWeight:"400"
    }

})