import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CallAPIVanila = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    firts_name: '',
    last_name: '',
  });

  const [dataJobs, setDataJobs] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {}), [];

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('post response: ', json);
        setDataJobs(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Call API Vanila.js</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.firts_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJobs.name}</Text>
      <Text>{dataJobs.job}</Text>
    </View>
  );
};

export default CallAPIVanila;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  container: {
    padding: 6,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
