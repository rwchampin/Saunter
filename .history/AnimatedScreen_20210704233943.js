import React, {StyleSheet, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {animated, useTransition} from '@react-spring/native';

const AnimatedScreen = props => {
  const [show, set] = useState(false);

  useEffect(() => {
    set(true);
  }, []);

  const transitions = useTransition(show, {
    from: {opacity: 0, scale: 0.5},
    enter: {opacity: 1},
    
    leave: {opacity: 0, scale: 0.5},
    reverse: show,
    delay: 200,
    // config: config.molasses,
    // onRest: () => set(!show),
  });
  return transitions(
    (styles, item) =>
      item && <animated.View {...props}>{props.children}</animated.View>,
  );
};

export default AnimatedScreen;
