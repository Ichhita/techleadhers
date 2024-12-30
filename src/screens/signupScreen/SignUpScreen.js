import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
 

const SignUpScreen = () => {
  const [username,setUsername]=useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  
  const onRegisterPressed = () => {
    console.warn('Sign in');
  };

  const onSignInPressed = () => {
    console.warn('onSignInPressed');
  };

  const onPrivacyPressed = () => {

  }; 
  const onTermsOfUsePressed = () => {

  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <Text style={styles.title}>Create an account</Text>

      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}
      />

     <CustomInput 
      placeholder="Email" 
      value={email} 
      setValue={setEmail}
      />

      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword}
      secureTextEntry
      />

     <CustomInput 
      placeholder="Confirm Password" 
      value={passwordRepeat} 
      setValue={setPasswordRepeat}
      secureTextEntry
      />
      <CustomButton text="Register" 
      onPress={onRegisterPressed}/>

      <Text style={styles.text}>
      By registering, you confirm that 
      you accept our {' '}
      <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use </Text> and {''}
      <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy.</Text>
      
      </Text>
    
    <CustomButton text="Dont have an account ? Create one"
     onPress={onSignInPressed} 
     type="TERTIARY"
    />

    <CustomButton 
    text="Have an account? Sign In"
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

export default SignUpScreen;
