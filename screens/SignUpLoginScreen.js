import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal } from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class SignUpLoginScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: ''
    }
  }

  showModal(){
    <Modal>
      <TextInput
        style = {styles.loginBox}
        placeholder = {"First Name"}
        maxLength={12}
        onChangeText = {text => {
         this.setState({
           firstName: text
         }) 
        }}/>
      <TextInput
        style = {styles.loginBox}
        placeholder = {"Last Name"}
        maxLength = {12}
        onChangeText = {text => {
          this.setState({
            lastName: text
          })
        }}/>
      <TextInput
        style = {styles.loginBox}
        placeholder = {"Phone Number"}
        maxLength = {10}
        onChangeText = {text => {
          this.setState({
            phoneNumber: text
          })
        }}/>
      <TextInput
        style = {styles.loginBox}
        placeholder = {"Address"}
        onChangeText = {text => {
          address: text
        }}/>
      <TextInput
        style = {styles.loginBox}
        placeholder = {"Email Id"}
        onChangeText = {text => {
          emailId: text
        }}/>
      <TextInput
        style = {styles.loginBox}
        placeholder = {"password"}
        onChangeText = {text => {
          password: text
        }}/>
      <TextInput
        style = {styles.loginBox}
        placeholder = {"confirm password"}
        onChangeText = {text => {
          confirmPassword: text
        }}/>
      <TouchableOpacity style = {styles.button}>
      onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
      <Text style = {styles.button}>
        Register
      </Text>
      </TouchableOpacity>
    </Modal>
  } 

  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      return Alert.alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (emailId, password) =>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      return Alert.alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
         
          <Text style={styles.title}>My App</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@gmail.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        
        <TextInput
          style = {styles.loginBox}
          palceholder = "first name"
          placeholderTextColor = "#ffff"
          onChangeText = {(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        
        <TextInput
          style = {styles.loginBox}
          palceholder = "last name"
          placeholderTextColor = "#ffff"
          onChangeText = {(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.showModal()}}
            
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F8BE85'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },
  loginBox:{
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  },
  buttonContainer:{
    flex:1,
    alignItems:'center'
  }
})