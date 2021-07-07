import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useTrail, animated} from '@react-spring/native';

const Trail: React.FC<{open: boolean}> = ({open, children}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: {typemass: 5, tension: 2000, friction: 200},
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: {opacity: 0, x: 20, height: 0},
  });
  return (
    <View>
      {trail.map(({height, ...style}, index) => (
        <animated.View key={index} style={style}>
          <animated.View style={{height}}>{items[index]}</animated.View>
        </animated.View>
      ))}
    </View>
  );
};

export {Trail};
