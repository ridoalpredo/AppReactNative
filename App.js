import React, { Component } from 'react';
import { Image, Text, TextInput, View, StyleSheet } from 'react-native';
import macbookpro from './macbookpro.jpg';

const App = () => {
  return (
  //  <SampleComponent />
   <StylingReactNativeComponent />
  )
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Komponent</Text>
      <View style=
      {{width: 100, 
      height: 100, 
      backgroundColor: 'blue', 
      borderWidth: 2, 
      borderColor: 'red',
      marginTop: 10,
      marginLeft : 10
    }}/>
    <View style={{
      backgroundColor: '#F2F2F2F2', 
      padding: 12, 
      width: 212,
      borderRadius : 8,
      
      }}>
      <Image source={macbookpro} 
      style={{width: 188, 
      height: 107,
      borderRadius: 8,
      }}/>

      <Text style={{fontSize: 14, 
        fontWeight: 'bold', 
        marginTop: 16,
        }}>New Macbook Pro 2020</Text>

      <Text style={{fontSize: 12, 
        fontWeight: 'bold', 
        marginTop: 14,
        color : 'orange'
        }}>Rp. 21.500.000</Text>

      <Text style={{fontSize: 12, 
        fontWeight: '300', 
        marginTop: 12,
        }}>Jakarta Barat</Text>

      <View style={{
        borderWidth: 1,
        backgroundColor : '#6FCf92',
        borderRadius : 25,
        paddingVertical: 6,
        marginTop: 20,

        }}>
        <Text style={{
          fontWeight: '600', 
          fontSize: 18, 
          textAlign: 'center',
          color: 'white',
          }}>BELI</Text>
      </View>

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize : 20,
    fontWeight : 'bold',
    marginLeft : 10,
    color : 'green',
    marginTop: 10,
  },

});


const Home = () => {
  return <Text>Ini Fungsional Komponen</Text>
};

const Gambar = () => {
  return (
    <Image source={{uri: "https://placeimg.com/640/480/tech"}}
    style={{width: 100 , height: 100, borderRadius: 10}}
    />
  )
}

class Boxgreen extends Component {
  render(){
    return(
      <Text>Ini Class Komponent</Text>
    )
  }
}

class Profile extends Component {
  render(){
    return(
      <View>
      <Image source={{uri: 'https://placeimg.com/640/480/animals'}} 
      style={{width: 100, height: 100, borderRadius: 50}}/>
      <Text style={{color: "blue", fontSize: 20, fontWeight: "bold"}}>Ini Gambar Hewan</Text>
      </View>
    )
  }
}

const SampleComponent = () => {
  return (
    <View>
    <View style={{width: 80, height: 80, backgroundColor: "red", borderRadius: 50}}/>
    <Text>Rido Alpredo</Text>
    <Home />
    <Gambar />
    <TextInput style={{borderWidth:1, borderColor: "blue"}}/>
    <Boxgreen />
    <Profile />
    </View>
  )
}
export default App;