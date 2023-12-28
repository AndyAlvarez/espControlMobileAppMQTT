import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <Text style = {styles.Title}>Andy Alvarez</Text>
        <Text style = {styles.LoginText}>Personal Portfolio</Text>
        <View style = {styles.space} /> 
        <Button
          title = "Login"
          color = 'deepskyblue'
          onPress={ () => navigation.navigate("Home") }
        ></Button>

        <StatusBar style = "auto" />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'dimgray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Title: {
      color: 'deepskyblue',
      fontWeight: 'bold',
      fontSize: 50,
    },
    LoginText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
    },
    Text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
    },
    TextInput: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    space: {
      width: 20,
      height: 25,
    },
  });

