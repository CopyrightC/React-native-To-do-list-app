import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, KeyboardAvoidingView, Platform , TextInput, Button, Keyboard} from 'react-native';
import Tasks from './components/tasks';



export default function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const addTask = () => {
      Keyboard.dismiss();
      setItems([...items, task]);
      setTask("");
  }

  const Delete = (index) =>  {
      let copy = [...items];
      copy.splice(index,1);
      setItems(copy);
  }
  return (
    <View style={styles.container}>

        <View style = {styles.app}>
          <Text style = {styles.header}> Pending tasks </Text>

          <View style= {styles.items}>
            {
              
            items.map((items,index) => {
              return (
                <TouchableOpacity onPress = {() => Delete(index)} key ={index}>
                  <Tasks text = {items}/>
                </TouchableOpacity>
              )
            }
              )

            }
          </View>
        </View>
        <KeyboardAvoidingView behavior = {Platform.OS == "ios"? "padding" : "height"} style = {styles.inputArea} >
        <TextInput style = {styles.input} placeholder = "I gotta do..." value = {task} onChangeText = {text => setTask(text)}/>
        <TouchableOpacity onPress = {() => addTask()}>
          <View style = {styles.button}>
              <Text style={styles.btnIcon}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
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

  items : {
    marginTop : 30,
  },
  inputArea : {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    marginLeft : 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
   
  button : {
    width: 60,
    height: 60,
    backgroundColor: '#E3E9EE',
    borderRadius: 60,
    marginRight : 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  
  },

  input : {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#E3E9EE',
    borderRadius: 15,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 230,
  }

});
