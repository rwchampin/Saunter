import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {animated, useTransition, useSpring, config} from '@react-spring/native';

const AnimatedScreen = props => {
  const [show, setOpen] = useState(false)
    React.useEffect(() => {
    setOpen(true);
  }, []);
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    // reverse: show,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!show),
  })
  return transitions(
    (styles, item) => item && <animated.div style={styles}>{props.children}</animated.div>
};

export default AnimatedScreen;
