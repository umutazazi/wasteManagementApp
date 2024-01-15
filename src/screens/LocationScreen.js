import React from "react";
import { View, StyleSheet, Text } from "react-native";

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LocationScreen</Text>
    </View>
  );
};

export default LocationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
  },
});
