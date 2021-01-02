import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

const CallAPIAxios = () => {
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

  const getData = () => {
    axios
      .get('https://reqres.in/api/users/3')
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => console.log('err: ', err));
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log('post response: ', json);
    //     setDataJobs(json);
    //   });

    axios
      .post('https://reqres.in/api/users', dataForAPI)
      .then((result) => {
        setDataJobs(result.data);
      })
      .catch((err) => console.log('err ', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Call API Axios</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>

      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}

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

export default CallAPIAxios;

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
