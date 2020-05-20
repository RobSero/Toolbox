import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SimpleBadge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={2} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={5} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={15} color="error">
        <MailIcon />
      </Badge>
    </div>
  );
}

export default  SimpleBadge