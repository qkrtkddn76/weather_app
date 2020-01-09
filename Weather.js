import React from "react";
import PropTypes from "prop-types";
import {View,Text,StyleSheet,StatusBar} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"안개낌",
        subtitle:"Hazzzzzzzzzzzzzzze"
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#FF7300","#FEF253"],
        title:"",
        subtitle:""
    },
    Sunny:{
        iconName:"weather-sunny",
        gradient:["#FF7300","#FEF253"],
        title:"",
        subtitle:""
    },
    Thurnderstorm: {
      iconName:"ios-thunderstorm",
      gradient:["#74ebd5","#ACB6E5"]  
    },
    Drizzle: {
      iconName:"",
      gradient:[]  
    },
    Rain: {
      iconName:"",
      gradient:[]  
    },
    Snow: {
      iconName:"",
      gradient:[]  
    },
    Atmosphee: {
      iconName:"",
      gradient:[]  
    },
    Clouds: {
      iconName:"",
      gradient:[]  
    },
    Mist: {
      iconName:"",
      gradient:[]  
    },
    Dust: {
      iconName:"",
      gradient:[]  
    }
}

export default function Weather({temp,condition}){
    return (
    
    <LinearGradient colors={weatherOptions[condition].gradient} 
        style={styles.container}>

       <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
            <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
    
    );
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thurnderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphee",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Sunny"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems:"center"
    },
    temp:{
        fontSize:42,
        color:"white"
        
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    title:{
        color: "white",
        fontSize:44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle:{
        color: "white",
        fontSize:24,
        fontWeight:"600"

    },
    textContainer:{
        alignItems:"flex-start"
    }
});