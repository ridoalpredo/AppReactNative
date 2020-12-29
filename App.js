import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Hello World </Text>
        <Text style={{color: "blue", fontSize: 14}}> Rido Alpredo </Text>
      </View>

    );
  }
}
