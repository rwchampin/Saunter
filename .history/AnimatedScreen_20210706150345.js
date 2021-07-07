import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {animated, useTransition, useSpring} from '@react-spring/native';

const AnimatedScreen = props => {
  const [show, set] = useState(false);

  useEffect(() => {
    set(true);
  }, []);

  const styles = useSpring({
    opacity: show ? 1 : 0,
    transform: [{translateY: 300}],
  });

  return (
    <animated.View style={styles}><Text>WTF</Text></animated.View>
  );
};

export default AnimatedScreen;
