import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import MateriFlexBox from './MateriFlexbox';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import NavbarMenu from './NavbarMenu';
import PropsDinamis from './PropsDinamis';
import StateDinamis from './StateDinamis';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <MateriFlexBox />
        <NavbarMenu />
        <StylingReactNativeComponent />
        <PropsDinamis /> */}
        <StateDinamis />
      </ScrollView>
    </View>
  );
};

export default App;
