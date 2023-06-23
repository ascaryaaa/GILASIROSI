import React from 'react';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,ScrollView } from 'react-native';
import Footer from '../component/footer';
import {useNavigation} from '@react-navigation/native';

export default function Kecamatan({navigation}){
    const [kecamatan_id, setkecamatan_id] = useState();
    const [kecamatan_nama, setkecamatan_nama] = useState();
    const navigateToKecamatan = (id,nama) => {
        console.log('Passing : ',id)
        navigation.navigate('KecamatanResult', { kecamatan_id: id,kecamatan_nama: nama });
      }
      useEffect(() => {
        if (kecamatan_id && kecamatan_nama) {
            navigateToKecamatan(kecamatan_id, kecamatan_nama);
          }
      }, [kecamatan_id,kecamatan_nama]);
    return (
        <View>
            <View style={{marginLeft:25,backgroundColor:'#f6f6f6'}}>
                <ScrollView style={{paddingTop:80,marginBottom:80}}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={{height:50,width:200,marginBottom:30,alignSelf:'center'}}
                    />
                    <Text style={{fontSize:24,fontWeight:'bold'}}>Kecamatan</Text>  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => {setkecamatan_id(1);setkecamatan_nama('Ajibarang')}}>
                            <Image
                                source={require('../assets/ajibarang.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(2);setkecamatan_nama('Banyumas')}}>
                            <Image
                                source={require('../assets/banyumas.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(3);setkecamatan_nama('Baturraden')}}>
                            <Image
                                source={require('../assets/baturraden.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => {setkecamatan_id(4);setkecamatan_nama('Cilongok')}}>
                            <Image
                                source={require('../assets/cilongok.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(5);setkecamatan_nama('Gumelar')}}>
                            <Image
                                source={require('../assets/gumelar.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(6);setkecamatan_nama('Jatilawang')}}>
                            <Image
                                source={require('../assets/jatilawang.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => {setkecamatan_id(7);setkecamatan_nama('Kalibagor')}}>
                            <Image
                                source={require('../assets/kalibagor.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(8);setkecamatan_nama('Karang Lewas')}}>
                            <Image
                                source={require('../assets/karang-lewas.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(9);setkecamatan_nama('Kebasen')}}>
                            <Image
                                source={require('../assets/kebasen.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => {setkecamatan_id(10);setkecamatan_nama('Kedung Banteng')}}>
                            <Image
                                source={require('../assets/kedung-banteng.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(11);setkecamatan_nama('Kembaran')}}>
                            <Image
                                source={require('../assets/kembaran.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(12);setkecamatan_nama('Kemranjen')}}>
                            <Image
                                source={require('../assets/kemranjen.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => {setkecamatan_id(13);setkecamatan_nama('Lumbir')}}>
                            <Image
                                source={require('../assets/lumbir.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(14);setkecamatan_nama('Patikraja')}}>
                            <Image
                                source={require('../assets/patikraja.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(15);setkecamatan_nama('Pekuncen')}}>
                            <Image
                                source={require('../assets/pekuncen.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => {setkecamatan_id(16);setkecamatan_nama('Purwojati')}}>
                            <Image
                                source={require('../assets/purwojati.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(17);setkecamatan_nama('Purwokerto Barat')}}>
                            <Image
                                source={require('../assets/pwt-barat.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(18);setkecamatan_nama('Purwokerto Selatan')}}>
                            <Image
                                source={require('../assets/pwt-selatan.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => {setkecamatan_id(19);setkecamatan_nama('Purwokerto Timur')}}>
                            <Image
                                source={require('../assets/pwt-timur.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(20);setkecamatan_nama('Purwokerto Utara')}}>
                            <Image
                                source={require('../assets/pwt-utara.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(21);setkecamatan_nama('Rawalo')}}>
                            <Image
                                source={require('../assets/rawalo.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => {setkecamatan_id(22);setkecamatan_nama('Sokaraja')}}>
                            <Image
                                source={require('../assets/sokaraja.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(23);setkecamatan_nama('Somagede')}}>
                            <Image
                                source={require('../assets/somagede.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(24);setkecamatan_nama('Sumbang')}}>
                            <Image
                                source={require('../assets/sumbang.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => {setkecamatan_id(25);setkecamatan_nama('Sumpiuh')}}>
                            <Image
                                source={require('../assets/sumpiuh.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(26);setkecamatan_nama('Tambak')}}>
                            <Image
                                source={require('../assets/tambak.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {setkecamatan_id(27);setkecamatan_nama('Wangon')}}>
                            <Image
                                source={require('../assets/wangon.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>    
                    <View style={{marginBottom:100}}></View>              
                </ScrollView>
            </View>
            <Footer></Footer>
        </View>
        
    )
}

const styles = StyleSheet.create ({
    logo: {
        height:50,
        width:200,
        marginBottom:30,
        alignSelf:'center'
    },

    buttonkecamatan : {
        width:100,
        height:100,
        marginHorizontal:5
    },

    buttonkecamatanrow: {
        flexDirection:'row',
        marginTop:20,
        marginLeft:-10
    }
})