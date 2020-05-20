import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function LoadingSpinners1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <h5>Loading Spinners</h5>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </div>
  );
}

export default LoadingSpinners1