import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workingMode: props.workingMode,
            started: props.started
        }
    }

    onPress = () => {
        this.setState ({
            started: !this.state.started
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={this.getStyleForTimerFrame()}>
                    <View style={this.getStyleForTimerCircle()}>
                        <TouchableOpacity onPress={this.onPress}>
                            <Image style={this.getStyleForTimerIcon()} source={this.getImageForTimerIcon()}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={this.getStyleForTimerText()}>{this.getTimerText().toString()}</Text>
            </View>
        );
    }

    getStyleForTimerFrame() {
        if (this.state.workingMode) {
            return styles.workTimerFrame
        }
        else {
            return styles.breakTimerFrame
        }
    }

    getStyleForTimerText() {
        if (this.state.workingMode) {
            return styles.workTimerText
        }
        else {
            return styles.breakTimerText
        }
    }

    getStyleForTimerCircle() {
        if (this.state.workingMode) {
            if (this.state.started) {
                return styles.workStartTimerCircle
            }
            else {
                return styles.workStopTimerCircle
            }
        }
        else {
            if (this.state.started) {
                return styles.breakStartTimerCircle
            }
            else {
                return styles.breakStopTimerCircle
            }
        }
    }
  
    getStyleForTimerIcon() {
        if (this.state.workingMode) {
            if (this.state.started) {
                return styles.workPauseIcon
            }
            else {
                return styles.workStartIcon
            }
        }
        else {
            if (this.state.started) {
                return styles.breakPauseIcon
            }
            else {
                return styles.breakStartIcon
            }
        }
    }
  
    getImageForTimerIcon() {
        if (this.state.started) {
            return require('../images/pause_icon.png')
        }
        else {
            return require('../images/play_arrow.png')
        }
    }
  
    getTimerText() {
        if (this.state.workingMode) {
            return (1000 * 60 * 25)
        }
        else {
            return (1000 * 60 * 5)
        }
    }
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    workStartIcon: {
        height: 50,
        width: 50,
        tintColor: '#FF4384',
        resizeMode: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 25,
        borderWidth: 0,
        borderColor: '#FFF',
    },
    workPauseIcon: {
        height: 50,
        width: 50,
        tintColor: '#FF4384',
        resizeMode: 'stretch',
        borderRadius: 25,
        borderWidth: 0,
    },
    workStopTimerCircle: {
        height: 180,
        width: 180,
        borderRadius: 90,
        borderWidth: 2,
        borderColor: '#FF4384',
        backgroundColor: '#FF4384',
        alignItems: 'center',
        justifyContent: 'center',
    },
    workStartTimerCircle: {
        height: 180,
        width: 180,
        borderRadius: 90,
        borderWidth: 2,
        borderColor: '#FF4384',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    workTimerFrame: {
        marginTop: 30,
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#FF4384',
        alignItems: 'center',
        justifyContent: 'center',
    },
    breakStartIcon: {
        height: 50,
        width: 50,
        tintColor: '#00A7FF',
        resizeMode: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 25,
        borderWidth: 0,
        borderColor: '#FFF',
    },
    breakPauseIcon: {
        height: 50,
        width: 50,
        tintColor: '#00A7FF',
        borderRadius: 25,
        borderWidth: 0,
    },
    breakStopTimerCircle: {
        height: 180,
        width: 180,
        borderRadius: 90,
        borderWidth: 2,
        borderColor: '#00A7FF',
        backgroundColor: '#00A7FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    breakStartTimerCircle: {
        height: 180,
        width: 180,
        borderRadius: 90,
        borderWidth: 2,
        borderColor: '#00A7FF',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    breakTimerFrame: {
        marginTop: 30,
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#00A7FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    workTimerText: {
        color: '#FF4384',
        fontSize: 100,
        fontFamily: 'Roboto-Bold',
        marginTop: 10,
    },
    breakTimerText: {
        color: '#00A7FF',
        fontSize: 100,
        fontFamily: 'Roboto-Bold',
        marginTop: 10,
    }
});

export default Timer;