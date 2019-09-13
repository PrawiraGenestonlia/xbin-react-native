import React from 'react';
import { StyleSheet } from 'react-native';
import globalstyle from './global.stylesheet';
import { Button, Layout, Text } from 'react-native-ui-kitten';

export default function _name(props) {
  const { navigation } = props;
  return (
    <Layout style={globalstyle.container}>
      <Text style={globalstyle.text} category='h4'>PageName</Text>

    </Layout>
  );
}

_name.navigationOptions = {
  title: '_name',
};