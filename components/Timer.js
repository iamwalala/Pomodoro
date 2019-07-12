import React, { Component } from 'react'
import { TimeFormat } from '../utils/Utils.js'

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native'

const workDuration = 60*2.5;
const breakDuration = 60*0.5;
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workingMode: true,
            started: false,
            remaining: workDuration,
            timer: null
        }
    }

    onPress = () => {
        let timer = (this.state.timer == null) ? setInterval(this.countDown.bind(this), 1000) : this.state.timer;
        this.setState ({
            started: !this.state.started,
            timer: timer
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
                <Text style={this.getStyleForTimerText()}>{this.getTimerText()}</Text>
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

    countDown() {
        if (this.state.started) {
            if (this.state.remaining > 0) {
                this.setState ({
                    remaining: this.state.remaining - 1
                })
            }
            else {
                clearInterval(this.state.timer);
                this.setState ({
                    workingMode: !this.state.workingMode,
                    remaining: this.state.workingMode ? breakDuration : workDuration,
                    started: false,
                    timer: null
                })
            }
        } 
    }
    
    getTimerText() {
        return TimeFormat(this.state.remaining)
    }
};

const iconRadius = 25;
const frameRadius = 100;
const circleRadius = 90;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    workStartIcon: {
        height: iconRadius*2,
        width: iconRadius*2,
        tintColor: '#FF4384',
        resizeMode: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: iconRadius,
        borderWidth: 0,
        borderColor: '#FFF',
    },
    workPauseIcon: {
        height: iconRadius*2,
        width: iconRadius*2,
        tintColor: '#FF4384',
        resizeMode: 'stretch',
        borderRadius: iconRadius,
        borderWidth: 0,
    },
    workStopTimerCircle: {
        height: circleRadius*2,
        width: circleRadius*2,
        borderRadius: circleRadius,
        borderWidth: 2,
        borderColor: '#FF4384',
        backgroundColor: '#FF4384',
        alignItems: 'center',
        justifyContent: 'center',
    },
    workStartTimerCircle: {
        height: circleRadius*2,
        width: circleRadius*2,
        borderRadius: circleRadius,
        borderWidth: 2,
        borderColor: '#FF4384',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    workTimerFrame: {
        marginTop: 30,
        height: frameRadius*2,
        width: frameRadius*2,
        borderRadius: frameRadius,
        borderWidth: 2,
        borderColor: '#FF4384',
        alignItems: 'center',
        justifyContent: 'center',
    },
    breakStartIcon: {
        height: iconRadius*2,
        width: iconRadius*2,
        tintColor: '#00A7FF',
        resizeMode: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: iconRadius,
        borderWidth: 0,
        borderColor: '#FFF',
    },
    breakPauseIcon: {
        height: iconRadius*2,
        width: iconRadius*2,
        tintColor: '#00A7FF',
        borderRadius: iconRadius,
        borderWidth: 0,
    },
    breakStopTimerCircle: {
        height: circleRadius*2,
        width: circleRadius*2,
        borderRadius: circleRadius,
        borderWidth: 2,
        borderColor: '#00A7FF',
        backgroundColor: '#00A7FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    breakStartTimerCircle: {
        height: circleRadius*2,
        width: circleRadius*2,
        borderRadius: circleRadius,
        borderWidth: 2,
        borderColor: '#00A7FF',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    breakTimerFrame: {
        marginTop: 30,
        height: frameRadius*2,
        width: frameRadius*2,
        borderRadius: frameRadius,
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