import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import macbookpro from './macbookpro.jpg';
import macbookair from './macbookair.jpg';

const StylingReactNativeComponent = () => {
  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <View>
          <View style={{marginTop: -20}}>
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
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default StylingReactNativeComponent;
