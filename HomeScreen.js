import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import CalendarSchedulerScreen from "./CalendarSchedulerScreen";

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#61dafb"
            animated={true}
            />
            <Text style={styles.TextStyle}>Home Screen</Text>
        </View>

    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignContent: 'center',
    },
    TextStyle:{
        textAlign:'center',
        marginTop:10
    },
});