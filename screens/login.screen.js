import React from 'react';
import { ImageBackground, View } from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import globalstyle from './global.stylesheet';
import BackgroundImage from '../assets/images/landscape1.jpg';

export default function LoginScreen() {
  return (
    <Layout style={globalstyle.container}>
      <ImageBackground source={BackgroundImage} style={{ width: '100%', height: '100%' }}>
        <View style={globalstyle.container}>
          <Text style={globalstyle.intro} category='h4'>Hello!</Text>
        </View>
      </ImageBackground>
    </Layout>
  );
}