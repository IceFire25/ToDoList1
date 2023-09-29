import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({el, delteHandler}) {
    return (
        <TouchableOpacity onPress={( )=> delteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        padding: 20,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
    },
});