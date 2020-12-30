import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const PropsDinamis = (props) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          fontWeight: '600',
          color: 'blue',
          textAlign: 'center',
          paddingBottom: 10,
        }}>
        Props Dinamis
      </Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Story judul="Rido" gambar="https://placeimg.com/70/70/arch" />
          <Story judul="Alpredo" gambar="https://placeimg.com/70/70/animals" />
          <Story judul="Sihaloho" gambar="https://placeimg.com/70/70/arch" />
          <Story judul="React" gambar="https://placeimg.com/70/70/nature" />
          <Story judul="Native" gambar="https://placeimg.com/70/70/people" />
          <Story judul="Hello World" gambar="https://placeimg.com/70/70/tech" />
        </View>
      </ScrollView>
    </View>
  );
};

const Story = (props) => {
  return (
    <View>
      <View>
        <Image
          source={{uri: props.gambar}}
          style={{width: 70, height: 70, borderRadius: 70 / 2, margin: 5}}
        />
        <Text>{props.judul}</Text>
      </View>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
