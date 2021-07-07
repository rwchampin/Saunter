import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useTrail, useSpring, animated} from '@react-spring/native';

const Trail: React.FC<{open: boolean}> = ({open, children}) => {
  const intro = useSpring({
    loop: true,
    to: {opacity: true ? 1 : 0, y: 0},
    from: {opacity: 0, y: -300, color: 'red'},
  });

  return (
    <animated.View style={intro}>
      <Text>WTF</Text>
    </animated.View>
  );
};

export {Trail};
