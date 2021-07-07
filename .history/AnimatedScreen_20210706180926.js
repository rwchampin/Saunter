import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {animated, useTransition, useSpring, config} from '@react-spring/native';

const AnimatedScreen = props => {
  const [show, setOpen] = useState(false);
  React.useEffect(() => {
    setOpen(true);
  }, []);
  const transitions = useTransition(show, {
    from: {opacity: 0},
    enter: {opacity: 1, transform: 'translate3d(0, 400px,0)'},
    leave: {opacity: 0},
    config: config.molasses,
    onRest: props.callback,
  });
  return transitions(
    (styles, item) =>
      item && (
        <animated.View style={(styles, props.styles)}>
          {props.children}
        </animated.View>
      ),
  );
};

export default AnimatedScreen;
