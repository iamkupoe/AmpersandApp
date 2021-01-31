import React from 'react';
import {View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native';


export default function RegisterSignIn({ navigation }) {

        return(
            <View style={style.container}>

                <View style={style.signInImageContainer}>
                    <Image style={style.signInImage} source={require("../../assets/sign.jpg")}/> 
                </View>

                <View style={style.textContainer}>
                    <Text style={style.msgText}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
                    <Text style={style.signInMsg}>Sign in or register with your Ampersand email</Text>

                    <View style={style.registerSingInBtnContainer}>
                        <View style={style.registerBtnContainer}>
                            <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={style.registerBtn}>
                                <Text style={style.registerBtnText}>
                                    REGISTER
                                </Text>
                            </TouchableOpacity>                        
                        </View>
                        <View style={style.signInBtnContainer}>
                            <TouchableOpacity onPress={()=>navigation.navigate("SignIn")} style={style.signInBtn}>
                                <Text style={style.signInBtnText}>
                                    SIGN IN
                                </Text>
                            </TouchableOpacity>
                        
                        </View>
                    </View>
                </View>
                

        </View>
        )
    }

const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',      
  },

  signInImage:{
    width:450,
    height:400,
},

textContainer:{
    paddingVertical:20,
    paddingHorizontal:25,
  },

  msgText:{
    fontSize:20,
    color:"#888",
    textAlign:'left', 
    marginHorizontal: 20
},

signInMsg:{
    marginVertical:10, 
    marginHorizontal: 20, 
    fontSize:18,
    color:"#ccc",
    textAlign:'left'  
  },

registerSingInBtnContainer:{
    flexDirection:"row",
    
    marginTop:100,
},

registerBtn: {
 marginLeft: 30
},

registerBtnText:{
    fontSize:18,
    borderStyle:'solid',
    borderBottomColor:'red',
    paddingBottom:5,
    marginHorizontal:5,
    borderBottomWidth:2,
    marginRight: 70,
    marginLeft: -15
  },

  signInBtnText: {
    fontSize:18,
    borderStyle:'solid',
    borderBottomColor:'red',
    paddingBottom:5,
    marginHorizontal:5,
    borderBottomWidth:2,
    marginLeft: 50
  },

  signInImageContainer:{
      justifyContent:"center",   

  },
  
  textContainer:{
    marginVertical:50,
    textAlign:'center',
    alignItems:'center'
  },
 
})
