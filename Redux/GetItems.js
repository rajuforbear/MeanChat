import {View,Text,FlatList,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { windowsHeigh, windowsWidht } from '../Instagram/Components/Deimesions';
import { WindowsWidth } from '../Units/Diementsions';
import Icon from "react-native-vector-icons/Ionicons"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addCartItem } from './ReduxTookit/Slice';
import Category from './Category';
import Icon2 from 'react-native-vector-icons/FontAwesome5'
const GetItems = () => {


  const Navigation = useNavigation()
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const addItem = (item) => {
    dispatch(addCartItem(item))
    // Navigation.navigate("Cart")
    alert("Item added successfully...")
  }

  const [data, setData] = useState();

  const [cateGoryData, setCategoryData] = useState(data)


  useEffect(() => {
    getProducts()
  }, [])


  const getProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
  }


  const filter = (cate) => {

    const arr = []

    data.forEach(myFunction)


    function myFunction(item, index) {

      if (cate === 'All') {
        arr.push(item)
      }


      if (cate === 'mens' && item.category === "men's clothing") {
        arr.push(item)
      }

      if (cate === 'womens' && item.category === "women's clothing") {
        arr.push(item)
      }

      if (cate === 'electornic' && item.category === "electronics") {
        arr.push(item)
      }

      if (cate === 'jwelery' && item.category === "jewelery") {
        arr.push(item)
      }
    }

    setCategoryData(arr)



  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.AppTitle}>Redux App</Text>
        <TouchableOpacity style={styles.cartBtn}
          onPress={() => Navigation.navigate('Cart')}
        >
          <Icon name="cart" style={{ marginLeft: "-20%" }} size={35} />
          <Text style={styles.count}>{selector.Cart.length}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>SHOOPOO</Text>
        <Text style={styles.desc}>all wants fount here</Text>
        <Icon2 name='people-carry' size={120} color={'green'} />
      </View>
      <Category onPress={(item) => { filter(item) }} />
      <View style={{ width: "100%", marginTop: "-1%" }}>
        <FlatList
          data={cateGoryData}
          numColumns={2}
          scrollEnabled={true}

          renderItem={(item) => {

            //  console.log(item.item.category)
            return (
              <View style={styles.Items}>
                <Image style={styles.img} source={{ uri: item.item.image }} />
                <View style={styles.verticalView}>
                  <Text style={styles.itemName}>{item.item.title.substring(0, 18)}</Text>
                  <View style={styles.cartContainer}>

                    <View style={{ marginLeft: "10%" }}>

                      <Text style={styles.price}>$ {item.item.price}</Text>
                      <TouchableOpacity onPress={() => { addItem(item.item) }} style={styles.btn}>
                        <Text style={styles.cartBtnTitle}>Add to Cart</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
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
    height: windowsHeigh / 18,
    width: windowsWidht / 4.5,
    backgroundColor: "gold",
    margin: "5%",
    marginTop: "3%",
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  titleView: {
    height: WindowsWidth / 1.5,
    backgroundColor: "white",
    marginTop: 10,
    elevation: 2,
    alignItems: "center"
  },
  count: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18
  },
  header: {
    height: windowsHeigh / 12,
    backgroundColor: "white",
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  AppTitle: {
    fontWeight: "bold",
    fontSize: 20,
    margin: "2%"
  },
  cartBtnTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white"
  },
  cartContainer: {
    flexDirection: "row",
    margin: "3%",
    marginTop: "3%",
  },
  titleText: {
    fontSize: 30,
    margin: windowsHeigh / 40,
    fontWeight: "bold",
    color: "#4d6285"
  },
  desc: {
    fontWeight: "bold",
    color: "#9bad6d",
    fontSize: 17
  }
})
export default GetItems