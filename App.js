import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import AllProductsScreen from './components/AllProductsScreen';
import SingleProductScreen from './components/SingleProductScreen';
import HomeScreen from './components/HomeScreen';


const Stack = createStackNavigator();

function App() {
  useEffect(()=>{
    // SplashScreen.hide();
  },[]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='AllProducts' component={AllProductsScreen} />
        <Stack.Screen name='SingleProduct' component={SingleProductScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
