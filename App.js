/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
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
          <Image style={styles.menuIconStyle} source={require('./images/todo_icon.png')}/>
          <Text style={styles.menuText}>TO-DO LIST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image style={styles.menuIconStyle} source={require('./images/analytics_icon.png')}/>
          <Text style={styles.menuText}>ANALYTICS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image style={styles.menuIconStyle} source={require('./images/ringtone_icon.png')}/>
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
    marginTop: 60,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconStyle: {
    padding: 10,
    margin: 5,
    height: 36,
    width: 36,
    resizeMode: 'stretch',
    tintColor: '#FF4384',
  },
  menuText: {
    color: '#FF4384',
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    marginRight: 5,
  }
});

export default App;
