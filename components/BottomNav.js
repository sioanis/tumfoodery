import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BottomNav extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>BottomNav</Text>
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
