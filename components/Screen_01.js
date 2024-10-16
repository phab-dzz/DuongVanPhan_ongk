import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, Pressable, TextInput, SafeAreaView,Image } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Screen_01() {
  const navigation=useNavigation();

    const navigateAPI2 = () => {
        navigation.navigate('Screen_02');
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
     <View style={{flex:25,width:'100%',justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>
      A premium online store for {'\n'} sporter and their stylish choice
      </Text>

     </View>
     <View style={{flex:60,width:'100%',justifyContent:'center',alignItems:
     'center',backgroundColor:'#E941411A',borderRadius:20
}}>
     <Image source={require('../img/bifour.png')} style={{width:297,height:270}} />


     </View>
     <View style={{flex:15,width:'100%',justifyContent:'center',alignItems:'center'}}>
       <Text style={{fontWeight:'bold',fontSize:22,textAlign:'center'}}>
      POWER BIKE {'\n'} SHOP
      </Text>

     </View>
      </View>
      <View style={styles.button}>
    <TouchableOpacity
    style={{width:'90%',height:60,borderWidth:1,borderColor:'red',borderRadius:10,backgroundColor:'red',justifyContent:'center'}}
    onPress={navigateAPI2}
    >

    <Text style={{color:'#fff',textAlign:'center'}}>
    Get Started
    </Text>
    </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:100,
    padding: 24,
  },
  header:{
    flex:80,
    width:'100%',

  },
  button:{
    flex:20,
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  }
 
  
});
