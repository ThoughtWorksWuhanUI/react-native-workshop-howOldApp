import { Platform } from 'react-native';
import React from 'react';
import _ from 'lodash';
import { Alert, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    marginTop: 50,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    height: 'auto',
  }
});

export default class HowOld extends React.Component {
  componentDidMount() {
    const imagePath = this.imagePath;
    const imageUrl = Platform.OS === 'ios' ? _.replace(imagePath, 'file://', '')  : imagePath;
    const headers = {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': 'replace-this-with-your-secret-key',
    };
    RNFetchBlob.fetch('POST', 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age,gender', headers, RNFetchBlob.wrap(imageUrl))
      .then((res) => {
        const data = _.get(res, 'data');
        const faceInfo = _.isEmpty(data) ? null : JSON.parse(data);
        const error = _.get(faceInfo, 'error');

        if(!_.isEmpty(error)) console.log("error", error);
        if (_.isEmpty(faceInfo)) console.log("no people in the image");
        console.log("result", res);
      })
      .catch((err) => {
        Alert.alert(err);
      });
  }

  get imagePath() {
    return _.get(this.props, 'navigation.state.params.selectedImage')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: this.imagePath}} style={styles.image} resizeMode="contain"/>
        </View>
      </View>
    )
  }
}