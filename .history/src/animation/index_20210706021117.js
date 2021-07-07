import React from 'react';
import {
  Button,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useTrail, a} from '@react-spring/native';

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
    <div>
      {trail.map(({height, ...style}, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{height}}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const Parent = posed.View({
  open: {y: 0},
  closed: {y: '100vh'},
});

const Child = posed.View({
  open: {x: 0, opacity: 1},
  closed: {x: 100, opacity: 0},
});

export {Trail, Parent};
