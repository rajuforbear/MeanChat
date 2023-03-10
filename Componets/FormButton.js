import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { WindowsHeight } from '../Units/Diementsions'

const FormButton = ({ buttonTitle, ...reset }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...reset}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: WindowsHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
})
export default FormButton