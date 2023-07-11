import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Modal, Image } from 'react-native';
import {Video} from "expo-av";
import Lottie from 'lottie-react-native';

export default function Page() {
  const [isModalVisible, setModalVisible] = useState(false);
  const video = React.useRef(null)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/blue-birthday.png')} style={styles.image} />
      <Lottie source={require('./assets/97299-confetti-burst-animation.json')} autoplay loop={true} style={{ width: 350, height: 350 }} />
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          {/* <Image source={require('./assets/birthday.png')} style={styles.modalImage} /> */}
          <Video
          ref={video}
          source={require("./party.mp4")}
        useNativeControls
              style={styles.video}
              
              resizeMode="contain"
            />
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#1e90ff',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalImage: {
    width: 400,
    height: 350,
    resizeMode: 'contain',
  },
  video: {
    flex: 1,
    alignSelf: 'stretch'
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: '#1e90ff',
    padding: 12,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});


