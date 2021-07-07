import React, {useState} from 'react';
import {useTrail, a} from '@react-spring/native';

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
    <div>
      {trail.map(({height, ...style}, index) => (
        <a.span key={index} className={styles.trailsText} style={style}>
          <a.span style={{height}}>{items[index]}</a.span>
        </a.span>
      ))}
    </div>
  );
};
export{} Trail;
