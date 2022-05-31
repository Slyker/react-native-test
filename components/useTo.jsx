import React, {Component,useState,useEffect} from 'react';
import {AppRegistry, StyleSheet,Switch,Button, Text, View} from 'react-native';

type Props = {};
export default UseTo = (props) => {
  let timeout;
  
  const [result,setResult] = useState("before")
  useEffect(() => { // works !! trigger when count is updated
  console.log("effect trigfered")
    timeout = setTimeout(() => {
      setResult("after")
      props.cb()
    }, props.delay * 1000);
   return () => timeout = clearTimeout(timeout);
  },[props.delay]);
  if(!props.class){
    return result
  }
  return props.children
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    width:"100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#B0B0B0',
    marginBottom: 5,
  },
});
