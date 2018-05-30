import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: 1000,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    color: '#048BA8',
    marginLeft: 5,
  },
});

export default ({ text }) => (
  <View style={styles.container}>
    <ActivityIndicator size="small" color={'#048BA8'} />
    <Text style={styles.text}>{text}</Text>
  </View>
);
