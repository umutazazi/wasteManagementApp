import React from 'react';
import { View, StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native';





const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.registerText}>Register</Text>
           <TextInput style={styles.textInput} placeholder='Firstname'/>
           <TextInput style={styles.textInput} placeholder='Lastname'/>
           <TextInput style={styles.textInput} placeholder='Username'/>
           <TextInput style={styles.textInput} placeholder='Password'/>
         
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>Register</Text>
      </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#5ebd78",
        padding: 20,
    },
    textInput:{
        margin: 10,
        width: "50%",
        height: "5%",
        backgroundColor: "white",
        borderRadius: 5,
        paddingLeft: 10,

    },
    registerText: {
        fontSize: 50,
        color: "white",
        fontWeight: "200",
        margin:10
      },
      buttonStyle: {
        backgroundColor:'white',
        borderRadius:5,
        margin:10,
        padding:10},
      
})
export default RegisterScreen;