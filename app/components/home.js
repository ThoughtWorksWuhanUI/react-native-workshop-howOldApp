import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.goHowOld}>Press me to go to HowOld page.</Text>
      </View>
    )
  }
}