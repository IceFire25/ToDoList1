 import React, {useState} from "react";
 import { StyleSheet, TextInput, text, Button, View} from 'react-native';

 export default function Form() {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);

    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Впишите задачу..."/>
        </View>
    );
 }

 const styles = StyleSheet.create({

 });