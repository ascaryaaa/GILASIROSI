import { StatusBar } from 'expo-status-bar';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import Footer from '../component/footer';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';

const KecamatanResult = () => {
  const [kecamatanData, setkecamatanData] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const {kecamatan_id,kecamatan_nama} = route.params;

  const navigateToDetail = (id) => {
    navigation.navigate('Detail', { id });
  }


  useEffect(() => {
    console.log('ID:', kecamatan_id);
    if (kecamatan_id ) {
      ambilKecamatanData(kecamatan_id);
    }
  }, [kecamatan_id]);

  const ambilKecamatanData = async (kecamatan_id) => {
    try {
      const response = await fetch(`http://192.168.1.7/gilasirosi/api/api.php/?op=kecamatan_filter&kecamatan_id=${kecamatan_id}`);
      const json = await response.json();
      console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
      setkecamatanData(json.data.result);
    } catch (error) {
      console.log(error);
    }
  }

  if (kecamatanData == null){
    return(
      <View>
        <Image 
          source={require('../assets/No-data.png')}
          style={{ width: 300, height: 300, marginTop:200,marginHorizontal:40 }}    
        >
        </Image>
        <Text
          style={{ marginHorizontal:20,paddingLeft:10,fontWeight:'bold',fontSize:15,textAlign:'center'}}
        >Maaf kecamatan "{kecamatan_nama}" tidak memiliki barang</Text>
      </View>
    ) 
  }
  
  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.produk}>Kecamatan "{kecamatan_nama}"</Text>
          {kecamatanData.map((val, index) => (
            <View key={index}>
            <View style={styles.cardflex}>
              <TouchableOpacity color='#ffffff' onPress={() => { navigateToDetail(val.barang_id) }}>
                <View style={{ flexDirection: 'row', padding: 1, borderRadius: 10, marginHorizontal: 5 }}>
                  <Image
                    source={{ uri: 'http://192.168.1.7/gilasirosi/' + val.barang_foto }}
                    style={{ height: 200, width: 150, borderRadius: 10 }}
                  />
                  <View style={{ flexDirection: 'column', padding: 1, borderRadius: 10, marginHorizontal: 1,height: 210 }}>
                    <View style={{ backgroundColor: '#000072', borderRadius: 10, width: 160, marginLeft: 10 }}>
                      <Text style={{ fontWeight: 'bold', width: 140, color: '#ffffff', alignSelf: 'center', fontSize: 16,marginVertical:5 }}>{val.barang_nama}</Text>
                    </View>
                    <View style={{ borderRadius: 10, height: 45, width: 150, marginLeft: 10 }}>
                      <Text style={{ fontSize: 16, paddingTop: 5, fontWeight: 'bold', fontSize: 13 }}>Harga</Text>
                      <Text style={{ fontSize: 16, paddingTop: 5, fontWeight: 'bold' }}>Rp.{val.barang_harga}</Text>
                    </View>
                    <View style={{ borderRadius: 10, height: 120, width: 150, marginLeft: 10 }}>
                      <Text style={{ fontSize: 14, paddingTop: 5, marginTop: 5, textAlign: 'justify' }}>{val.barang_deskripsi}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default KecamatanResult

const styles = ({
    background: {
        backgroundColor:'#f6f6f6'
    },

    container: {
        marginHorizontal:20,
        paddingBottom:90
    },
    
    logo:{
        height:50,
        width:230,
        marginBottom:30,
        alignSelf:'center',
        backgroundColor: '#080808'
    },
    produk:{
      paddingTop:30,
      fontSize:20,
      fontWeight:'bold',
      marginBottom:10
    },

    cardflex:{
      flexDirection:'row',
      marginHorizontal:-10,
      backgroundColor:'#ffffff',
      marginVertical: 5,
      borderRadius: 10,
      paddingTop: 7        
    },

        produkimage:{
            height:200,width:150,borderRadius:10
        },

        kategori:{
            backgroundColor:'#000072',borderRadius:10,height:30,width:80,marginTop:10,alignSelf:'center'
        },

        kategoritext:{
            fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5,fontSize:11
        },

        produktitleharga:{
            alignSelf:'center',fontSize:16,paddingTop:5,fontWeight:'bold'
        },

        description:{
            alignSelf:'center',fontSize:12,paddingTop:5
        }
})