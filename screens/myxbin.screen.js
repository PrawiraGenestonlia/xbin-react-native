import React, { useState, useEffect } from 'react';
import { Button, Alert } from 'react-native';
import globalstyle from './global.stylesheet';
import { Layout, Text } from 'react-native-ui-kitten';

const _clickAddNew = () => {
  // Alert.alert("Add");
  myxbin._addData();
}

export default function myxbin(props) {
  const { navigation } = props;
  // const [xbinData, setxBinData] = useState();   

  const _addData = () => {
    Alert.alert("Add");
  }
  return (
    <Layout style={globalstyle.container}>
      <Text style={globalstyle.text} category='h4'>PageName</Text>
    </Layout>
  );
}

myxbin.navigationOptions = {
  title: 'My xBin',
  headerRight: (
    <Button
      onPress={_clickAddNew}
      title="+"
    // color="#fff"
    />
  ),
};

// myxbin.navigationOptions = ({ navigation, _clickAddNew }) => {
//   return ({
//     title: 'My xBin',
//     headerRight: (
//       <Button
//         onPress={_clickAddNew}
//         title="+"
//       // color="#fff"
//       />
//     ),
//   }
//   )
// };