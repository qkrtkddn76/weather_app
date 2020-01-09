import React from 'react';
import Loading from "./Loader"
import * as Location from "expo-location"
import { Alert, ToastAndroid } from 'react-native';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "29e43d62320eacfd30389a56a351d85b";

export default class extends React.Component {
  state={
    isLoading: true
  };
  getWeather = async(latitude,longitude) =>{
    const {
      data:{
      main:{temp},
      weather 
    }} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APIKEY=${API_KEY}&units=metric`
      );
     
      this.setState({
        isLoading:false,
        condition:weather[0].main,
        temp
      });
  }
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude,longitude}
      } = await Location.getCurrentPositionAsync();
      console.log(latitude,longitude);
      this.getWeather(latitude,longitude);
    }catch(error){
      Alert.alert("Can't find you","So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp,condition} = this.state;
    return isLoading ? <Loading/> :<Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

