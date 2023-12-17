import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <TextInput placeholder="Username" style={styles.textInput} />
      <TextInput placeholder="Password" style={styles.textInput} />
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>Register</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5ebd78",
    padding: 20,
  },
  welcomeText: {
    fontSize: 50,
    color: "white",
    fontWeight: "200",
  },
  textInput: {
    margin: 10,
    width: "50%",
    height: "5%",
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 10,
  },
  buttonStyle: {
    backgroundColor:'white',
    borderRadius:5,
    margin:10,
    padding:10

  },
});

export default LoginScreen;
