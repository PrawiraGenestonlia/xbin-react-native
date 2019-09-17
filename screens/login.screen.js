import React, { useState } from 'react';
import { ImageBackground, View, Alert, Button, AsyncStorage, Image, TextInput } from 'react-native';
import { Layout, Text, Input } from 'react-native-ui-kitten';
import globalstyle from './global.stylesheet';
import style from './login.stylesheet';
import BackgroundImage from '../assets/images/landscape1.jpg';
import WhiteLogo from '../assets/images/xBin-white.png';

export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(0);

  const _toggleLoginSignup = () => {
    setIsSignup(!isSignup);
  }
  const _clickSignUp = () => {
    //api
    Alert.alert("Sign up", "You have signed up successfully");
  }

  const _clickLogin = () => {
    //axios

    //if res 200
    if (1) {
      //api
      Alert.alert("Login", "You have successfully login");
      AsyncStorage.setItem('userToken', '12345');
      navigation.navigate('AuthLoading');
    }

  }


  return (
    <Layout style={globalstyle.container}>
      <ImageBackground source={BackgroundImage} style={{ width: '100%', height: '100%' }}>
        <View style={globalstyle.container}>
          <ImageBackground source={WhiteLogo} style={{ width: 50, height: 50, marginTop: 50 }} />
          <Text style={globalstyle.intro} category='h4'>Welcome back!</Text>
          <Text style={globalstyle.p}>Welcome to the xBin! Please login to your account.</Text>
          <View style={style.login}>
            <TextInput placeholder="Email" autoCapitalize="none" autoCorrect={false} style={{ textAlign: 'center' }} value={email} onChangeText={(text) => setEmail(text)} />
            <Text style={style.datainput}>password</Text>
            {isSignup ?
              <Button title="Sign up" onPress={_clickSignUp}></Button> :
              <Button title="Login" onPress={_clickLogin}></Button>
            }
          </View>
          <View>
            {isSignup ?
              <Text style={style.signuptagline}>Already have an account? <Text style={style.signup} onPress={_toggleLoginSignup}>Login</Text> here!</Text> :
              <Text style={style.signuptagline}>New to xBin? <Text style={style.signup} onPress={_toggleLoginSignup}>Sign up</Text> here!</Text>
            }

          </View>
        </View>
      </ImageBackground>
    </Layout>
  );
}