import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageSvg from '././Source/Image/ImageSvg.svg';

const ReactNativeSvg = () => {
  return (
    <View>
      <Text>Materi Menggunakan SVG di React Native</Text>
      <View>
        <ImageSvg width={400} height={250} />
        {/* format menyisipkan file SVG lokal */}
      </View>
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({});
