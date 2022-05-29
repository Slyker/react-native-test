import React, {Component,useEffect} from 'react';
import {AppRegistry, StyleSheet,Switch, Button,Text, View} from 'react-native';

type Props = {};
export default class ClassComp extends Component<Props> {
  constructor(props){
    super(props)
    this.state={
      count:0,
      isDouble:false,
      timeoutRes:0
    }
    this.alertResult = () => {
    setTimeout(() => {
        //alert(`Count : ${this.state.count}`);
          this.setState({timeoutRes:this.state.count})
      }, 1000);
  }
    
  }
  render() {
    let val = (this.state.isDouble)?2:1
    
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
          Welcome to class count : {this.state.count}
        </Text>
        <Text style={styles.welcome}>
          Timeout result : {this.state.timeoutRes}
        </Text>
         <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={this.state.isDouble ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(res)=>{this.setState({isDouble:res})}}
            value={this.state.isDouble}
          />
        <Button
          onPress={()=>{this.setState({count:this.state.count+val});this.alertResult()}}
          title="Count more"
          color="#841584"
          accessibilityLabel=""
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    width:"100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});
