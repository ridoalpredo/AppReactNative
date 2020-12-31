import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import macbookpro from './macbookpro.jpg';
import macbookair from './macbookair.jpg';

const Product = (props) => {
  return (
    <ScrollView>
      <View style={styles.wrapperStyling}>
        <Image
          source={macbookpro}
          style={{width: 188, height: 107, borderRadius: 8}}
        />

        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2020
        </Text>

        <Text style={styles.textHarga}>Rp. 21.500.000</Text>

        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.styleButton}>
            <Text style={styles.textBeli}>BELI</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textHarga: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 14,
    color: 'orange',
  },
  wrapperStyling: {
    backgroundColor: '#F2F2F2F2',
    padding: 12,
    width: 212,
    borderRadius: 8,
  },
  textBeli: {
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  styleButton: {
    borderWidth: 1,
    backgroundColor: '#6FCf92',
    borderRadius: 25,
    paddingVertical: 6,
    marginTop: 20,
  },
});

export default Product;
