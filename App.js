import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tasks from './components/tasks';


export default function App() {
  return (
    <View style={styles.container}>

        <View style = {styles.app}>
        <Text style = {styles.header}> Pending tasks </Text>

        <Tasks/>

        </View>
    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },
  app : {
    paddingTop : 60,
    paddingHorizontal : 20,
  },
  header : {
    fontSize : 20,
    fontWeight : "bold",
  },

  lists : {

  }

});
