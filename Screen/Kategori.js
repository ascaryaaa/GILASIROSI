import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,ScrollView } from 'react-native';
import Footer from '../component/footer';

export default function Kategori(){
    return (
        <View>
            <View style={styles.background}>
                <ScrollView style={styles.container}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.kategori}>Kategori</Text>                    
                    <TouchableOpacity>
                        <View style={styles.kategoripadding}>
                            <Image
                                source={require('../assets/category_kerajinan.png')}
                                style={styles.kategoriimage}
                            />
                            <Text style={styles.kategoritotaltext}>208 Produk</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.kategoripadding}>
                            <Image
                                source={require('../assets/category_makanan.png')}
                                style={styles.kategoriimage}
                            />
                            <Text style={styles.kategoritotaltext}>400 Produk</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.kategoripadding}>
                            <Image
                                source={require('../assets/category_minuman.png')}
                                style={styles.kategoriimage}
                            />
                            <Text style={styles.kategoritotaltext}>12 Produk</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.kategoripadding}>
                            <Image
                                source={require('../assets/category_rt.png')}
                                style={styles.kategoriimage}
                            />
                            <Text style={styles.kategoritotaltext}>1271 Produk</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{paddingVertical:10,paddingBottom:100}}>
                            <Image
                                source={require('../assets/category_jasa.png')}
                                style={styles.kategoriimage}
                            />
                            <Text style={styles.kategoritotaltext}>9 Produk</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <Footer></Footer>
        </View>
        
    )
}

const styles = StyleSheet.create({
    background:{
        marginLeft:30,backgroundColor:'#f6f6f6'
    },
    container:{
        paddingTop:80,marginBottom:80
    },
    logo:{
        height:50,width:200,marginBottom:30,alignSelf:'center'
    },
    kategori:{
        fontSize:24,fontWeight:'bold'
    },
    kategoripadding:{
        paddingVertical:10
    },
    kategoriimage:{
        width:300,height:135
    },
    kategoritotaltext:{
        marginTop:-40,marginLeft:-20,marginBottom:20,color:'#FFFFFF',textAlign:'center',fontWeight:'bold',fontSize:20
    }
})