import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {animated, useTransition} from '@react-spring/native';

const AnimatedScreen = props => {
  return <animated.View {...props}>{props.children}</animated.View>;
};
export default AnimatedScreen;
