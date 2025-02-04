import { View, Text , TextInput, StyleSheet} from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue}
      placeholder={placeholder} 
      style={styles.input}
      secureTextEntry={secureTextEntry}
/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'100%',
    height:'35',
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical:10,
    justifyContent:'center'
  },
  input:{},
});

export default CustomInput