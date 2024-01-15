import { React, useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, Button, Modal, Image } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { uploadImage } from "../services/aiService";

const CameraScreen = () => {
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isFromCamera, setIsFromCamera] = useState(false);
  const [predictedImageName, setPredictedImageName] = useState(null);

  const cameraRef = useRef(null);
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      const { status: mediaLibraryStatus } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (cameraStatus !== "granted" || mediaLibraryStatus !== "granted") {
        console.error("İzinler reddedildi");
      }
    })();
  }, []);
  useEffect(() => {
    const requestMediaLibraryPermissions = async () => {
      const imagePickerStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
    };

    requestMediaLibraryPermissions();
  });

  const choosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setIsFromCamera(false);
      setModalVisible(true);
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        let photo = await cameraRef.current.takePictureAsync();
        if (photo) {
          setCapturedPhoto(photo.uri);
          setSelectedImage(photo.uri);
          setIsFromCamera(true);
          setModalVisible(true);
        } else {
          console.log("Photo is null");
        }
      } catch (err) {
        console.error("Error taking picture:", err);
      }
    }
  };
  const predict = async () => {
    try {
      const image = await uploadImage(selectedImage);
      if (image && image.detect_objects && image.detect_objects.length > 0) {
        const name = image.detect_objects[0].name;
        setPredictedImageName(name);
      } else {
        setPredictedImageName("Can not predicted!");
      }
    } catch (error) {
      console.error("Error loading image", error);
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button color={"green"} title="Take Photo" onPress={takePicture} />
          <Button
            color={"green"}
            title="Choose From Library"
            onPress={choosePhoto}
          />
        </View>
      </Camera>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalPhoto}>
            <Image
              source={{ uri: isFromCamera ? capturedPhoto : selectedImage }}
              style={styles.previewImage}
            />
          </View>
          <View style={styles.modalCardStyle}>
            <Text style={styles.textPredict}>{predictedImageName}</Text>
            {<Button color={"green"} title="Predict" onPress={predict} />}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCardStyle: {
    backgroundColor: "white",

    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  modalPhoto: {
    backgroundColor: "white",
    width: "90%",
    height: "70%",
    margin: 20,
    borderRadius: 20,
  },
  previewImage: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  textPredict: {
    padding: 5,
    fontSize: 20,
    fontWeight: "500",
  },
});
