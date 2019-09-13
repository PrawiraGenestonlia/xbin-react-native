import { StyleSheet } from 'react-native';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    text: {
      marginVertical: 16,
    },
    intro: {
      marginTop: 80,
    },
    p: {
      marginTop: 10,
      fontSize: 20,
      textAlign: 'center',
    }
  });
