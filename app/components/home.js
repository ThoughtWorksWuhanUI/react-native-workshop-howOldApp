import React from 'react';
import { Alert, View, Text, StyleSheet, Button, TouchableWithoutFeedback, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLOR } from "../constants/color";
import { SCREEN } from "../constants/screen";

import ImagePicker, { showImagePicker } from "react-native-image-picker";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN.width,
    height: SCREEN.width,
  },
});

const IMAGE_PICKER_OPTIONS = {
  title: 'Use your own photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
};

const DEFAULT_IMAGES = [
  'https://how-old.net/Images/faces2/scroll000.jpg',
  'https://how-old.net/Images/faces2/scroll001.jpg',
  'https://how-old.net/Images/faces2/scroll002.jpg',
  'https://how-old.net/Images/faces2/scroll003.jpg',
  'https://how-old.net/Images/faces2/scroll004.jpg',
];

const MAX_IMAGE_FILE_SIZE = 4 * 1000 * 1000;

export default class Home extends React.Component {
  goHowOld = (uri) => {
    this.props.navigation.navigate('HowOld', {
      selectedImage: uri,
    })
  };

  showImagePicker = () => {
    ImagePicker.showImagePicker(IMAGE_PICKER_OPTIONS, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        if (response.fileSize > MAX_IMAGE_FILE_SIZE) {
          return Alert.alert('please select image less than 4M');
        }
        this.goHowOld(response.uri)
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper activeDotColor={COLOR.BLUE}>
          {DEFAULT_IMAGES.map((uri) => (
            <TouchableWithoutFeedback key={uri} onPress={() => this.goHowOld(uri)}>
              <View style={styles.slide}>
                <Image style={styles.image} source={{uri}}/>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </Swiper>
        <Button onPress={this.showImagePicker} title="Use your own photo" />
      </View>
    )
  }
}