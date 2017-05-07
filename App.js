// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Provider } from 'react-redux';
//
// import createStore from './src/store';
//
// import AppWithNavigationState from './src/AppWithNavigationState';
//
// export default () => (
//   <Provider store={createStore()}>
//     <AppWithNavigationState />
//   </Provider>
// );
// import React, { Component } from 'react';
// import { View, StyleSheet, Button, Alert } from 'react-native';
// import { Constants, Facebook } from 'expo';
//
// export default class App extends Component {
//   _handleFacebookLogin = async () => {
//     try {
//       const { type, token } = await Facebook.logInWithReadPermissionsAsync(
//         '1201211719949057', // Replace with your own app id in standalone app
//         { permissions: ['public_profile'] }
//       );
//
//       switch (type) {
//         case 'success': {
//           // Get the user's name using Facebook's Graph API
//           const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//           const profile = await response.json();
//           Alert.alert(
//             'Logged in!',
//             `Hi ${profile.name}!`,
//           );
//           break;
//         }
//         case 'cancel': {
//           Alert.alert(
//             'Cancelled!',
//             'Login was cancelled!',
//           );
//           break;
//         }
//         default: {
//           Alert.alert(
//             'Oops!',
//             'Login failed!',
//           );
//         }
//       }
//     } catch (e) {
//       Alert.alert(
//         'Oops!',
//         'Login failed!',
//       );
//     }
//   };
//
//   render() {
//     return (
//       <View style={styles.container}>
//
//         <Button
//           title="Login with Facebook"
//           onPress={this._handleFacebookLogin}
//         />
//
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   }
// });
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper-animated';

const styles = {
  wrapper: {
    backgroundColor: '#009688',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e91e63',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#673ab7',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f51b5',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

export default () => <Swiper
  style={styles.wrapper}
  smoothTransition
  loop
>
  <View style={styles.slide1}>
    <Text style={styles.text}>Hello Swiper</Text>
  </View>
  <View style={styles.slide2}>
    <Text style={styles.text}>Beautiful</Text>
  </View>
  <View style={styles.slide3}>
    <Text style={styles.text}>And simple</Text>
  </View>
</Swiper>;
