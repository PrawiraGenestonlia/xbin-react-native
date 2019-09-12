import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import TabBarIcon from '../components/TabBarIcon';
import { LoginScreen } from '../screens';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    ...config,
    initialRouteName: 'Login'
  }
);

AuthStack.navigationOptions = {
  headerStyle: {
    backgroundColor: '#ffffff',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerTitle: <LogoTitle />,
  headerRight: (
    <Button
      onPress={() => alert('This is a button!')}
      title="sign up"
      color="#fff"
    />
  ),
};

AuthStack.path = '';

export default AuthStack;