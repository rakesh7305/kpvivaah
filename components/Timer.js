import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import NextLink from 'next/link';
import React, { useContext, useEffect, useState } from 'react';


export default function Timer({ stopTimer }) {
  const [totalTime, setTotalTime] = useState(0);
  //const [stopTimer, setStopTimer] = useState(false);

 useEffect(() => {

    const timer = setInterval(() => {
      console.log("in timer" + stopTimer);
      if (stopTimer === false) {
        setTotalTime(prevtotalTime => prevtotalTime + 1); // <-- Change this line!
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };

 }, []);


  return (
    <Grid container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item
      >
        <Typography variant='h6' fontFamily='Segoe UI'>{totalTime} seconds</Typography>
      </Grid>
    </Grid>
  );
}
