import React, { Component } from 'react';
import {View,Image,Text,StyleSheet,TouchableOpacity, TextInput, ScrollView } from 'react-native';



export default class SignIn extends Component{

    constructor(props){
        super(props);
          this.state = {
            Email:"",
           Password:""
            
          };
        }

        render(){
            
            return(
                
                    <View style={style.logInContainer}>
                    <View style={style.logInImageContainer}>
                        <Image style={style.logInImage} source={require('../../assets/login.jpg')}/> 
                    </View>
        
                    <View style={style.sectionTwoContainer}>
                        <View style={style.emailPasswordInputContainer}>
                                <View style={style.emailTextContainer}>
                                    <Text style={style.emailPasswordText}>
                                        Email
                                    </Text>
                                </View>
                               <View>
                                    <TextInput
                                        placeholder="john.smith@mail.com" value={this.state.email}
                                        onChangeText={(email) => {
                                          this.setState({ email });
                                        }}                                   
                                        style={style.emailPasswordInput}></TextInput>
                                </View>                          
                                
                            </View>
        
                            <View style={style.passwordInputContainer}>
                                <Text style={style.passwordText}>
                                    Password
                                </Text>
                                <TextInput 
                                    placeholder="......" secureTextEntry={true} value={this.state.password}
                                    onChangeText={(password) => {
                                      this.setState({ password });
                                    }}
                                    style={style.passwordInput}
                                    ></TextInput>
                                
                            </View>
        
                                
                            <View style={style.signInBtnContainer}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate("MyScreen")} style={style.signInBtn}>
                                    <Text style={style.signInBtnText}>
                                        SIGN IN
                                    </Text>
                                </TouchableOpacity>                        
                            </View>
                            <View style={style.forgotTextResetBtnContainer}>
                                <Text style={style.forgotText}>
                                    Forgot ?
                                </Text>
                                <TouchableOpacity style={style.resetBtn}>
                                    <Text style={style.resetBtnText}>
                                        Reset Password
                                    </Text>
                                </TouchableOpacity> 
                                
                            </View>
                       </View>
        
        
                   </View>
                    
                
                    
                )
            }
        }

        

const style=StyleSheet.create({
    logInContainer:{
        flex:1,        
        backgroundColor:'#fff', 
  },
  
  logInImage:{
    width:420,
    height:220,
},

sectionTwoContainer:{
    paddingVertical:20,
    paddingHorizontal:25,
    marginTop:80,
  },

  emailPasswordInputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
    paddingBottom:20,
    borderStyle:'solid',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
},

emailPasswordText:{
    fontSize:17,
    paddingRight:15,
  },

emailPasswordInput:{
    fontSize:17,
    textAlign:'right', 
    color: "gray"
  },

  emailInputContainer:{
    textAlign:'right'   
},

passwordText:{
    fontSize:17,
    paddingRight:15,
    
  },

  passwordInput: {
    fontSize: 17,
    fontWeight: 'bold',
    color: "gray"
  },

  passwordInputContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
   
  },

  signInBtnContainer:{     
    justifyContent:'center',
    marginTop:55,
    marginBottom:40,   
},

signInBtn:{
    backgroundColor:"#fe2b4c",
    paddingHorizontal:100,
    paddingVertical:10,
    borderRadius:4,
},
signInBtnText:{
    color:'white',
    fontSize:18,
    textAlign: 'center',
    
},

forgotTextResetBtnContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    
  },

  forgotText:{
    fontSize:18,
    marginVertical:5,
    paddingRight:6,
},

resetBtnText:{
    fontSize:18,
    borderStyle:'solid',
    borderBottomColor:'red',
    paddingBottom:5,
    margin:5,
    borderBottomWidth:2,
  },

  signInMsg:{
    marginVertical:10,  
    fontSize:15,
    color:"#ccc",
    textAlign:'left'
    
  },
  signInImage:{
      width:420,
      height:220,
  },
 
})