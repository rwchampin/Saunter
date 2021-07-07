import React, {useState} from 'react';
import {useTrail, animated, con} from '@react-spring/native';
import {View, Text, StyleSheet} from 'react-native';

const Trail = ({open, children}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: {mass: 5, tension: 2000, friction: 200},
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: {opacity: 0, x: 20, height: 0},
  });
  return (
    <View>
      {trail.map(({height, ...style}, index) => (
        <animated.View key={index} style={style}>
          <animated.View style={{height}}>
            <Text>{items[index]}</Text>
          </animated.View>
        </animated.View>
      ))}
    </View>
  );
};
export {Trail};
