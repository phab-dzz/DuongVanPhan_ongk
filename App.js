// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  Pressable,
  TextInput,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen_01 from './components/Screen_01';
import Screen_02 from './components/Screen_02';
import Screen_03 from './components/Screen_03';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          //  headerTitleAlign: 'center',
          animation: 'slide_from_left', // Hiệu ứng chuyển cảnh
        }}>
                  <Stack.Screen name="Screen_01" component={Screen_01} />
        <Stack.Screen name="Screen_02" component={Screen_02} />
       <Stack.Screen name="Screen_03" component={Screen_03} />
   
         
      
       
      
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   <API_Screen_03 />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
  },
  button: {
    backgroundColor: 'blue',
    width: 200,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsub: {
    backgroundColor: 'green',
    width: 50,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
