import React, {StyleSheet,useState} from 'react';
import {View, Text} from 'react-native';
import {animated, useTransition} from '@react-spring/native';

const AnimatedScreen = props => {
  return <animated.View {...props}>{props.children}</animated.View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});

export default AnimatedScreen;
