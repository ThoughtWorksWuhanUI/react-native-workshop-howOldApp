import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { COLOR } from "../constants/color";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR.TRANSPARENT,
    zIndex: 1000,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    color: COLOR.BLUE,
    marginLeft: 5,
  },
});

export default ({ text }) => (
  <View style={styles.container}>
    <ActivityIndicator size="small" color={COLOR.BLUE} />
    <Text style={styles.text}>{text}</Text>
  </View>
);
