import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//Screens
import HomeScreen from './screens/tabs/HomeScreen';
import ReviewsScreen from './screens/tabs/ReviewsScreen';
import FAQScreen from './screens/tabs/FAQScreen';
import UpcomingEvents from './screens/tabs/UpcomingEvents';

const homeName = 'Home';
const reviewName = 'Reviews';
const faqName = 'FAQ';
const upcomingEvents = 'Upcoming Events';

const Tab=createBottomTabNavigator();

export default function MainContainer(){
    return(
       <NavigationContainer>
        <Tab.Navigator
        initialRouteName={homeName}
       screenOptions={({route}) => ({
        tabBarIcon:({focused, color,size})=>{
            let iconName;
            let rn=route.name;
            if(rn===homeName){
                iconName=focused?'home':'home-outline';
            }
            else if (rn===reviewName){
                iconName=focused?'list':'list-outline';
            }else if(rn===faqName){
                iconName=focused?'settings':'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color}/>
        },
    })}
    tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor:'grey',
        
    }}
    >
        <Tab.Screen name={homeName} component={HomeScreen}/>
        <Tab.Screen name={reviewName} component={ReviewsScreen}/>
        <Tab.Screen name={faqName} component={FAQScreen}/>


    </Tab.Navigator>
        </NavigationContainer> 
    );
}