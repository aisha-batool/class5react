import React, { useContext, useState } from 'react';
import './App.css';
import Parent from './Parent'
import CounterContext from './CounterContext';

function App() {
  let countState = useState(20)

  return (
    <div>
      <CounterContext.Provider value={countState}>
        <div>
          <Parent></Parent>
        </div>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
