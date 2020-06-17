import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
export default class AllProductsScreen extends Component {
  render() {
    return <View style={styles.container}>All products screen</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#395375',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
