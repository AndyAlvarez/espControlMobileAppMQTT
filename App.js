import React, { useState } from 'react';
import * as networkHandler from './networkHandler.js'; 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './app/screens/LoginScreen.js';
import HomeScreen from './app/screens/HomeScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  // Constant Variables
  var landingPage = false 
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Home',
            animationEnabled: 'false',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'white'
            },
            headerStyle: {
              backgroundColor: 'dimgray'
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}