import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import MateriFlexBox from './MateriFlexbox';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        <MateriFlexBox />
        <StylingReactNativeComponent />
      </ScrollView>
    </View>
  );
};

export default App;
