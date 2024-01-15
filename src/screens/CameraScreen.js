import { React, useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, Button, Modal, Image } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

const CameraScreen = () => {
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isFromCamera, setIsFromCamera] = useState(false);

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
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
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
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={{ uri: isFromCamera ? capturedPhoto : selectedImage }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Kapat" onPress={() => setModalVisible(false)} />
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
});
