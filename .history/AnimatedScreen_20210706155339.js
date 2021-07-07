import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {animated, useTransition, useSpring} from '@react-spring/native';

const AnimatedScreen = props => {
  return <animated.View>{props.children}</animated.View>;
};

export default AnimatedScreen;
