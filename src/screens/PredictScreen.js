import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image, Modal } from "react-native";

const PredictScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardStyle}>
        <Button color={"green"} title="Take Photo" onPress={takePhoto} />
        <Button color={"green"} title="Choose Photo" onPress={choosePhoto} />
        <Button color={"green"} title="Predict" onPress={predict} />
      </View>
      <View style={styles.photo}>
        {selectedImage && (
          <Image
            source={{ uri: selectedImage.assets[0].uri }}
            style={styles.previewImage}
          />
        )}
      </View>
      <Text style={styles.text}>{predictedImageName}</Text>
    </View>
  );
};

export default PredictScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    backgroundColor: "white",
    width: "90%",
    height: "15%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  photo: {
    backgroundColor: "white",
    width: "70%",
    height: "50%",
    margin: 20,
    borderRadius: 20,
  },
  previewImage: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
