import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView,Image } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Screen_02() {
const api="https://6701579eb52042b542d782e5.mockapi.io/foods"
const [items,setitems]=useState([]);

const getAPi= async()=>{
  try{
 const res = await axios.get(api);
  setitems(res.data);
  }catch(err){
    console.log(err);
    
  }
}
 useEffect(() => {
        const intervalId = setInterval(() => {
            getAPi();
        }, 1000);


        return () => clearInterval(intervalId);

    }, []);
const a= new Array(6).fill(0);
const navigation= useNavigation();
const hanldeNavigate=(item)=>{
  navigation.navigate('Screen_03',{
    title:item.title,
    url:item.url,
    price:item.price
  })
} 
 const Itembox=({item})=>{
    const images = {
  'bione.png': require('../img/bione.png'),
  'bitwo.png': require('../img/bitwo.png'),
  'bithree.png':require('../img/bithree.png'),
'bifour.png':require('../img/bifour.png'),

  };
   const path = images[item.url];
  
 return(
            <TouchableOpacity
          style={{height:200,width:170,justifyContent:'center',alignItems:'center',borderRadius:20,backgroundColor:'#F7BA8326',margin:15}}
        onPress={()=>hanldeNavigate(item)}
          >
          <View style={{top:5,left:10,position:'absolute'}}>
          <Ionicons  name='heart-outline' size={10}/>
          </View>
          <View style={{flex:80,}}>
          <Image source={path} styles={{width:108,height:124}} />
          </View>
          <View style={{flex:20}}>
          <Text style={{textAlign:'center'}}>
           {item.title}
          </Text>
          <Text style={{textAlign:'center'}}>
          ${item.price}
          </Text>
          </View>


          </TouchableOpacity>

          )
  }
  return (
    <View style={styles.container}>
     <View style={{flex:15,justifyContent:'space-around',width:'100%',marginTop:40,}}>
     <Text style={{fontWeight:'bold',fontSize:22,color:'red',marginLeft:10}}>
      The World's Best Bike
     </Text>
     <View style={{flex:75,width:'90%',flexDirection:'row',marginTop:20,justifyContent:'space-around'}}>
     <Pressable style={{width:90,height:30,borderRadius:10,borderWidth:1,borderColor:'red',justifyContent:'center'}} >
     <Text style={{ textAlign:'center',color:'red',fontSize:18}}>
     All

     </Text>
     </Pressable>
      <Pressable style={{width:90,height:30,borderRadius:10,borderWidth:1,borderColor:'red',justifyContent:'center'}} >
     <Text style={{ textAlign:'center',color:'red',fontSize:18}}>
    Roadbike

     </Text>
     </Pressable>
      <Pressable style={{width:90,height:30,borderRadius:10,borderWidth:1,borderColor:'red',justifyContent:'center'}} >
     <Text style={{ textAlign:'center',color:'red',fontSize:18}}>
   Mountain

     </Text>
     </Pressable>
     </View>

     </View>
     <View style={{flex:85,width:'100%',justifyContent:'center',alignItems:'center'}}>
     <FlatList 
     showsHorizontalScrollIndicator={false}
                    data={items}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({ item }) => 
                        <Itembox item={item} />
                    }
                    contentContainerStyle={{ width: '100%', alignItems: 'center',justifyContent:'center' }}
                    numColumns={2}
    
  />

     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:100,
   justifyContent:'center'
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
