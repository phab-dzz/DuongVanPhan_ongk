import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView,Image } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Screen_03({route}) {
 const { url,title,price } = route.params || {};
  const [isValid,setisValid]=useState(false);
 const navigation= useNavigation();
 const handlevalid=()=>{
   setisValid(!isValid);
 }
 const handlenavi=()=>{
   navigation.navigate('Screen_02');
 }
   const images = {
  'bione.png': require('../img/bione.png'),
  'bitwo.png': require('../img/bitwo.png'),
  'bithree.png':require('../img/bithree.png'),
'bifour.png':require('../img/bifour.png'),

  };
  
  const path=images[url];

  return (
    <View style={styles.container}>
    <View style={{flex:50,width:'100%',justifyContent:'center',alignItems:'center',
    backgroundColor:'#E941411A'}}>
    <Image  source={path} style={{width:297,height:340}}/>
    </View>
      <View style={{flex:50,width:'100%'}}>
      <View style={{flex:80,width:'100%',alignItems:'center'}}>
      <View style={{flex:40,width:'90%',gap:15}}>
      <Text style={{fontSize:25,color:'#000',fontWeight:'bold'}}>

      {title}
      </Text>

      <View style={{width:'90%',flexDirection:'row',gap:40}}>
      <Text style={{fontSize:22,color:'gray',fontWeight:'bold'}}>
15% OFF|350$
      </Text>
      <Text style={{fontSize:22,color:'#000',fontWeight:'bold',textDecorationLine:'line-through'}}>

     {price}$
      </Text>
      </View>
      <View style={{flex:20}}>
       <Text style={{fontSize:25,color:'#000',fontWeight:'bold'}}>

     Description
      </Text>
      </View>
      <View style={{flex:40,width:'90%'}}>
     <Text>
      It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.

     </Text>
      </View>

      </View>
      </View>

      <View style={{flex:20,width:'90%',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
     <Pressable
      onPress={handlevalid}
     >
      <Ionicons name={isValid?"heart":"heart-outline"} size={45} color={isValid?"red":"#000"} />
     </Pressable>
      <Pressable
      style={{backgroundColor:'red',borderRadius:25,justifyContent:'center',height:54,width:280}}
      onPress={handlenavi}
      >

      <Text style={{textAlign:'center',color:'#fff'}}>
      Add to card
      </Text>
      </Pressable>


      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:100
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
