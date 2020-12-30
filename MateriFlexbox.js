import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View>
          <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>
            React Native
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            borderColor: 'blue',
            borderWidth: 1,
          }}>
          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
          <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
          <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <Image
            source={{
              uri:
                'https://pajaaleksic.com/wp-content/uploads/2019/07/react-native-workshop.jpg',
            }}
            style={{width: 100, height: 100, borderRadius: 50, marginLeft: 6}}
          />
          <View style={{marginLeft: 15}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Rido Alpredo Sihaloho
            </Text>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>
              10 Juta Subcriber
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: 15,
            paddingBottom: 15,
            borderColor: 'blue',
            borderWidth: 1,
            backgroundColor: 'yellow',
          }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
