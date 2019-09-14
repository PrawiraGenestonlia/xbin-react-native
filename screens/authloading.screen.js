import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Button, Layout, Text } from 'react-native-ui-kitten';

export default function AuthLoadingScreen(props) {
  const { navigation } = props;
  // Fetch the token from storage then navigate to our appropriate place
  useEffect(() => {
    _bootstrapAsync();
  }, [])

  const _bootstrapAsync = async () => {
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