/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Image style={styles.menuIcon} source={require('./images/todo_icon.png')}/>
          <Text style={styles.menuText}>TO-DO LIST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image style={styles.menuIcon} source={require('./images/analytics_icon.png')}/>
          <Text style={styles.menuText}>ANALYTICS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image style={styles.menuIcon} source={require('./images/ringtone_icon.png')}/>
          <Text style={styles.menuText}>RINGTONES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: 'center',
    margin: 0,
    backgroundColor: '#003164',
  },
  menuContainer: {
    alignItems: 'center',
    paddingTop: 60,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    margin: 10,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    tintColor: '#FF4384',
  },
  menuText: {
    color: '#FF4384',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
  }
});

export default App;
