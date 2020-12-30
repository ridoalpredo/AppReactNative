import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import MateriFlexBox from './MateriFlexbox';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import NavbarMenu from './NavbarMenu';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        <MateriFlexBox />
        <NavbarMenu />
        <StylingReactNativeComponent />
      </ScrollView>
    </View>
  );
};

export default App;
