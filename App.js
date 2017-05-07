import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { BottomNav } from '/../components/BottomNav';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tumfoodery</Text>
        <Text>The "Dating App" for Food</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F63440',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
