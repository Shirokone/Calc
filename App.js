/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      result: "",
    }
  }

  number(num){
    var patt = /\.+\d*$/g;
    var patt2 = /[\*\/\+\-\.]+$/g

    if(this.state.result == "" && ['+','*','/'].includes(num) || this.state.result == "NaN" || this.state.result == "Infinity"){
    } else if(num == "." && patt.test(this.state.result)){
    } else if(patt2.test(this.state.result) && ['+','*','/'].includes(num)){
    } else if(/\-+$/g.test(this.state.result) && num == "-"){
    } else {
      this.setState({result: this.state.result + num});
    }

  }

  reset = () => {
    this.setState({result: ""});
  }

  back = () => {
    if(this.state.result != "Infinity" && this.state.result != "NaN"){
      this.setState({result: this.state.result.substring(0, this.state.result.length - 1)});
    }
  }

  result = () => {
    if(this.state.result != ""){
      if(this.state.result.endsWith("*") || this.state.result.endsWith("/") || this.state.result.endsWith("+") || this.state.result.endsWith("-") || this.state.result.endsWith(".")){
      } else {
        try {
          var after = eval(this.state.result).toString();
          this.setState({result: after});
        } catch(e){
          console.log(e)
        }
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultbox}>
          <Text style={styles.resulttext}>{this.state.result}</Text>
        </View>

        <View style={styles.buttonbox}>

          <View style={styles.insidebuttonbox1}>

            <View style={styles.numrow}>
              <TouchableOpacity onPress={this.reset} style={styles.button3}><Text style={styles.text}>AC</Text></TouchableOpacity>
              <View style={styles.filler}></View>
              <TouchableOpacity onPress={this.back} style={styles.button3}><Text style={styles.text}>←</Text></TouchableOpacity>
            </View>

            <View style={styles.numrow}>
              <TouchableOpacity onPress={() => this.number('7')} style={styles.button1}><Text style={styles.text}>7</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.number('8')} style={styles.button1}><Text style={styles.text}>8</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.number('9')} style={styles.button1}><Text style={styles.text}>9</Text></TouchableOpacity>
            </View>

            <View style={styles.numrow}>
              <TouchableOpacity onPress={() => this.number('4')} style={styles.button1}><Text style={styles.text}>4</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.number('5')} style={styles.button1}><Text style={styles.text}>5</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.number('6')} style={styles.button1}><Text style={styles.text}>6</Text></TouchableOpacity>
            </View>

            <View style={styles.numrow}>
              <TouchableOpacity onPress={() => this.number('1')} style={styles.button1}><Text style={styles.text}>1</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.number('2')} style={styles.button1}><Text style={styles.text}>2</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.number('3')} style={styles.button1}><Text style={styles.text}>3</Text></TouchableOpacity>
            </View>

            <View style={styles.numrow}>
              <View style={styles.viewbot0}>
                <TouchableOpacity onPress={() => this.number('0')} style={styles.button1}><Text style={styles.text}>0</Text></TouchableOpacity>
              </View>
              <View style={styles.container}>
                <TouchableOpacity onPress={() => this.number('.')} style={styles.button1}><Text style={styles.text}>.</Text></TouchableOpacity>
              </View>
            </View>

          </View>

          <View style={styles.insidebuttonbox2}>
            <TouchableOpacity onPress={() => this.number('*')} style={styles.button2}><Text style={styles.text}>x</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.number('/')} style={styles.button2}><Text style={styles.text}>÷</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.number('+')} style={styles.button2}><Text style={styles.text}>+</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => this.number('-')} style={styles.button2}><Text style={styles.text}>-</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.result} style={styles.button2}><Text style={styles.text}>=</Text></TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultbox: {
    flex: 1,
    paddingRight: 10,
    backgroundColor: '#484a4c',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderWidth: 0.5,
    borderColor: '#484a4c',
  },
  buttonbox: {
    flex: 4,
    flexDirection: 'row',
  },
  insidebuttonbox1: {
    flex: 3,
    backgroundColor: 'gray',
  },
  insidebuttonbox2: {
    flex: 1,
    backgroundColor: '#9eade2',
  },
  numrow:{
    flex: 1,
    flexDirection: 'row',
  },
  viewbot0: {
    flex: 2,
  },
  button1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#484a4c',
    backgroundColor: 'darkgray',
  },
  button2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#484a4c',
    backgroundColor: '#afbcea',
  },
  button3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#484a4c',
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  resulttext:{
    color: 'white',
    fontSize: 45,
    textAlign: 'right',
  },
  filler: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#484a4c',
  },
});
