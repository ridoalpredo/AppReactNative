import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View, Image} from 'react-native';

const DataAnggota = () => {
  return (
    <View style={styles.data}>
      <Image
        source={{uri: 'https://placeimg.com/80/80/animals'}}
        style={{width: 80, height: 80, marginTop: 10, borderRadius: 80}}
      />

      <View style={{marginLeft: 10, marginTop: 10}}>
        <Text style={styles.namaLengkap}>Nama Lengkap</Text>
        <Text style={styles.email}>Email</Text>
        <Text style={styles.bidang}>Bidang</Text>
      </View>
      <View>
        <Text style={styles.delete}>X</Text>
      </View>
    </View>
  );
};

const Crud = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>UI CRUD</Text>
      <View style={styles.line} />
      <Text style={styles.container}>Masukkan Anggota React Native</Text>
      <TextInput placeholder="Nama Lengkap" style={styles.textInput} />
      <TextInput placeholder="Email" style={styles.textInput} />
      <TextInput placeholder="Bidang" style={styles.textInput} />
      <Button title="SIMPAN" />
      <View style={styles.line} />
      <DataAnggota />
      <DataAnggota />
      <DataAnggota />
    </View>
  );
};

export default Crud;

const styles = StyleSheet.create({
  container: {
    padding: 6,
  },
  tittle: {
    textAlign: 'center',
    fontSize: 15,
  },
  line: {
    backgroundColor: 'black',
    height: 2,
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    margin: 6,
    borderRadius: 25,
  },
  data: {
    flexDirection: 'row',
  },
  namaLengkap: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
  },
  bidang: {
    fontSize: 12,
  },
  delete: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 150,
  },
});
