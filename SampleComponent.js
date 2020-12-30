import React, {Component} from 'react';
import {Image, Text, TextInput, View, StyleSheet} from 'react-native';
import macbook from './macbookpro.jpg';

const SampleComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.text}>Menggunakan komponen TEXT</Text>
      <TextInput style={{borderWidth: 1, borderColor: 'blue', width: 350}} />
      <Text style={styles.text}>Ini Komponen INPUT TEXT</Text>
      <Image
        source={macbook}
        style={{width: 188, height: 107, borderRadius: 10}}
      />
      <Text style={styles.text}> Ini Komponen IMAGE</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green',
    marginTop: 10,
  },
});
export default SampleComponent;
