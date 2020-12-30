import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import macbookpro from './macbookpro.jpg';
import cart from './cart.png';

const StylingReactNativeComponent = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{marginTop: 30}}>
        <Text style={styles.text}>Styling Komponent</Text>
        <View
        // style={{
        //   width: 100,
        //   height: 100,
        //   backgroundColor: 'blue',
        //   borderWidth: 2,
        //   borderColor: 'red',
        //   marginTop: 10,
        //   marginLeft: 10,
        // }}
        />
        <View
          style={{
            backgroundColor: '#F2F2F2F2',
            padding: 12,
            width: 212,
            borderRadius: 8,
          }}>
          <Image
            source={macbookpro}
            style={{width: 188, height: 107, borderRadius: 8}}
          />

          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
            New Macbook Pro 2020
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 14,
              color: 'orange',
            }}>
            Rp. 21.500.000
          </Text>

          <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
            Jakarta Barat
          </Text>

          <View
            style={{
              borderWidth: 1,
              backgroundColor: '#6FCf92',
              borderRadius: 25,
              paddingVertical: 6,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                textAlign: 'center',
                color: 'white',
              }}>
              BELI
            </Text>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={styles.cartWrapper}>
          <Image source={cart} style={styles.cart} />
          <Text style={styles.text2}>1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
  cart: {
    borderWidth: 1,
    width: 20,
    height: 20,
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text2: {
    fontSize: 15,
    fontWeight: '700',
    backgroundColor: 'green',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    right: -8,
    padding: 1,
    textAlign: 'center',
  },
});

export default StylingReactNativeComponent;
