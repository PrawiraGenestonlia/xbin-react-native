import * as React from 'react';
import { StyleSheet } from 'react-native';
import globalstyle from './global.stylesheet';
import { Button, Layout, Text } from 'react-native-ui-kitten';

export default function HomeScreen() {
  return (
    <Layout style={globalstyle.container}>
      <Text style={globalstyle.text} category='h4'>Welcome to UI Kitten</Text>
      <Button>BUTTON</Button>
    </Layout>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};