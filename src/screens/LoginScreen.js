import React from "react";
import { View, StyleSheet } from "react-native";




const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Login Page</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center'
    }
})


export default LoginScreen;