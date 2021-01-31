import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterSignIn from './src/screens/RegisterSignInScreen';
import SignIn from './src/screens/SignInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ScanQrScreen from './src/screens/ScanQrScreen';
import ScanScreen from './src/screens/ScanScreen';
import MemberScreen from './src/screens/MemberProfile';
import MyScreen from './src/screens/MyProfile';

const Stack = createStackNavigator()

export default function App() {
  return (
    
    <NavigationContainer>
     
       <Stack.Navigator>
          <Stack.Screen options={{
            header: ()=> null}} 
            name="Home" component={HomeScreen}/>
         
          <Stack.Screen options={{
            header: ()=> null}} 
            name="RegisterSignIn" component={RegisterSignIn}/>
         
          <Stack.Screen options={{
            title: "Sign In",
            headerStyle: {
              backgroundColor: "#f5426f",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }} name="SignIn" component={SignIn}/>

          <Stack.Screen options={{
            title: "Register",
            headerStyle: {
              backgroundColor: "#f5426f",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }} name="Register" component={RegisterScreen}/>

          <Stack.Screen options={{
            title: "AMPERSAND",
            headerStyle: {
              backgroundColor: "#f5426f",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }} name="ScanQr" component={ScanQrScreen}/>
          
          <Stack.Screen name="ScanScreen" component={ScanScreen}/>

          <Stack.Screen options={{
            title: "Member Profile",
            headerStyle: {
              backgroundColor: "#f5426f",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }} name="MemberScreen" component={MemberScreen}/>

          <Stack.Screen options={{
            title: "My Profile",
            headerStyle: {
              backgroundColor: "#f5426f",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }} name="MyScreen" component={MyScreen}/>
       </Stack.Navigator>
    
    </NavigationContainer>
  );
}