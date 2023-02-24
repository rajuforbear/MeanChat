import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState,useEffect } from 'react'
import FormInput from '../Componets/FormInput'
import FormButton from '../Componets/FormButton'
import SocialButton from '../Componets/SocialButton'
import { useNavigation,StackActions } from '@react-navigation/native'
import auth from "@react-native-firebase/auth"
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';



const LoginScreen = () => {
  useEffect(()=>{
    GoogleSignin.configure()
  },[])

  const [password, SetPassword] = useState('')
  const [email, SetEmail] = useState('')
  const [errors, setError] = useState('')

  console.log(GoogleSignin.isSignedIn())


  const vailidate = async () => {
  
   try {

         const user=await auth().signInWithEmailAndPassword(email,password)
         if(user){
         if(user.user.emailVerified)
         {
          Alert.alert("Verified")
          Navigation.dispatch(StackActions.replace("splash"))
         }
         else
         {
           Alert.alert("You are not verified","Please check your mail box verification email was just sent"),
           auth().currentUser.sendEmailVerification()
           auth().signOut()
         }
        }
        else{
          alert("Email or password not matched")
        }
           
    
   } catch (error) {
        Alert.alert("email or password not matched")
   }   

  }
  const Rej = () => {
    Alert.alert("fgjfgjhergu")

  }

  
  const LoginWIthGoogle = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        Navigation.navigate("splash")
    } catch (error) {
      
        console.log(error)
    }

}


  const Navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/rn-social-logo.png')} />
      <Text style={styles.text}>MeanChat Social App</Text>
      <FormInput
        lableValue={email}
        onChangeText={(text) => SetEmail(text)}
        placeholderText='Email'
        iconTyepe='user'
        keyBoardType='email-address'
        autoCapitalize='none'
        keyboardType="email-address"
        autoCorrect={false}
        error={errors}
        onFocused={() => {
          setError(false)

        }}
      />
      <FormInput
        lableValue={password}
        onChangeText={(text) => SetPassword(text)}
        placeholderText='Password'
        iconTyepe='lock'
        secureTextEntry={true}
        //  error={errors}
        onFocused={() => {
          setError(false)

        }}

      />
      <FormButton
        buttonTitle='Sing In'
        onPress={() => vailidate()}
      />
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
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
        onPress={()=>LoginWIthGoogle()}

      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => Navigation.navigate('Register')}>
        <Text style={styles.navButtonText}>Dont have an account? Create here </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

export default LoginScreen