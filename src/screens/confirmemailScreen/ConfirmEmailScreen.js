import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
 

const ConfirmEmailScreen = () => {
  const [code, setCode]=useState('');
  
  const onConfirmPressed = () => {
    console.warn('Sign in');
  };

  const onSignInPressed = () => {
    console.warn('onSignInPressed');
  };
 
  const onResendPressed = () => {
    console.warn('Resend')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <Text style={styles.title}>Confirm your Email</Text>

      <CustomInput 
      placeholder="Enter your confirmation code" 
      value={code} 
      setValue={setCode}
      />

      <CustomButton text="Confirm" 
      onPress={onConfirmPressed}/>
    
    <CustomButton text="Resend Code"
     onPress={onResendPressed} 
     type="SECONDARY"
    />

    <CustomButton 
    text="Back to Sign In"
    onPress = {onSignInPressed}
    type="TERTIARY"
    />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
  alignItems:'center',
  padding:10,  
  },
 
  title: 
  {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D4EBF8',
    margin:10,
  },
  text: 
  {
    color:'gray',
    marginVertical:10,
  },
  link:
  {
    color:'#80C4E9'
  },
})

export default ConfirmEmailScreen;
