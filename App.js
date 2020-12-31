import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import MateriFlexBox from './MateriFlexbox';
import SampleComponent from './SampleComponent';
import Product from './Product';
import Cart from './Cart';
import PropsDinamis from './PropsDinamis';
import StateDinamis from './StateDinamis';
import CommunityPropsAndState from './CommunityPropsAndState';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <MateriFlexBox /> */}
        {/* <Cart /> */}

        <CommunityPropsAndState />
        {/* <Product /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
      </ScrollView>
    </View>
  );
};

export default App;
