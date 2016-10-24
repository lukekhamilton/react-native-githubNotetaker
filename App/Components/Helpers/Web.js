import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  WebView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});

class Web extends Component{
  render(){
    return(
      <View style={styles.container}>
        <WebView source={{uri: this.props.url}} />
      </View>
    )
  }
}

Web.propTypes = {
  url: React.PropTypes.string.isRequired
}

module.exports = Web;
