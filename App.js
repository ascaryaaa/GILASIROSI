import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kategori from './Screen/Kategori';
import Kecamatan from './Screen/Kecamatan';
import HomeStack from './Stack/HomeStack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,animation:'slide_from_right'}}>
        <Stack.Screen name='Home' component={HomeStack}/>
        <Stack.Screen name='Kategori' component={Kategori}/>
        <Stack.Screen name='Kecamatan' component={Kecamatan}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}