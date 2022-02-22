import { Box } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import { CurrentDrawBar } from './components/CurrentDrawBar';

function App() {
  const [ currentDraw, setCurrentDraw ] = useState(75);

  return (
    <div className="App" style={{display: "flex", justifyContent: "center"}}>
      <Box paddingTop="50px">
        <CurrentDrawBar currentDraw={currentDraw}/>
      </Box>
    </div>
  );
}

export default App;
