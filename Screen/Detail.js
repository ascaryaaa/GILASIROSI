import React, { useState,useEffect } from "react";
import { View, Image, Text, ScrollView, TouchableOpacity,TouchableHighlight, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';
import Footer from "../component/footer";
import {useNavigation} from '@react-navigation/native'

export default function Detail(){
    const [detailData, setdetailData] = useState([]);
    const navigation = useNavigation()
    const route = useRoute();
    const {id} = route.params;

    useEffect(() => {
        ambilDetailData(id);
      }, [id]);

      const ambilDetailData = async (id) => {
        try {
          const response = await fetch(`http://192.168.1.7/gilasirosi/api/api.php/?op=detail&barang_id=${id}`);
          const json = await response.json();
          console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
          setdetailData(json.data.result);
        } catch (error) {
          console.log(error);
        }
      }

    return (
        <View style={{backgroundColor:'#f6f6f6'}}>
            <ScrollView>
                {detailData.map((val,index)=>(
                    <View key={index}>
                    <Image
                        source={{ uri: 'http://192.168.1.7/gilasirosi/' + val.barang_foto }}
                        style={styles.produkimage}
                    />
                    <TouchableOpacity onPressIn={() => {navigation.goBack()}}>
                        <Image
                            source={require('../assets/arrow.png')}
                            style={styles.backbutton}
                        />
                    </TouchableOpacity>
                    <View style={styles.produkdetailcontainer}>
                        <View style={styles.textcontainer}>
                            <View style={{ flexDirection: 'row', padding: 1, borderRadius: 10, marginBottom: 20}}>
                                <Text style={styles.produktitle}>{val.barang_nama}</Text>
                                <View style={styles.kategori}>
                                    <Text style={styles.kategoriteks}>{val.kategori_nama}</Text>
                                </View>
                            </View>
                            <Text style={styles.normaltext}>{val.barang_deskripsi}</Text>
                            <Text style={styles.boldtext}>Rp.{val.barang_harga}</Text>
                            <Text style={styles.boldtext}>Kecamatan</Text>
                            <Text style={styles.normaltext}>{val.kecamatan_nama}</Text>
                            <Text style={styles.boldtext}>Nama UMKM</Text>
                            <Text style={styles.normaltext}>{val.UMKM_nama}</Text>
                            <Text style={styles.boldtext}>Alamat</Text>
                            <Text style={styles.alamat}>{val.UMKM_alamat}</Text>
                            <Text style={styles.boldtext}>Telefon / No Hp</Text>
                            <Text style={styles.normaltext}>{val.UMKM_telp}</Text>
                        </View>
                    </View>
                </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    produkimage:{
        width:360,height:320,alignSelf:'center'
    },

    backbutton:{
        width:32,height:32,marginTop:-280,marginLeft:20
    },

    produkdetailcontainer:{
        marginTop:-30,backgroundColor:"#ffffff",alignSelf:'center',width:360,height:1000,flexDirection:'row'
    },

    textcontainer:{
        marginLeft:30,marginTop:20
    },

    produktitle: {
        fontSize:24,fontWeight:'bold', borderRadius: 10, width: 220
    },

    boldtext:{
        paddingTop:10,fontSize:20,fontWeight:'bold'
    },

    normaltext:{
        paddingTop:10,fontSize:16
    },

    alamat:{
        paddingTop:10,fontSize:14
    },

    kategori:{
        backgroundColor:'#000072',height:30,width:80,borderRadius:10,marginLeft:10
    },

    kategoriteks:{
        color:'#ffffff',alignSelf:'center',marginTop:5
    }
})