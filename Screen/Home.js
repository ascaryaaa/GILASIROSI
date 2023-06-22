import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react'; 
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image,ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Footer from '../component/footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barang_nama:'',
            barang_harga:'',
            barang_kategori:'',
            barang_deskripsi:'',
            barang_foto:'',
            listData:[],
        };
        this.url = 'http://192.168.1.7/gilasirosi/api/api.php';
    }
    componentDidMount(){
        this.ambilListData()
    }
    async ambilListData(){
        await fetch(this.url)
        .then((response)=>response.json())
        .then((json)=>{
            console.log('Hasil yang didapat: '+JSON.stringify(json.data.result));
            this.setState({listData:json.data.result});
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render() {
        return (
            <View style={styles.background}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{paddingTop:80}}>
                            <Image
                                source={require('../assets/logo.png')}
                                style={styles.logo}
                            />
                            <Text style={{fontSize:24}}>Lorem</Text>
                            <Text style={{fontSize:18}}>Lorem Ipsum Lorem Ipsum</Text>
                            <Text style={{fontSize:20,color:'#080808',fontWeight:'bold'}}>Lorem Ipsum</Text>
                            <Text style={{fontSize:28,color:'#080808',fontWeight:'bold'}}>Lorem Ipsum</Text>
                        </View>
                        <View style={styles.searchflex}>
                            <TextInput
                                placeholder='Cari...'
                                style={styles.searchinput}
                            ></TextInput>
                            <TouchableOpacity color='#ffffff' onPress={() => {this.props.navigation.navigate('Home')}}>
                                <View style={styles.searchbutton}>
                                    <Image
                                        source={require('../assets/search.png')}
                                        style={{width:24,height:24}}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={styles.produk}>Harga Bahan Pokok</Text>
                        {
                        this.state.listData.map((val,index)=>(
                            <View  key={index}>
                                <View style={styles.cardflex}>
                                    <TouchableOpacity color='#ffffff'>
                                        <View style={{flexDirection:'row',padding:1,borderRadius:10,marginHorizontal:5}}>
                                            <Image
                                                source={{uri: 'http://192.168.1.7/gilasirosi/' + val.barang_foto}}
                                                style={{height:200,width:150,borderRadius:10}}
                                            />
                                            <View style={{flexDirection:'column',padding:1,borderRadius:10,marginHorizontal:1}}>
                                                <View style={{backgroundColor:'#080808',borderRadius:10,height:30,width:150,marginTop:10,marginLeft:10}}>
                                                    <Text style={{fontWeight:'bold',color:'#ffffff',alignSelf:'center',marginTop:5,fontSize:16}}>{val.barang_nama}</Text>
                                                </View>
                                                <View style={{borderRadius:10,height:60,width:150,marginTop:10,marginLeft:10}}>
                                                    <Text style={{fontSize:16,paddingTop:5,fontWeight:'bold',fontSize:13}}>Harga</Text>
                                                    <Text style={{fontSize:16,paddingTop:5,fontWeight:'bold'}}>Rp.{val.barang_harga},00</Text>
                                                </View>
                                                <View style={{borderRadius:10,height:80,width:150,marginTop:10,marginLeft:10}}>
                                                    <Text style={{fontSize:16,paddingTop:5,fontWeight:'bold'}}>{val.barang_deskripsi}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                        }
                    </View>
                </ScrollView>
                <Footer/>
            </View>
        )
    }
}

export default Home

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
        marginHorizontal:-10
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