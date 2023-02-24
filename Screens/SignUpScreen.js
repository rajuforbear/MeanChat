import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../Componets/FormInput'
import FormButton from '../Componets/FormButton'
import SocialButton from '../Componets/SocialButton'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import auth from "@react-native-firebase/auth"
import fireStore from '@react-native-firebase/firestore'





const SignUpScreen = () => {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '+91',
    password: '',
    confirmPassword: '',
  })

  const [erros, setErros] = useState({})


  const handleOnChange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }))
  }
  const handleError = (errorMassege, input) => {
    setErros(prevState => ({ ...prevState, [input]: errorMassege }))
  }

  const Vailidate = () => {
    let valid = true;
    if (!inputs.name) {
      handleError("please enter name", "name")
      valid = false
    }
    if (!inputs.email) {
      handleError("please enter email", 'email')
      valid = false
    }
    else if (!inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      handleError("email not vailid", 'email')
      valid = false
    }

    if (!inputs.phone) {
      handleError("please enter mobile numer", 'phone')
      valid = false
    }
    else if (inputs.phone.length < 10) {
      handleError("please enter 10 digit of mobile", 'phone')
      valid = false
    }
    if (!inputs.password) {
      handleError('please enter password', 'password')
      valid = false

    }

    else if (!inputs.password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
      handleError('pasword must be an Uppercase,a special charter and A number and greater then 8 character ', 'password')
      valid = false
    }


    if (!inputs.confirmPassword) {
      handleError('please re-enter your password', 'confirmPassword')
      valid = false

    }
    else if (inputs.password != inputs.confirmPassword) {
      handleError("password dosen't matched", 'confirmPassword')
      valid = false

    }
    if (valid) {
      register()
    }

  }
  const register = async () => {

    try {
          

      const isUser = await auth().createUserWithEmailAndPassword(inputs.email, inputs.password);
  
      const userData={
        uid:isUser.user.uid,
        name:inputs.name,
        email:inputs.email,
        phone:inputs.phone
      }
      await fireStore().collection("User").doc(isUser.user.uid).set(userData)
      await auth().currentUser.sendEmailVerification()
      await auth().signOut()
      alert("Please check you email box to verify your email adress")
      


    } catch (error) {
      console.log(error)

    }


  }



  const Navigation = useNavigation()

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.text}>Create an account</Text>
        <FormInput
          lableValue={inputs.name}
          onChangeText={(text) => handleOnChange(text, "name")}
          placeholderText='Full Name'
          iconTyepe='user'
          error={erros.name}
          onFocused={() => {
            handleError(null, 'name')
          }}

          autoCapitalize='none'

          autoCorrect={false}
        />
        <FormInput
          lableValue={inputs.email}
          onChangeText={(text) => { handleOnChange(text, 'email') }}
          placeholderText='Email'
          iconTyepe='mail'
          error={erros.email}
          onFocused={() => {
            handleError(null, 'email')
          }}

          autoCapitalize='none'
          keyboardType="email-address"
          autoCorrect={false}
        />
        <FormInput
          lableValue={inputs.phone}
          onChangeText={(text) => { handleOnChange(text, "phone") }}
          placeholderText='Mobile'
          iconTyepe='phone'
          keyboardType='numeric'
          autoCapitalize='none'
          error={erros.phone}
          onFocused={() => {
            handleError(null, 'phone')
          }}

          autoCorrect={false}
        />
        <FormInput
          lableValue={inputs.password}
          onChangeText={(text) => { handleOnChange(text, "password") }}
          placeholderText='Password'
          iconTyepe='lock'
          secureTextEntry={true}
          error={erros.password}
          onFocused={() => {
            handleError(null, 'password')
          }}
        />
        <FormInput
          lableValue={inputs.confirmPassword}
          onChangeText={(text) => { handleOnChange(text, "confirmPassword") }}
          placeholderText='Confirm Password'
          iconTyepe='lock'
          secureTextEntry={true}
          error={erros.confirmPassword}
          onFocused={() => {
            handleError(null, 'confirmPassword')
          }}
        />
        <FormButton
          buttonTitle='Sing Up '
          onPress={() => { Vailidate() }}
        />
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>By registerring, you confirm that you agree out</Text>
          <TouchableOpacity onPress={() => alert("dsjkdv")}>
            <Text style={[styles.color_textPrivate, { color: "#e88832" }]}>Term of service</Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and</Text>
          <Text style={[styles.color_textPrivate, { color: "#e88832" }]}> Privacy Policy</Text>


        </View>

        <SocialButton
          buttonTitle='Sing in with FaceBook'
          btnType="facebook"
          color='#4867aa'
          backgroundColor='#e6eaf4'
          onPress={() => { }}

        />
        <SocialButton
          buttonTitle='Sing in with Google'
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => { }}

        />

        <TouchableOpacity style={styles.navButton} onPress={() => Navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Have an account? Sing in  </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
    marginTop: "5%"
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});

export default SignUpScreen