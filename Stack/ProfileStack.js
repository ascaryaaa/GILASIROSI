import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profil from '../Screen/Profil';
import Detail_Profil from '../Screen/Detail_Profil';
import List_Barang from '../Screen/List_Barang';
import Profil_Not_Login from '../Screen/Profil_Not_Login';
import Login from '../Screen/Login';
import Tambah_Barang from '../Screen/Tambah_Barang';
import Edit_Barang from '../Screen/Edit_Barang';

const Stack = createNativeStackNavigator()

export default function ProfileStack(){
    return(
            <Stack.Navigator screenOptions={{headerShown:false, animation:'slide_from_right'}}>
                <Stack.Screen name='ProfilMenu' component={Profil}/>
                <Stack.Screen name='Profil_Not_Login' component={Profil_Not_Login}/>  
                <Stack.Screen name='Detail_Profil' component={Detail_Profil}/>
                <Stack.Screen name='List_Barang' component={List_Barang}/>
                <Stack.Screen name='Edit_Barang' component={Edit_Barang}/>
                <Stack.Screen name='Tambah_Barang' component={Tambah_Barang}/>
                <Stack.Screen name='Login' component={Login}/>          
            </Stack.Navigator>
    )
}