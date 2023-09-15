import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        { text: "Купить ...", key: "1"},
        { text: "Помыть ...", key: "2"},
        { text: "Сделать ...", key: "3"},
    ]);
  return (
    <View style={styles.header}>
    <Header />
        <View>
            <FlatList
            data={listOfItems}
            renderItem={({ item }) => <Text>{item.text}</Text>}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
  },
});
