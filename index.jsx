import React, {Component,useState} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import FuncComp from "./components/FuncComp.jsx"
import ClassComp from "./components/ClassComp.jsx"
import UseTo from "./components/useTo.jsx"
type Props = {};
export default MyApp = (props) =>{
  const [test,setTest]=useState("before")
  const a = () =>{
           if(true){
              return <UseTo class delay="2" cb={()=>{
                console.log("test")
                setTest("after")//working with classes 
              }}>       
              <View style={styles.container}>
                  <Text style={styles.welcome}>
                     useTo.jsx {test}
                  </Text> 
              </View>
            </UseTo>
              
            }else{
              return <View style={styles.container} >
              <Text style={styles.welcome}> 
              {UseTo({
                delay:3,
                cb:()=>{console.log("test")}
               })} </Text> 
              </View> 
            }
  }
 
  return (
     <View style={styles.container}>
          <FuncComp/>
          <ClassComp/>
          {a()}
       <View style={styles.container}>
       <Text>index.jsx {test}
       </Text>
       </View>
      </View>
    
  )
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
