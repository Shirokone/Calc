import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles.js';


export class TouchMe extends Component {
render(){
    return (
      <TouchableOpacity onPress={this.props.func} style={[styles.button, {flex: this.props.flex}, {backgroundColor: this.props.color}]}><Text style={styles.text}>{this.props.title}</Text></TouchableOpacity>
    )
  }
}
