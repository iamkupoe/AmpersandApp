import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';



export default function RegisterScreen(){
    return(
        <View style={styles.registerContainer}>
           <Image source ={require('./assets/profile.jpg')} style={styles.profilePic}/>

               <View style={styles.nameContainer}>
                    <Text style={styles.fullNameText}>Full Name</Text>

                    <TextInput style={styles.fullNameText} placeholder="Samuel Kupoe"/>
                </View>
                
                <View style={styles.emailContainer}>
                    <Text style={styles.emailText}>Email</Text>

                    <TextInput style={styles.emailText} placeholder="developerkupoe@gmail.com"/>
                </View>

                <View style={styles.phoneNumberContainer}>
                    <Text style={styles.phoneNumberText}>Phone Number</Text>
    
                    <TextInput style={styles.phoneNumberText} placeholder="+233 546 635 848"/>
        
                </View>

                <View style={styles.roleContainer}>
                    <Text style={styles.roleText}>Role</Text>

                    <TextInput style={styles.roleText} placeholder="Fullstack Developer"/>
            
                </View>

                <View style={styles.twitterContainer}>
                <Text style={styles.twitterText}>Twitter</Text>

                <TextInput style={styles.twitterText} placeholder="@iamkupoe"/>
            
                </View>

                <View style={styles.linkedInContainer}>
                    <Text style={styles.linkedInText}>LinkedIn</Text>

                    <TextInput style={styles.linkedInText} placeholder="/samuel-kupoe-39339558"/>
            
                </View>

           
           <View style={styles.touchableContainer}>
              <TouchableOpacity style={styles.opacity}>
                 <Text style={styles.touchableText}>REGISTER</Text>
              </TouchableOpacity> 
          </View>

        </View>
    )
}

const styles=StyleSheet.create({
    registerContainer: {
        flex: 1,
        backgroundColor: "#fff"
    },

    profilePic: {
        width: 400,
        height: 180
    },

    nameContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        marginVertical: 10,
        paddingBottom: 5
    },

    fullNameText: {
        fontSize: 15
    },

    emailContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        marginVertical: 10,
        paddingBottom: 5
    },

    emailText: {
        fontSize: 15
    },

    phoneNumberContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        marginVertical: 10,
        paddingBottom: 5

    },

    phoneNumberText: {
        fontSize: 15
    },

    roleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        marginVertical: 10,
        paddingBottom: 5
    },

    roleText: {
        fontSize: 15
    },

    twitterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        marginVertical: 10,
        paddingBottom: 5
    },

    twitterText: {
        fontSize: 15
    },

    linkedInContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        marginVertical: 10,
        paddingBottom: 5
    },

    linkedInText: {
        fontSize: 15
    },

    touchableContainer: {
        marginTop: 20,
        alignItems: "center",
        
    },

    opacity: {
        backgroundColor: "#fe2b4c",
        width: 320,
        height: 40,
        borderRadius: 5

    },

    touchableText: {
        textAlign: "center",
        paddingTop: 8,
        color: "#fff",
        fontSize: 20
    }

})