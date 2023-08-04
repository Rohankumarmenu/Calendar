
import './App.css';
// import React, { useState } from 'react';
import TimezoneSelect from './TimezoneSelect';
import Saving from './Saving';
import Week from './Week';
const App = () => {
  return (
    <div>
    
      
    <Week></Week>
      <TimezoneSelect />
      <Saving></Saving>
     
    </div>
  );
};

export default App;