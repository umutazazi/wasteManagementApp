import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button title="Login" />
      <Button title="Register" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomePage;
