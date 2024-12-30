import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
 

const ForgotPasswordScreen = () => {
  const [username, setUsername]=useState('');
  
  const onSendPressed = () => {
    console.warn('Send');
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
      <Text style={styles.title}>Forgot Password</Text>

      <CustomInput 
      placeholder="Email" 
      value={username} 
      setValue={setUsername}
      />

      <CustomButton text="Send Code" 
      onPress={onSendPressed}/>

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

export default ForgotPasswordScreen;
