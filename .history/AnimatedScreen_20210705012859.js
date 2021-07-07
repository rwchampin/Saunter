import React, {StyleSheet, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {animated, useTransition, useSpring} from '@react-spring/native';

const AnimatedScreen = props => {
  const [show, set] = useState(false);

  useEffect(() => {
    set(true);
  }, []);
  const spring = useSpring({opacity:  ? 1 : show0});

  const transitions = useTransition(show, {
    from: {opacity: 0, transform: [{scale: 0.5}]},
    enter: {opacity: 1, translateY: 100, transform: [{scale: 1}]},

    leave: {opacity: 0, transform: [{scale: 0.5}]},
    reverse: show,
    // delay: 200,
    // config: config.molasses,
    // onRest: () => set(!show),
  });
  return transitions(
    (styles, item) =>
      item && (
        <animated.View {...props} style={{...props.styles, spring}}>
          {props.children}
        </animated.View>
      ),
  );
};

export default AnimatedScreen;
