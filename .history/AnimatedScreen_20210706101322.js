import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {animated, useTransition, useSpring} from '@react-spring/native';
import {Trail} from './src/animation';
const AnimatedScreen = props => {
  const [show, set] = useState(false);
  const [items, setItems] = useState(NUM_TRANS);

  useEffect(() => {
    set(true);
  }, []);


  const transitions = useTransition(show, {
    from: {opacity: 0, transform: [{scale: 0.5}]},
    enter: {opacity: 1, translateY: 100, transform: [{scale: 1}]},

    leave: {opacity: 0, transform: [{scale: 0.5}]},
    reverse: show,
    delay: 200,

    onRest: () => set(!show),
  });
  return transitions(
    (styles, item) =>
      item && (
        <animated.View {...props} style={{...props.styles, ...spring}}>
          <Trail open={show}>{props.children}</Trail>
        </animated.View>
      ),
  );
};

const screenStyles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});

export default AnimatedScreen;