import React from 'react';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import globalstyle from './global.stylesheet';

export default function LoginScreen() {
  return (
    <Layout style={globalstyle.container}>
      <Text style={globalstyle.text} category='h4'>Login Screen</Text>
    </Layout>
  );
}