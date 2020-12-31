import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from './cart.png';
import user from './user.png';

const Cart = (props) => {
  return (
    <View style={{position: 'relative', marginBottom: 40}}>
      <Text style={styles.text}>BlogCara.id</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          right: 120,
          top: 10,
        }}>
        <View style={styles.cartWrapper}>
          <Image source={cart} style={styles.cart} />
          <Text style={styles.textNotif}>{props.quantity}</Text>
        </View>
      </View>
      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          right: 10,
          top: 20,
        }}>
        <Text>Account</Text>
        <Image source={user} style={styles.user} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    borderWidth: 1,
    width: 20,
    height: 20,
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  textNotif: {
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
  user: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'green',
    marginTop: 30,
  },
});

export default Cart;
