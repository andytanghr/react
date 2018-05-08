import React from 'react';

const CounterControl = (props) => (
  <button onClick={props.onButtonPush}>{props.title}</button>
);
export default CounterControl;