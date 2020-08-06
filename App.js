/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { navigationRef } from './utils/RootNavigation';
import HomeScreen from './components/HomeScreen';
import ToDoScreen from './components/ToDoScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '', headerTransparent: true}}
        />
        <Stack.Screen
          name="ToDo"
          component={ToDoScreen}
          options={{ title: 'To-Do List', titleColor: darkBlue, headerTransparent: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const pink = '#FF4384';
const darkBlue = '#003164';
export default App;
