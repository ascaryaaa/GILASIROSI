import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,ScrollView } from 'react-native';
import Footer from '../component/footer';

export default function Kecamatan(){
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
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/ajibarang.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/banyumas.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/baturraden.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/cilongok.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/gumelar.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/jatilawang.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/kalibagor.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/karang-lewas.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/kebasen.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/kedung-banteng.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/kembaran.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/kemranjen.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/lumbir.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/patikraja.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/pekuncen.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/purwojati.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/pwt-barat.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/pwt-selatan.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/pwt-timur.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/pwt-utara.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/rawalo.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/sokaraja.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/somagede.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/sumbang.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                    </View>                  
                    <View style={styles.buttonkecamatanrow}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/sumpiuh.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/tambak.png')}
                                style={styles.buttonkecamatan}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
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