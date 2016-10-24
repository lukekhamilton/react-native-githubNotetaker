/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// var Main = require('./App/Components/Main');
import Main from './App/Components/Main';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

export default class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute = {{
          title: 'Github NoteTaker',
          component: Main
        }} />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});


AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
