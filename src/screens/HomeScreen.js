import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {

 

    return ( 
        <View style={styles.mainContainer}>
           <View style={styles.imageContainer}>
              <Image source ={require("../../assets/ampersand.png")}style={ styles.logo}/>
           </View>

               <View style={styles.textContainer}>
                  <Text style={styles.text1}>Ampersand</Text>
                  <Text style={styles.text2}>contacts</Text>
               </View>
                

              <TouchableOpacity onPress={()=>navigation.navigate("RegisterSignIn")} style={styles.startedContainer}>
                  <Text style={styles.getStarted}>GET STARTED</Text>
              </TouchableOpacity>
         

        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
       flex: 1,
       backgroundColor: "#CAC8b6"
    },
    imageContainer: {
         marginTop: 150,
         alignItems: "center"
    },
    logo: {
       width: 270,
       height: 80
    },

    text1: {
        fontSize: 30,
    },

    text2: {
        fontSize: 30
    },

    textContainer: {
        marginTop: 150,
        alignItems: "center"
    },

    startedContainer: {
        marginTop: 150,
        alignItems: "center"
    },

    getStarted: {
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: "red"
    },



})
