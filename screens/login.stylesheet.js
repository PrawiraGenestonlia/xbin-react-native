import { StyleSheet } from 'react-native';

export default () =>
  StyleSheet.create({
    login: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,0.3)',
      width: '75%',
      marginTop: 30,
      borderRadius: 15,
      maxHeight: 200
      // height: 10,
    },
    datainput: {
      padding: 10,
    },
    signuptagline: {
      fontSize: 17,
      padding: 2
    },
    signup: {
      color: 'blue',
      fontStyle: 'italic'
    }
  });
