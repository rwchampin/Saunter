import React from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useTrail, ani} from '@react-spring/native';

const Trail: React.FC<{open: boolean}> = ({open, children}) => {
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
        <a.View key={index} style={style}>
          <a.View style={{height}}>{items[index]}</a.View>
        </a.View>
      ))}
    </View>
  );
};

export {Trail};