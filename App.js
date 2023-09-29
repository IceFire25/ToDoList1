import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Platform, Button } from 'react-native';
import Header from './components/header';
import ListItem from './components/list';
import Form from './components/form';

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        { text: "Купить ...", key: "1"},
        { text: "Помыть ...", key: "2"},
        { text: "Сделать ...", key: "3"},
    ]);
  return (
    <View style={styles.container}>
    <Header />
    <Form/>
        <View>
            <FlatList style={styles.text}
            data={listOfItems} 
            renderItem={({ item }) => <ListItem el={item} style={styles.text}>{item.text}</ListItem>}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
  },
  form: {
    flex: 1,
  },
  text:{
    fontSize: 40,
    color: "blue",
},
});
