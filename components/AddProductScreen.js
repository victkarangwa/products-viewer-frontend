import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default class AddProductScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      md: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appLogo}>The Products viewer</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Product name'
            placeholderTextColor='#003f5c'
            onChangeText={(text) => this.setState({ name: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Product price'
            placeholderTextColor='#003f5c'
            onChangeText={(text) => this.setState({ price: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder='Date of manufacture'
            placeholderTextColor='#003f5c'
            onChangeText={(text) => this.setState({ ms: text })}
          />
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.appText}>Add</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
// Predifined styles for the elements
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#395375',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appLogo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#DD5C28',
    marginBottom: 30,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#95a5c9',
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  addBtn: {
    width: '80%',
    backgroundColor: '#DD5C28',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  appText: {
    color: 'white',
  },
});
