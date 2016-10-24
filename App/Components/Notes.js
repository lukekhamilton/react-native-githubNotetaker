import React, {Component} from 'react';
import Api from '../Utils/Api';
import Separator from './Helpers/Separator';
import Badge from './Helpers/Badge';

import {
  View,
  Text,
  ListView,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10
  },
  rowContainer: {
    padding: 10,
  },
  footerContainer: {
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

class Notes extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.notes),
      note: '',
      error: ''
    }
  }
  handleSubmit(e){
    this.setState({
      note: e.nativeEvent.text
    })
  }
  handleChange(){
    var note = this.state.note;
    this.setState=({
      note: ''
    });
    Api.addNote(this.props.userInfo.login, note)
      .then((data) => {
        Api.getNotes(this.props.userInfo.login)
          .then((data) => {
            this.setState({
              dataSource: this.ds.cloneWithRows(data)
            })
          });
      })
      .catch((error) => {
        console.log('Request Error: ', error);
        this.setState({error});
      });
  }
  renderRow(rowData){
    return(
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData} </Text>
        </View>
        <Separator />
      </View>
    )
  }
  footer(){
    return(
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.searchInput}
          value={this.state.note}
          onChange={this.handleChange.bind(this)}
          placeholder="New Note"
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="#88D4F5">
            <Text style={styles.buttonText}> Submit </Text>
        </TouchableHighlight>
      </View>
    )
  }
  render(){
    return(
      <View style={styles.container}>
        <ListView
          enableEmptSections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader = {() => <Badge userInfo: {this.props.userInfo} />}
        />
        {this.footer()}
      </View>
    )
  }
}

Notes.propTypes = {
  userInfo: React.PropTypes.object.isRequired,
  notes: React.PropTypes.object.isRequired
}

module.exports = Notes;
