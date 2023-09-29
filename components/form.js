 import React, {useState} from "react";
 import { StyleSheet, TextInput, text, Button, View} from 'react-native';

 export default function Form() {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View style={styles.main}>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Впишите задачу..."/>
        </View>
    );
 }

 const styles = StyleSheet.create({
    main: {
        alignItems: "flex-start",
        justifyContent: "center",
        height: 100,
        marginHorizontal: 80,
    },
    input:{
        fontSize: 20,
        color: "white",
        marginVertical: 10, 
    },
});