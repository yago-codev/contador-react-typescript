import React from 'react';

interface Props {
  count: number;
}

const CountDisplay: React.FC<Props> = ({ count }) => (
  <>
    <h1>Counter:</h1>
    <h2>{count}</h2>
  </>
)

export default CountDisplay;