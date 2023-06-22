import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Detail from '../Screen/Detail';
import Kategori from '../Screen/Kategori';
import KategoriResult from '../Screen/Kategori_result';

const Stack = createNativeStackNavigator()

export default function KategoriStack(){
    return(
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='KategoriList' component={Kategori}/>
                <Stack.Screen name='KategoriResult' component={KategoriResult}/>                
            </Stack.Navigator>
    )
}