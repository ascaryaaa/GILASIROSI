import { StatusBar } from 'expo-status-bar';
import { useRoute } from "@react-navigation/native"
import {useNavigation} from '@react-navigation/native'
import Footer from '../component/footer';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';

const Home = ({ navigation }) => {
  
  const [listData, setListData] = useState([]);
  const url = 'http://192.168.227.54/gilasirosi/api/api.php';
  const [searchkey, setsearchkey] = useState('');

  const navigateToDetail = (id) => {
    navigation.navigate('Detail', { id });
  }

  const navigateSearch = (searchkey) => {
    console.log(searchkey);
    navigation.navigate('SearchResult', { searchkey });
  }

  const handleInputChange = (text) => {
    setsearchkey(text);
  };

  useEffect(() => {
    ambilListData();
  }, []);

  const ambilListData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
      setListData(json.data.result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ paddingTop: 80, backgroundColor: '#ffffff', marginHorizontal:-20, paddingHorizontal:20, paddingBottom:30}}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
            />
            <Text style={{ fontSize: 28, color: '#000072', fontWeight: 'bold' }}>Selamat Datang di Gilasirosi</Text>
            <Text style={{ fontSize: 18 }}>Digitalisasi Integritasi dan Kolaborasi</Text>

            
          </View>
          <View style={styles.searchflex}>
            <TextInput
              placeholder='Cari...'
              value={searchkey}
              onChangeText={handleInputChange}
              style={styles.searchinput}
            ></TextInput>
            <TouchableOpacity color='#ffffff' onPress={() => { navigateSearch(searchkey) }}>
              <View style={styles.searchbutton}>
                <Image
                  source={require('../assets/search.png')}
                  style={{ width: 26, height: 26, marginTop:2 }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.produk}>Daftar Produk</Text>
          {listData.map((val, index) => (
            <View key={index}>
              <View style={styles.cardflex}>
                <TouchableOpacity color='#ffffff' onPress={() => { navigateToDetail(val.barang_id) }}>
                  <View style={{ flexDirection: 'row', padding: 1, borderRadius: 10, marginHorizontal: 5 }}>
                    <Image
                      source={{ uri: 'http://192.168.227.54/gilasirosi/' + val.barang_foto }}
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
      <Footer />
    </View>
  );
}

export default Home;

const styles = ({
    background: {
        backgroundColor:'#f6f6f6'
    },

    container: {
        marginHorizontal:20,
        paddingBottom:90
    },
    
    logo:{
        height:60,
        width:230,
        marginBottom:30,
        alignSelf:'center',
    },

    searchflex: {
        flexDirection:'row',
        alignItems:'center',
        marginTop:15,
        marginBottom:5,
    },

    searchinput:{
        width:250,
        borderRadius:20,
        padding:5,
        paddingLeft:15,
        borderColor:"#000072",
        height:50,
        borderWidth:1,
        backgroundColor: '#ffffff'
    },

    searchbutton:{
        backgroundColor:'#000072',
        borderRadius:75,
        width:50,
        height:50,
        alignItems:'center',
        paddingTop:10,
        marginLeft:10
    },

    produk:{
        fontSize:20,
        fontWeight:'bold',
        marginVertical: 5,
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