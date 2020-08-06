import React, { Component } from 'react'
import Timer from './Timer';
import * as RootNavigation from '../utils/RootNavigation';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
  } from 'react-native'

  class HomeScreen extends Component {
    onPressToDo = () => {
        RootNavigation.navigate('ToDo');
    }
    
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem} onPress={this.onPressToDo}>
                    <Image style={styles.menuIcon} source={require('../images/todo_icon.png')}/>
                    <Text style={styles.menuText}>TO-DO LIST</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Image style={styles.menuIcon} source={require('../images/analytics_icon.png')}/>
                    <Text style={styles.menuText}>ANALYTICS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Image style={styles.menuIcon} source={require('../images/ringtone_icon.png')}/>
                    <Text style={styles.menuText}>RINGTONES</Text>
                </TouchableOpacity>
                <Timer />
                </View>
            </View>
        );
    }
};

const pink = '#FF4384';
const darkBlue = '#003164';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: 'center',
    margin: 0,
    backgroundColor: darkBlue,
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
    tintColor: pink,
  },
  menuText: {
    color: pink,
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
    marginRight: 10,
  }
});

export default HomeScreen;