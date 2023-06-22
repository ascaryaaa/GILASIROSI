import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Kecamatan from './Screen/Kecamatan';
import HomeStack from './Stack/HomeStack';
import KategoriStack from './Stack/KategoriStack';
import KecamatanStack from './Stack/KecamatanStack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,animation:'slide_from_right'}}>
        <Stack.Screen name='Home' component={HomeStack}/>
        <Stack.Screen name='Kategori' component={KategoriStack}/>
        <Stack.Screen name='Kecamatan' component={KecamatanStack}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}