import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Kecamatan from '../Screen/Kecamatan';
import KecamatanResult from '../Screen/Kecamatan_result';

const Stack = createNativeStackNavigator()

export default function KecamatanStack(){
    return(
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='KecamatanList' component={Kecamatan}/>
                <Stack.Screen name='KecamatanResult' component={KecamatanResult}/>                
            </Stack.Navigator>
    )
}