// import { View, Text } from 'react-native'
// import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import signinScreen from '../screens/signinScreen';
import signupScreen from '../screens/signupScreen';
import ConfirmEmailScreen from '../screens/confirmemailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
// import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SCREENS from '../screens';
import HomeScreen from '../screens/tabs/HomeScreen';
import UpcomingEvents from '../screens/tabs/UpcomingEvents';
import ReviewsScreen from '../screens/tabs/ReviewsScreen';
import FAQScreen from '../screens/tabs/FAQScreen';

const Tab=createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="SignIn" component={signinScreen} />
         <Stack.Screen name="SignUp" component={signupScreen} />
         <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
         <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
         <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        </Stack.Navigator>
    </NavigationContainer>
   );
 };

 const TabNavigator=()=>
  {
  return (
  <Tab.Navigator initialRouteName={SCREENS.HOME}>
    <Tab.Screen name={SCREENS.HOME} 
    component={HomeScreen}
    options={{
      title:'Homestays',
      tabBarIcon:({focused}) => (
        <Image source={IMAGES.HOME} style={{height:30, width:30}} />
      ),
    }}
    />
    <Tab.Screen name={SCREENS.UPCOMING} 
    component={UpcomingEvents}
    options={{
      title:'Upcoming Events',
      tabBarIcon:({focused}) => (
        <Image source={IMAGES.UPCOMING} style={{height:30, width:30, tintColor:focused? COLORS.BLACK:COLORS.GRAYLIGHT,}} />
      ),
      tabBarActiveTintColor: COLORS.BLACK,
      tabBarInactiveTintColor:COLORS.GRAY_LIGHT,
    }}
    />
    <Tab.Screen name={SCREENS.REVIEWS} 
    component={ReviewsScreen}
    options={{
      title:'Reviews',
      tabBarIcon:({focused}) => (
        <Image source={IMAGES.REVIEWS} style={{height:30, width:30}} />
      ),
    }}
    />
    <Tab.Screen name={SCREENS.FAQ} 
    component={FAQScreen}
    options={{
      title:'FAQ',
      tabBarIcon:({focused}) => (
        <Image source={IMAGES.FAQ} style={{height:30, width:30}} />
      ),
    }}
    />
  </Tab.Navigator>
  )
 }
 export default Navigation;