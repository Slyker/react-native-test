import React, {Component,useEffect} from 'react';
import {AppRegistry, StyleSheet,Switch, Button,Text, View} from 'react-native';

type Props = {};
export default class ClassComp extends Component<Props> {
  constructor(props){
    super(props)
     this.timeOut = 3
     this.timeout;
     this.interval;
    this.state={
      count:0,
      countDown:0,
      isDouble:false,
      timeoutRes:0
    }
    this.alertResult = () => {
      this.interval = clearInterval(this.interval);
      this.timeout = clearTimeout(this.timeout);
      this.setState({countDown:this.timeOut})
     }
  }
  componentDidUpdate (prevProps,prevState) {
    if(!this.timeout){
      
      this.timeout = setTimeout(() => {
        //alert(`Count : ${this.state.count}`);
          this.setState({timeoutRes:this.state.count})
      }, this.timeOut * 1000);
    }
     if(!this.interval ){
       
       
      this.interval = setInterval(() => {
        if(this.state.countDown > 0){
          this.setState({countDown:this.state.countDown-1})
        }
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
          Timeout countdown : {this.state.countDown}
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
         <Button
          onPress={()=>{this.setState({count:0});this.alertResult()}}
          title="Reset"
          color="black"
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
