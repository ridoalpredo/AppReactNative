import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import MateriFlexBox from './MateriFlexbox';
import SampleComponent from './SampleComponent';
import Product from './Product';
import Cart from './Cart';
import PropsDinamis from './PropsDinamis';
import StateDinamis from './StateDinamis';
import CommunityPropsAndState from './CommunityPropsAndState';
import ReactNativeSvg from './ReactNativeSvg';
import CallAPIVanila from './CallAPIVanila';
import CallAPIAxios from './CallAPIAxios';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <MateriFlexBox /> */}
        {/* <Cart /> */}
        {/* <CommunityPropsAndState /> */}
        {/* <Product /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <ReactNativeSvg /> */}
        {/* <CallAPIVanila /> */}
        <CallAPIAxios />
      </ScrollView>
    </View>
  );
};

export default App;
