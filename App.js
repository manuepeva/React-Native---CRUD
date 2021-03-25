import React, {useState} from 'react';
import Header from './components/header/Header'
import ListItem from './components/listItem/ListItem'
import AddItem from './components/addItem/AddItem'
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'}
  ])
  
  const deleteItem = (id) => {
    setItems(preItem =>  {
      return preItem.filter(item => item.id !== id)
    })
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert(
        "Empty Fields not allowed!",
        "Please enter data",
        [
          {
            text: "Cancel",
            onPress: () => console.log('Cancel pressed'),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => console.log("OK pressed")
          }
        ]
      )
    }else {
      setItems(prevItem => {
        return [{id: uuidv4(), text}, ...prevItem]
      })
    }
  }
  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>} />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  }
})

export default App