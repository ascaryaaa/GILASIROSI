import React from "react";
import { View, Image, Text, TouchableOpacity,TouchableHighlight, StyleSheet } from "react-native";
import Footer from "../component/footer";
import {useNavigation} from '@react-navigation/native'
export default function Detail(){
    const navigation = useNavigation()
    return (
        <View style={{backgroundColor:'#f6f6f6'}}>
            <View>
                <Image
                    source={require('../assets/kerajinan.jpg')}
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
                        <Text style={styles.produktitle}>Bros Dagu</Text>
                        <Text style={styles.normaltext}>Bros Dagu Safitri handmade</Text>
                        <Text style={styles.boldtext}>Rp.5.000,00-</Text>
                        <Text style={styles.boldtext}>Kecamatan</Text>
                        <Text style={styles.normaltext}>Rawaheng</Text>
                        <Text style={styles.boldtext}>Nama UMKM</Text>
                        <Text style={styles.normaltext}>Samiati</Text>
                        <Text style={styles.boldtext}>Alamat</Text>
                        <Text style={styles.alamat}>Gembrong RT 03 RW 01 rawaheng</Text>
                        <Text style={styles.boldtext}>Telefon / No Hp</Text>
                        <Text style={styles.normaltext}>081272819023</Text>
                    </View>
                    <View style={styles.kategori}>
                        <Text style={styles.kategoriteks}>Kerajinan</Text>
                    </View>
                </View>
            </View>
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
        fontSize:24,fontWeight:'bold'
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
        backgroundColor:'#000072',height:30,width:80,borderRadius:10,marginTop:25,marginLeft:10
    },

    kategoriteks:{
        color:'#ffffff',alignSelf:'center',marginTop:5
    }
})