import React, {Component, PropTypes} from 'react';
import Badge from './Badge';
import Separator from './Helpers/Separator';

import {
  Text,
  ScrollView,
  Image,
  View,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

class Profile extends Component {
  listDetails(userInfo){
    // var userInfo = this.props.userInfo;
    var topicArr = ['company', 'location', 'followers','following','email','bio','public_repos'];
    return list = topicArr.map((item, index) => {
        if(!userInfo[item]){
          return <View key={index} />
        } else {
          return(
            <View key={index}>
              <View style={styles.rowContainer}>
                <Text style={styles.rowTitle}> {this.getRowTitle(item)} </Text>
                <Text style={styles.rowContent}> {userInfo[item]} </Text>
              </View>
              <Separator />
            </View>
          );
        }
    });
  }
  getRowTitle(item){
    return item[0].toUpperCase() + item.slice(1).replace('_',' ');
  }
  render(){
    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {this.listDetails(this.props.userInfo)}
      </ScrollView>
    );
  }
}

module.exports = Profile;
