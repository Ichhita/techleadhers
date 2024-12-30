import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text, SafeAreaView } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
// import SignInScreen from './src/screens/signinScreen';
// import SignUpScreen from './src/screens/signupScreen';
// import ConfirmEmailScreen from './src/screens/confirmemailScreen';
// import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
// import NewPasswordScreen from './src/screens/NewPasswordScreen';
// import Navigation from './src/navigation';
 import CountdownPage from './src/screens/CountdownPage';
// import HomeScreen from './src/screens/tabs/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <NewPasswordScreen/> */}
      {/* <Navigation/> */}
      <CountdownPage />
      {/* <HomeScreen/> */}
      {/* <AppNavigation/> */}
      <View style={styles.container}>
      <StatusBar style="auto" />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#041C32',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
