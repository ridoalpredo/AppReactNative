import React from 'react';
import { Image, Text, View } from 'react-native';


const App = () => {
  return (
    <View>
    <View style={{width: 80, height: 80, backgroundColor: "red", borderRadius: 50}}/>
    <Text>Rido Alpredo</Text>
    <Home />
    <Gambar />
    </View>
  )
}

const Home = () => {
  return <Text>Sihaloho</Text>
};

const Gambar = () => {
  return (
    <Image source={{uri: "https://placeimg.com/640/480/tech"}}
    style={{width: 100 , height: 100, borderRadius: 10}}
    />
  )
}

export default App;