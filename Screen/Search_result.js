import { StatusBar } from 'expo-status-bar';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import Footer from '../component/footer';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';

const SearchResult = () => {
  const [searchData, setsearchData] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const {searchkey} = route.params;

  const navigateToDetail = (id) => {
    navigation.navigate('Detail', { id });
  }


  useEffect(() => {
    console.log('ID:', searchkey);
    if (searchkey) {
      ambilSearchData(searchkey);
    }
  }, [searchkey]);

  const ambilSearchData = async (searchkey) => {
    try {
      const response = await fetch(`http://192.168.1.7/gilasirosi/api/api.php/?op=search&searchkey=${searchkey}`);
      const json = await response.json();
      console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
      setsearchData(json.data.result);
    } catch (error) {
      console.log(error);
    }
  }

  if (searchData == null){
    return(
      <View>
        <Image 
          source={require('../assets/No-data.png')}
          style={{ width: 300, height: 300, marginTop:200,marginHorizontal:40 }}    
        >
        </Image>
        <Text
          style={{ marginHorizontal:20,paddingLeft:10,fontWeight:'bold',fontSize:15,textAlign:'center'}}
        >Hasil Pencarian untuk {searchkey} tidak ditemukan</Text>
      </View>
    ) 
  }

  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.produk}>Hasil Pencarian untuk "{searchkey}"</Text>
          {searchData.map((val, index) => (
            <View key={index}>
              <View style={styles.cardflex}>
                <TouchableOpacity color='#ffffff' onPress={() => { navigateToDetail(val.barang_id) }}>
                  <View style={{ flexDirection: 'row', padding: 1, borderRadius: 10, marginHorizontal: 5 }}>
                    <Image
                      source={{ uri: 'http://192.168.1.7/gilasirosi/' + val.barang_foto }}
                      style={{ height: 200, width: 150, borderRadius: 10 }}
                    />
                    <View style={{ flexDirection: 'column', padding: 1, borderRadius: 10, marginHorizontal: 1 }}>
                      <View style={{ backgroundColor: '#080808', borderRadius: 10, height: 30, width: 150, marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#ffffff', alignSelf: 'center', marginTop: 5, fontSize: 16 }}>{val.barang_nama}</Text>
                      </View>
                      <View style={{ borderRadius: 10, height: 60, width: 150, marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, fontWeight: 'bold', fontSize: 13 }}>Harga</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, fontWeight: 'bold' }}>Rp.{val.barang_harga},00</Text>
                      </View>
                      <View style={{ borderRadius: 10, height: 80, width: 150, marginTop: 10, marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, fontWeight: 'bold' }}>{val.barang_deskripsi}</Text>
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

export default SearchResult

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

    searchflex: {
        paddingTop:30,
        flexDirection:'row',
        alignItems:'center'
    },

    searchinput:{
        width:250,
        borderRadius:20,
        padding:5,
        paddingLeft:15,
        borderColor:"#2f318d",
        height:50,
        borderWidth:1
    },

    searchbutton:{
        backgroundColor:'#0f0f0f',
        borderRadius:75,
        width:50,
        height:50,
        alignItems:'center',
        paddingTop:10,
        marginLeft:10
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