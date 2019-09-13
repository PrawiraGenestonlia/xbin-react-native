import React, { useEffect } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Auth: AuthNavigator,
    Main: MainTabNavigator,
  },
    {
      initialRouteName: 'AuthLoading',
    })
);

function AuthLoadingScreen(props) {
  const { navigation } = props;
  // Fetch the token from storage then navigate to our appropriate place
  useEffect(() => {
    _bootstrapAsync();
  }, [])

  _bootstrapAsync = async () => {
    try {
      const userToken = '';
      // userToken = await AsyncStorage.getItem('userToken');
      AsyncStorage.getItem('userToken', (err, result) => {
        // console.log(result);
        navigation.navigate(result ? 'Main' : 'Auth');
      });
      // navigation.navigate(userToken ? 'Main' : 'Auth');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginVertical: 16,
  },
});