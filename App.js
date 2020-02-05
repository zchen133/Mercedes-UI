import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import initialization from './src/initialization.js';
import menu from './src/menu.js';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createSwitchNavigator({
  initialization,
  menu,
}, {
  initialRouteName: 'initialization',
  backgroundColor: '#111111'
})

export default createAppContainer(AppNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
