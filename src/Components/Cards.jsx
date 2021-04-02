import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Amazon from './Images/Amazon_icon.png';
import Flipkart from './Images/flipkart.jpg';
import Gift from './Images/gift.png';
import Hotel from './Images/Hotel.png';
import Oye from './Images/oyo2.png';
import Plane from './Images/PlaneS.png';
import Redbus from './Images/Redbus2.png';
import Train from './Images/Train.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardsize :{
     
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} >
        <Grid item xs={3} md={3} className={classes.cardsize}>
          <Paper className={classes.paper}>
           <img className={classes.img} src={Amazon}/>
           Amazon
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper className={classes.paper}>
          <img className={classes.img} src={Flipkart}/>
          Flipkart
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper className={classes.paper}>
          <img className={classes.img} src={Plane}/>
          Compare & fly
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper className={classes.paper}>
          <img className={classes.img} src={Hotel}/>
          Compare & Stay
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3} md={3}>
          <Paper className={classes.paper}>
          <img className={classes.img} src={Train}/>
          Trains
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper className={classes.paper}>
          <img className={classes.img} src={Redbus}/>
          RedBus
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper className={classes.paper}>
          <img className={classes.img} src={Oye} style={{height:'80%'}}/>
          OyeRooms <br/>
          for Hotels <br/>
          To live
          </Paper>
        </Grid>
        <Grid item xs={3} md={3}>
          <Paper className={classes.paper}>
          <img className={classes.img} src={Gift}/>
          Gift
          </Paper>
        </Grid>
      </Grid>
      
    </div>
  );
}
