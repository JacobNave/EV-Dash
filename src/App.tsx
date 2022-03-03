import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import { BatteryMeter } from './components/BatteryMeter';
import { CurrentDrawBar } from './components/CurrentDrawBar';

function App() {
  const [ currentDraw, setCurrentDraw ] = useState(65);
  const [ speed, setSpeed ] = useState(30);

  //current animation demo
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentDraw(currentDraw + (Math.random()*1) - .5); 
      setSpeed(speed + (Math.random()*1) - .5);
    }, 50);
    return () => {
      window.clearInterval(timer);
    };
  });

  return (
    <div className="App" style={{display: "flex", justifyContent: "center"}}>
      <Box paddingTop="10px">
        <Stack spacing={2}>
          <Box>
            <Typography variant='h4' component='h1' color='white'>Current Draw</Typography>
            <CurrentDrawBar currentDraw={currentDraw}/>
          </Box>
          <Box sx={{textAlign: 'center'}}>
            <Typography variant='h4' component='h1' color='white'>Speed</Typography>
            <Stack direction='row' justifyContent="center">
              <Typography variant='h2' component='h2' color='white'>{Math.round(speed)}</Typography>
              <Typography variant='h6' component='h2' color='white'> mph</Typography>
            </Stack>
          </Box>
          <BatteryMeter height={200} width={85} percent={100}></BatteryMeter>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
