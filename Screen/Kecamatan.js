import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,ScrollView } from 'react-native';
import Footer from '../component/footer';
import {useNavigation} from '@react-navigation/native';

export default function Kecamatan({navigation}){
    const [kecamatan_id, setkecamatan_id] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const navigateToKategori = (id) => {
        console.log('Passing : ',id)
        navigation.navigate('KecamatanResult', { kecamatan_id: id });
      }
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
                        <TouchableOpacity onPress={() => { setkecamatan_id(1),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/ajibarang.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(2),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/banyumas.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(3),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/baturraden.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => { setkecamatan_id(4),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/cilongok.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(5),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/gumelar.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(6),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/jatilawang.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => { setkecamatan_id(7),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/kalibagor.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(8),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/karang-lewas.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(9),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/kebasen.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => { setkecamatan_id(10),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/kedung-banteng.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(11),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/kembaran.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(12),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/kemranjen.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => { setkecamatan_id(13),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/lumbir.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(14),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/patikraja.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(15),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/pekuncen.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => { setkecamatan_id(16),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/purwojati.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(17),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/pwt-barat.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(18),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/pwt-selatan.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => { setkecamatan_id(19),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/pwt-timur.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(20),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/pwt-utara.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(21),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/rawalo.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => { setkecamatan_id(22),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/sokaraja.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(23),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/somagede.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(24),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/sumbang.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity onPress={() => { setkecamatan_id(25),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/sumpiuh.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(26),navigateToKategori(kecamatan_id) }}>
                            <Image
                                source={require('../assets/tambak.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setkecamatan_id(27),navigateToKategori(kecamatan_id) }}>
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