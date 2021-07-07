import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';import AnimatedScreen from './z'
import {useTrail, useSpring, animated} from '@react-spring/native';

const Trail: React.FC<{open: boolean}> = ({open, children}) => {
  return (
    <animated.View>
      <Text>WTF</Text>
    </animated.View>
  );
};

export {Trail};
