import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator
    screenOptions={{headerShown:false}}>

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation