import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import React,{useState} from 'react';
import logo from '../../../assets/images/logo.jpeg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
// import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign in');
  };
 
  const onForgotPasswordPressed = () => {
    console.warn('Forgot password');
  };

  const onSignUpPressed = () => {
    console.warn('Create one');
  };

  return (
    <ScrollView>
    <View>
      <Image source={logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>
      
      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}
      />

      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry
      />

    <CustomButton text="Sign In" onPress={onSignInPressed}/>
    <CustomButton text="Forget Password" 
    onPress={onForgotPasswordPressed} 
    type="TERTIARY"
    />
   <CustomButton text="Dont have an account ? Create one"
    onPress={onSignUpPressed} 
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
  logo:{
    width:'100%',
    maxheight:200,
    maxWidth:300,
    alignItems:'center',

  }
})

export default SignInScreen;
