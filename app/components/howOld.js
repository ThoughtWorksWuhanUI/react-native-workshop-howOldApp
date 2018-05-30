import React from 'react';
import _ from 'lodash';
import Loading from './Loading';
import { Alert, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { getFaceInfo } from '../utils/face';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    height: 'auto',
  },
  ageInfo: {
    flex: 1,
    position: 'absolute',
    bottom: 10,
    left: 10,
    zIndex: 100
  }
});

export default class HowOld extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    getFaceInfo(this.imagePath).then(ageInfos => {
      this.ageInfos = ageInfos;
    }).catch(errorMessage => {
      Alert.alert(errorMessage);
    }).finally(() => {
      this.setState({ loading: false });
    })
  }

  get imagePath() {
    return _.get(this.props, 'navigation.state.params.selectedImage')
  }

  renderAgeInfo() {
    if(_.isEmpty(this.ageInfos)) {
      return;
    }
    return (
      <View style={styles.ageInfo}>
        {this.ageInfos.map(ageInfo => <Text key={ageInfo.faceId}>Gender: {ageInfo.faceAttributes.gender}, Age: {ageInfo.faceAttributes.age}</Text>)}
      </View>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        {loading && <Loading text="Waiting..." />}
        <View style={styles.imageContainer}>
          <Image source={{uri: this.imagePath}} style={styles.image} resizeMode="contain"/>
          {!loading && this.renderAgeInfo()}
        </View>
      </View>
    )
  }
}