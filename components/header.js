import React from "react";
import { StyleSheet, View, Text, Platform, Button } from "react-native";

export default Header = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    main: {
        backgroundColor: "orange",
        fontSize: 30,

    },
    text:{

    },
});