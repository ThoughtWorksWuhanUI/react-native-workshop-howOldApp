import React from 'react';
import _ from 'lodash';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { getFaceInfo } from '../utils/face';

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
    getFaceInfo(this.imagePath).then(res => console.log(res)).catch(err => console.log(err));
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