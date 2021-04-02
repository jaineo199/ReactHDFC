import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Paper className={classes.paper}>

          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <h1 style={{color: '#4287f5'}}>Bigger saving assured only on snart buy</h1> 
            <h3 style={{color: '#77a2e6'}}>Offer applicable on:</h3>
            <Button variant="contained" color="secondary">
        Secondary
      </Button>
          </Paper>
        </Grid>
        
      </Grid>
    
    </div>
  );
}
