import React, {Component} from 'react';
import {Platform, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './components/styles.js';
import {TouchMe} from './components/TouchMe.js';
var data = require('./components/buttons.json');

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      result: "",
    }
  }

  output(num){
    var patt = /\.+\d*$/g;
    var patt2 = /[\*\/\+\-\.]+$/g

    if(this.state.result == "" && ['+','*','/'].includes(num) || this.state.result == "NaN" || this.state.result == "Infinity" || this.state.result == "ERROR" || num == "Result"){
    } else if(num == "." && patt.test(this.state.result)){
    } else if(patt2.test(this.state.result) && ['+','*','/'].includes(num)){
    } else if(/\-+$/g.test(this.state.result) && num == "-"){
    } else {
      this.setState({result: this.state.result + num});
    }

    if(num == "Reset"){
      this.setState({result: ""});
    }

    if(num == "Back"){
      if(this.state.result != "Infinity" && this.state.result != "NaN" && this.state.result != "ERROR"){
        this.setState({result: this.state.result.substring(0, this.state.result.length - 1)});
      }
    }

    if(num == "Result"){
      if(this.state.result != ""){
        if(this.state.result.endsWith("*") || this.state.result.endsWith("/") || this.state.result.endsWith("+") || this.state.result.endsWith("-") || this.state.result.endsWith(".")){
        } else {
          try {
            var after = eval(this.state.result).toString();
            this.setState({result: after});
          } catch(e){
            console.log(e)
            this.setState({result: "ERROR"});
          }
        }
      }
    }
  }

  render() {
    var views = [];
    var row = [];
    for (let i in data.buttons){
      for(let j=0; j<data.buttons[i].length; j++){
      row.push(<TouchMe title={data.buttons[i][j].title} func={() => this.output(data.buttons[i][j].func)} flex={data.buttons[i][j].flex} color={data.buttons[i][j].color} key={i*j}/>);
      }
      views.push(<View style={styles.numrow} key={i}>{row}</View>);
      var row = [];
    }
    return (
    <View style={styles.container}>
      <View style={styles.resultbox}>
        <Text style={styles.resulttext}>{this.state.result}</Text>
      </View>
      <View style={styles.buttonbox}>
        <View style={styles.insidebuttonbox}>{views}</View>
      </View>
    </View>
    );
  }
}
