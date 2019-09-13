import * as React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import globalstyle from './global.stylesheet';
import style from './settings.stylesheet';
import { Button, Layout, Text } from 'react-native-ui-kitten';

export default function SettingsScreen(props) {
  const { navigation } = props;
  const _clickLogout = () => {
    // Alert.alert("Logout", "You have logged out!");
    AsyncStorage.setItem('userToken', '');
    navigation.navigate('AuthLoading');
  }
  return (
    <Layout style={globalstyle.container}>
      <Button onPress={_clickLogout}>Logout</Button>
    </Layout>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};