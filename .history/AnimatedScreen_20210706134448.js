import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {animated, useTransition, useSpring} from '@react-spring/native';
import {Trail} from './src/animation';
const AnimatedScreen = props => {
  const [show, set] = useState(false);
  const [items, setItems] = useState(10);

  useEffect(() => {
    set(true);
  }, []);

  const styles = useSpring({opacity: show ? 1 : 0});

  return (
    <View style={{display: 'flex'}}>

        <animated.View></animated.View>



    </View>
  );
};

const screenStyles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});

export default AnimatedScreen;
