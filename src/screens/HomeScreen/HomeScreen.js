import { View, Text } from 'react-native'
import React from 'react'

const homeScreen = ({navigation}) => {
  return (
    <View>
      <Text style = {{ fontSize: 24, alignSelf : 'center'}}>Home</Text>
    </View>
  )
}

export default homeScreen;