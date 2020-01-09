import React from "react";
import {StyleSheet,Text,View,StatusBar}from "react-native";
import * as Location from 'expo-location';

export default function Loading(){
    return (
       
    <View style={style.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={style.text}>
            Getting the fucking Weather
        </Text>

    </View>
    );
    
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-end",
        paddingVertical:100,
        paddingHorizontal: 30,
        backgroundColor: "#FDF6AA"
    },
    text:{
        color:"#2c2c2c",
        fontSize: 30

    }

})