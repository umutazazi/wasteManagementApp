const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", {
    uri: image,
    type: "image/jpeg",
    name: "photo.jpeg",
  });

  try {
    const response = await fetch(
      "http://192.168.1.10:8000/img_object_detection_to_json",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};
export { uploadImage };
