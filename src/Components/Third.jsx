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
    backgroundColor:'#161717'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={11} style={{marginLeft:'70px'}}>
          <Paper className={classes.paper}>
              <h1 style={{color:'#ced3db'}}>Suprised your loved one with a gift voucher</h1> <br/>
              <Button variant="contained">Buy Now</Button>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
