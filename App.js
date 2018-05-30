import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './app/components/home';
import HowOld from './app/components/howOld';

const App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  HowOld: {
    screen: HowOld,
    navigationOptions: {
      title: 'How Old',
    },
  }
});

export default App;