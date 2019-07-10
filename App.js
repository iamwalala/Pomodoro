/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import TimerCircle from './components/TimerCircle';
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
        <TimerCircle workingMode={true} started={false}/>
        <Text style={styles.workTimerText}>25:00</Text>
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
    marginTop: 50,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    tintColor: '#FF4384',
  },
  menuText: {
    color: '#FF4384',
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    marginRight: 10,
  },
  workTimerText: {
      color: '#FF4384',
      fontSize: 100,
      fontFamily: 'Roboto-Bold',
      marginTop: 10,
  }
});

export default App;
