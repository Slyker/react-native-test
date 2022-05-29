import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import FuncComp from "./components/FuncComp.jsx"
import ClassComp from "./components/ClassComp.jsx"
type Props = {};
export default class MyApp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <FuncComp/>
          <ClassComp/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
   
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'grey'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});

// You must register the main component
// with the same name as the project
AppRegistry.registerComponent(
  'my-rn-app-2', () => MyApp
);
