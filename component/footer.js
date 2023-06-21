import React from "react";
import { Image,TouchableOpacity,View,Text } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function Footer(){
    const navigation = useNavigation()
    return(
        <View style={{flexDirection:'row',backgroundColor:'#FFFFFF',position:'absolute',bottom:-30,borderRadius:30,alignSelf:'center',alignItems:'center',width:360,height:110,borderColor:'#e5e5e5',borderWidth:1}}>
            <View style={{paddingHorizontal:32,paddingLeft:40,marginBottom:30}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                    <View>
                        <Image
                            source={require('../assets/home.png')}
                            style={{width:32,height:32,alignSelf:'center'}}
                        />
                        <Text>Home</Text>
                    </View>
                </TouchableOpacity>
            </View>           
            <View style={{paddingHorizontal:32,marginBottom:30}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Kategori')}}>
                    <View style={{flexDirection:'column'}}>
                        <Image
                            source={require('../assets/categories.png')}
                            style={{width:32,height:32,alignSelf:'center'}}
                        />
                        <Text>Kategori</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:32,marginBottom:30}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Kecamatan')}}>
                    <View style={{flexDirection:'column'}}>
                        <Image
                            source={require('../assets/map.png')}
                            style={{width:32,height:32,alignSelf:'center'}}
                        />
                        <Text>Kecamatan</Text>
                    </View>
                </TouchableOpacity>
            </View>        
        </View>
    )
}