import React, { useState,useEffect } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Footer from '../component/footer';

export default function Kategori({navigation}){
    const [kategori, setkategori] = useState([]);
    
    const navigateToKategori = (id,nama) => {
        console.log('Passing : ',id)
        navigation.navigate('KategoriResult', { kategori_id: id, kategori_nama: nama });
      }
    useEffect(() => {
        ambilKategori();
      }, []);

      const ambilKategori = async () => {
        try {
          const response = await fetch(`http://192.168.1.7/gilasirosi/api/api.php/?op=kategori_display`);
          const json = await response.json();
          console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
          setkategori(json.data.result);
        } catch (error) {
          console.log(error);
        }
      }


    return (
        <View>
            <View style={styles.background}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{ paddingTop: 80, backgroundColor: '#ffffff', marginHorizontal:-20, paddingHorizontal:20, paddingBottom:30}}>
                            <Image
                                source={require('../assets/logo.png')}
                                style={styles.logo}
                            />
                        </View>
                        <Text style={styles.kategori}>Kategori</Text>                    
                        {kategori.map((val, index) => (
                            <View key={index}>
                                <TouchableOpacity onPress={() => { console.log('kategori_id:', val.kategori_id),navigateToKategori(val.kategori_id,val.kategori_nama) }}>
                                    <View style={styles.kategoripadding}>
                                        <Image
                                            source={{ uri: 'http://192.168.1.7/gilasirosi/' + val.kategori_foto }}
                                            style={styles.kategoriimage}
                                        />
                                        <Text style={styles.kategoritotaltext}>{val.kategori_total} Produk</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))}
                        <View style={{paddingBottom:150}}></View>
                    </View>
                </ScrollView>
            </View>
            <Footer></Footer>
        </View>
        
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#f5f5f5'
    },
    container:{
        marginHorizontal:20,
        paddingBottom:90
    },
    logo:{
        height:60,
        width:230,
        marginBottom:30,
        alignSelf:'center',
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