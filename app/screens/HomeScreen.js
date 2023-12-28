import React, { useState, useEffect, document } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, AsyncStorage, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as networkHandler from '../../networkHandler.js';
import Paho from 'paho-mqtt'


const mqtt_broker = "broker.hivemq.com";
const mqtt_port = 8000;

const username = "React_Native_App";
const subscribeTopic = "ledState"; 
const publishTopic = "ledToggle";

let client = new Paho.Client(
  "broker.hivemq.com",
  Number(8000),
  'react-native-mqtt-client'
);

export default function HomeScreen(props) {

  const [ledState = "--", setState] = useState(0);
  //var isMounted = true;

  function onMessage(message) {
    if (message.destinationName === subscribeTopic)
      //setState(parseInt(message.payloadString));
      console.log("app ledstate"+ledState+"");
      console.log("Message Recieved ["+subscribeTopic+"] " + message.payloadString);
      setState(message.payloadString);
  }

  function toggleLED(c) {
    const message = new Paho.Message('1');
    message.destinationName = publishTopic;
    c.send(message);
  }

  useEffect(() => {
    if (client.isConnected() == false) {
      client.connect({
        onSuccess: () => {
          console.log("Connected! - Connected to HiveMQ MQTT Broker")
          client.subscribe(subscribeTopic)
          client.onMessageArrived = onMessage
        },
        onFailure: () => {
          console.log("Failed to Connect")
        }
      })
    }
  }, [])

    return (
      <SafeAreaView style = {styles.container}>
      <Text style = {styles.Title}>Home Screen</Text>
      <View style = {styles.space} />
      
      <Text style = {styles.Text}>LED Status: {ledState}</Text>
      <Button 
        title = "Toggle LED"
        color = 'deepskyblue'
        onPress={() => {toggleLED(client);}}
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