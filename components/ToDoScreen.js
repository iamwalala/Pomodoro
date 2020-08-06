import React, { Component } from 'react'

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
  } from 'react-native'

  class ToDoScreen extends Component {
      render() {
        return (
            <View style={styles.mainContainer}>
                
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
      backgroundColor: pink,
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
export default ToDoScreen;