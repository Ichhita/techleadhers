import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react'

const CustomButton = ({ onPress, text, type = "PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style = {[styles.container , styles[`container_${type}`]]}>
      <Text style = {[styles.text , styles[`text_${type}`]]}>{text}</Text>
    </Pressable> 
  );
};

const styles = StyleSheet.create({
    container: {
        width:'100%',
        padding:15,
        marginVertical:5,
        alignitems:'center',
        borderRadius:15,
    },

    container_PRIMARY: 
    {
        backgroundColor: 'blue',
    },
    container_SECONDARY: {
        borderColor:'#80C4E9' ,
        borderWidth:2,
    },
    container_TERTIARY: 
    { },
    text: {
        fontWeight: 'bold',
        color:'white',
    },

    text_TERTIARY : {
        color: 'gray',
    },
    text_SECONDARY : {
       color:'#80C4E9' 
    },
});
export default CustomButton