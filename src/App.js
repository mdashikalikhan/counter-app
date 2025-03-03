import React from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  return (
  <div>
    <h1 style={{textAlign:'center'}}>Teting Counters</h1>
    <Counter/>
    <Counter initialCount={5} maxLimit={25}/>
    <Counter initialCount={10} maxLimit={30}/>
  </div>);
}

export default App;
