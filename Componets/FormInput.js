import { View, TextInput, Text, StyleSheet, } from 'react-native'
import React,{useState} from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { WindowsHeight, WindowsWidth } from '../Units/Diementsions'

const FormInput = ({ lableValue, iconTyepe, placeholderText, error,onFocused = () => { }, ...reset }) => {

   const [isFocused,setIsfocused]=useState(false)
  return (
    <View style={{marginBottom:10}}>
    
      <View style={[styles.inputContainer,{borderColor:error?"red":'grey'}]}>
        <View style={styles.iconStyle}>
          <AntDesign name={iconTyepe} size={25} color={'#666'} />
        </View>
        <TextInput
          style={styles.input}
          value={lableValue}
          placeholder={placeholderText}
          placeholderTextColor={'#666'}
          numberOfLines={1}
          {...reset}
          onFocus={()=>{
            onFocused(),
            setIsfocused(true)

          }}
          onBlur={()=>{
            setIsfocused(false)
          }}
         

        />

      </View>
      { error&&<Text style={{ color: "red", fontSize: 10, marginTop: "-7%" }}>{error}</Text>}

    </View>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    
    marginBottom: 20,
    width: '100%',
    height: WindowsHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: WindowsWidth / 1.5,
    height: WindowsHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});


export default FormInput