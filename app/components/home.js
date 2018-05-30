import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import ImagePicker, { showImagePicker } from "react-native-image-picker";

const IMAGE_PICKER_OPTIONS = {
  title: 'Use your own photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default class Home extends React.Component {
  goHowOld = () => {
    this.props.navigation.navigate('HowOld')
  };

  showImagePicker = () => {
    ImagePicker.showImagePicker(IMAGE_PICKER_OPTIONS, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.props.navigation.navigate('HowOld', {
          selectedImage: response.uri,
        });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.goHowOld}>Press me to go to HowOld page.</Text>
        <Button onPress={this.showImagePicker} title="Use your own photo" />
      </View>
    )
  }
}