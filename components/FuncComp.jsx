import React, {Component,useState,useEffect} from 'react';
import {AppRegistry, StyleSheet,Switch,Button, Text, View} from 'react-native';
import useTimeout from "./useTimeout.jsx"

type Props = {};
export default FuncComp = (props) => {
  let interval;
  let timeout;
  const timeOut = 3
  const [initial, setInitial] = useState(false)
  const [countDown,setCountDown] = useState(0)
  const [count,setCount] = useState(0)
  const [timeoutRes,setTimeoutRes] = useState(0)
  const [isDouble,setIsDouble] =useState(false)
  
  let val = (isDouble)?2:1
  const alertResult = () => {
    
    clearTimeout(timeout)
    /*setTimeout(() => { //Doesnt works with states 
        //alert(`Count : ${count}`);
          setTimeoutRes(count)
      }, 1000);*/
  }
  useEffect(() =>{
     interval = setInterval(() => {
      if(countDown > 0){
        setCountDown(seconds => seconds - 1);
     
      }else{
        interval = clearInterval(interval);
      }
      
    }, 1000);
    return () => interval = clearInterval(interval);
  }, [countDown]);
  
  useEffect(() => { // works !! trigger when count is updated
    if(initial){
      setCountDown(timeOut)
    }else{
      setInitial(true)
    }
    timeout = setTimeout(() => {
      setTimeoutRes(count);
    }, timeOut * 1000);

   return () => timeout = clearTimeout(timeout);
  },[count]);

  /*useTimeout(() => {
      setTimeoutRes(count)
    }, 1000);*/
  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to function count : {count}
        </Text>
         <Text style={styles.welcome}>
          Timeout countdown : {countDown}
        </Text>
        <Text style={styles.welcome}>
          Timeout result : {timeoutRes}
        </Text>
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDouble ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setIsDouble}
            value={isDouble}
          />
          
        <Button
          onPress={()=>{setCount(count+val);alertResult()}}
          title="Count more"
          color="red"
          accessibilityLabel=""
        />
         <Button
          onPress={()=>{setCount(0);alertResult()}}
          title="Reset"
          color="white"
          accessibilityLabel=""
        />
      </View>
  )
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
