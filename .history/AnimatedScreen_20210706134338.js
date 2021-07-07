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

  const styles = useSpring({opacity: toggle ? 1 : 0});
  
  const transitions = useTransition(items, {
    from: {opacity: 0, transform: [{scale: 0.5}]},
    enter: {opacity: 1, translateY: 100, transform: [{scale: 1}]},

    leave: {opacity: 0, transform: [{scale: 0.5}]},
    reverse: show,
    delay: 200,

    onRest: () => set(!show),
  });

  return (
    <View style={{display: 'flex'}}>
      {transitions(({opacity}, item) => (
        <animated.View
          style={{
            opacity: opacity.to(item.op),
            transform: opacity
              .to(item.trans)
              .to(y => `translate3d(0,${y}px,0)`),
          }}>
          {item.fig}
        </animated.View>
      ))}
    </View>
  );
};

const screenStyles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});

export default AnimatedScreen;
