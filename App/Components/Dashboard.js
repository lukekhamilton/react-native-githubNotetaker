import React, { Component } from 'react';
import Api from '../Utils/Api';
import Profile from './Profile';
import Repositories from './Repositories';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends Component {
  makeBackground(btn){
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if(btn === 0){
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1){
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  }
  goToProfile(){
    this.props.navigator.push({
      title: 'Profile Page',
      component: Profile,
      passProps: {userInfo: this.props.userInfo}
    });
  }
  goToRepos(){
    Api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
          component: Repositories,
          title: 'Repositories',
          passProps: {
            userInfo: this.props.userInfo,
            repos: res
          }
        });
      });
  }
  goToNotes(){
  Api.getNotes(this.props.userInfo.login)
    .then((jsonRes) => {
      jsonRes = jsonRes || {};
      this.props.navigator.push({
        component: Notes,
        title: 'Notes',
        passProps: {
          notes: jsonRes,
          userInfo: this.props.userInfo
        }
      });
    });
  }
  // goToNotes(){
  //   Api.getNotes(this.props.userInfo.login)
  //     .then((res) => {
  //       console.log(res)
  //     });
  //
  //     //
  //     // .then((jsonRes) => {
  //     //   jsonRes = jsonRes || {};
  //     //   this.props.navigator.push({
  //     //     component: Notes,
  //     //     title: 'Notes',
  //     //     passProps: {
  //     //       notes: jsonRes,
  //     //       userInfo: this.props.userInfo
  //     //     }
  //     //   });
  //     // });
  // }
  render() {
    return(
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}></Image>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = Dashboard;
