import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeScreen from './HomeScreen';
import RegisterSignIn from './RegisterSigninScreen';
import SignIn from './SignInScreen';
import RegisterScreen from './RegisterScreen';
import ScanQrScreen from './ScanQrScreen';
import ScanScreen from './ScanScreen';
import MemberScreen from './MemberProfile';
import MyScreen from './MyProfile';

export default function App() {
  return (
    <View style={styles.container}>
      <ScanScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
