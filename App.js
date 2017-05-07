import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Login from 'react-native-simple-login'

const onLogin = (email, password) => {
  console.log(email, password) // user credentials
}

const onResetPassword = (email) => {
  console.log(email)
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Login
          onLogin={onLogin}
          onResetPassword={onResetPassword}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
