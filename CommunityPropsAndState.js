import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from './Cart';
import Product from './Product';

const CommunityPropsAndState = (props) => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View style={styles.container}>
      <Text>
        Materi Komunikasi antara component - product dan cart - props dan state
      </Text>
      <Cart quantity={totalProduct} />
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
    </View>
  );
};

export default CommunityPropsAndState;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
