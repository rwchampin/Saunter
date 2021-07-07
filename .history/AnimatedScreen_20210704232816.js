import React, {StyleSheet, useState, use} from 'react';
import {View, Text} from 'react-native';
import {animated, useTransition} from '@react-spring/native';

const AnimatedScreen = props => {
  const [show, set] = useState(false);
  const transitions = useTransition(show, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    reverse: show,
    delay: 200,
    // config: config.molasses,
    onRest: () => set(!show),
  });
  return transitions(
    (styles, item) =>
      item && <animated.View {...props}>{props.children}</animated.View>,
  );
};

export default AnimatedScreen;
