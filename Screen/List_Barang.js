import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, TouchableHighlight,StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native'
import { useState } from "react";

class List_Barang extends Component{
    constructor(props){
        super(props);
        this.state = {
            listBarang:[]
        };
        this.url = "http://192.168.192.1/gilasirosi/api.php";
    }

    componentDidMount(){
        this.ambilListBarang()
    }

    async ambilListBarang(){
        await fetch(this.url)
        .then((response)=>response.json())
        .then((json)=>{
            console.log('Hasil yang didapat: ' +JSON.stringify(json.data.result) )
            this.setState({listBarang:json.data.result});
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    async deleteBarang(id){
        await fetch("http://192.168.192.1/gilasirosi/api.php/?op=delete&id="+id)
        .then((response)=>response.json())
        .then((json)=>{
            alert('Data Berhasil Dihapus')
            console.log("Data Sudah Dihapus")
            this.ambilListBarang()
        }) 
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <Image
                        source={require('../assets/arrow.png')}
                        style={styles.backbutton}
                    />
                </TouchableOpacity>
                <Text style={styles.listtitle}>Barang Prakarya Rizqi</Text>
                <ScrollView style={styles.scrollview}>
                    {
                        this.state.listBarang.map((val,index)=>(
                            <View style={styles.listcontainer} key={index}>
                                <View>
                                    <View style={styles.kategori}>
                                        <Text style={styles.kategoritext}>{val.bar_kategori}</Text>
                                    </View>
                                    <Text style={styles.produktitlehargatext}>{val.bar_nama}</Text>
                                    <Text style={styles.produkdescription}>{val.bar_deskripsi}</Text>
                                    <Text style={styles.produktitlehargatext}>Rp. {val.bar_harga},-</Text>
                                </View>
                                <View style={styles.editdeletecontainer}>
                                    <TouchableOpacity>
                                        <View style={styles.editbutton}>
                                            <Text style={styles.kategoritext}>Edit</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>this.deleteBarang(val.bar_id)}>
                                        <View style={styles.deleletebutton}>
                                            <Text style={styles.kategoritext}>Hapus</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>            
                        ))
                    }
                    <View></View>
                </ScrollView>
                <TouchableOpacity onPressIn={() => {this.props.navigation.navigate('Tambah_Barang')}}>
                    <View style={styles.tambahbarangbutton}>
                        <Text style={styles.tambahbarangbuttontext}>+   Tambah Barang</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
export default List_Barang;

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        marginHorizontal:20
    },
    backbutton:{
        width:32,
        height:32,
        marginTop:-40,
        marginBottom:20
    },
    listtitle:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:40
    },
    scrollview:{
        marginBottom:170
    },
    listcontainer:{
        marginBottom:10,
        backgroundColor:'#ffffff',
        width:320,
        alignContent:'center',
        borderRadius:10,
        padding:20,
        flexDirection:'row'
    },

    kategori:{
        backgroundColor:'#000072',
        borderRadius:10,
        height:30,
        width:80,
        marginBottom:10
    },
    kategoritext:{
        fontWeight:'bold',
        color:'#ffffff',
        alignSelf:'center',
        marginTop:5
    },
    cardcontainer:{
        marginBottom:10,
        backgroundColor:'#ffffff',
        width:320,
        alignContent:'center',
        borderRadius:10,
        padding:20,
        flexDirection:'row'
    },
    editdeletecontainer:{
        marginTop:20,
        marginLeft:20
    },
    editbutton:{
        backgroundColor:'#000072',
        borderRadius:10,
        height:30,
        width:80,
        marginBottom:10,
        marginLeft:45
    },
    deleletebutton:{
        backgroundColor:'red',
        borderRadius:10,
        height:30,
        width:80,
        marginBottom:10,
        marginLeft:45
    },
    produktitlehargatext:{
        fontSize:20,
        fontWeight:'bold'
    },
    produkdescription:{
        fontSize:14
    },
    tambahbarangbutton:{
        backgroundColor:'#000072',
        borderRadius:10,
        height:50,
        width:200,
        marginBottom:10,
        marginLeft:45,
        position:'absolute',
        bottom:90,
        alignSelf:'center'
    },
    tambahbarangbuttontext:{
        fontWeight:'bold',
        color:'#ffffff',
        alignSelf:'center',
        marginTop:15
    }
})