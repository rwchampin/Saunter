import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {animated, useTransition} from 'react-spring';

const Screen = props => {
  return <animated.View>{props.children}</animated.View>;
};
export default Screen;
