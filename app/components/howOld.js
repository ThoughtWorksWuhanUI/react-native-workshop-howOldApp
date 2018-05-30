import React from 'react';
import _ from 'lodash';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

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
  render() {
    const imagePath = _.get(this.props, 'navigation.state.params.selectedImage');
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: imagePath}} style={styles.image} resizeMode="contain"/>
        </View>
      </View>
    )
  }
}