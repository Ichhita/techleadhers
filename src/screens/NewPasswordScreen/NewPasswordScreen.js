import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
 

const NewPasswordScreen = () => {
  const [code, setCode]=useState('');
  const [newPassword, setNewPassword] = useState('');
  
  const onSubmitPressed = () => {
    console.warn('Submit');
  };

  const onSignInPressed = () => {
    console.warn('onSignInPressed');
  };
 
  const onResendPressed = () => {
    console.warn('Resend')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>

      <CustomInput 
      placeholder="Enter new password" 
      value={code} 
      setValue={setCode}
      />

      <CustomInput 
      placeholder="Confirm new password" 
      value={newPassword} 
      setValue={setNewPassword}
      />

      <CustomButton text="Submit" 
      onPress={onSubmitPressed}/>

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

export default NewPasswordScreen;
