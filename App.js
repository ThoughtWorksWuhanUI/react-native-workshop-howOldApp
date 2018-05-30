import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './app/components/home';
import HowOld from './app/components/howOld';
import { COLOR } from "./app/constants/color";

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
},
{
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: COLOR.BLUE,
    },
    headerTintColor: COLOR.WHITE,
  }
});

export default App;