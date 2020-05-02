import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Pfp from './images/pfp.jpg';


const useStyles = makeStyles({
  root: {
    minWidth: '160px',
    paddingBottom: '20px',
  },
  profilePic: {
    maxWidth: '144px',
    borderRadius: '3px'
  },
  pfpText: {
    fontFamily: 'Monda',
    fontSize: '26px',
    color: '#FFD9DA',
  },
  purpleBadge: {
    fontFamily: 'Monda',
    backgroundColor: '#E07BE0',
    border: '2px',
    borderRadius: '3px',
    paddingLeft: '2px',
    paddingRight: '2px',
    color: 'white',
    display: 'inline-block',
  },
})
export default function SimpleProfileCard() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
    <center>
        <img src={Pfp} className={classes.profilePic} alt="website logo" />
        <Typography className={classes.pfpText} variant="h5" color="inherit" gutterBottom>Cup Noodles</Typography>
        <div><Typography className={classes.purpleBadge} variant="body1" gutterBottom>Security Enthusiast</Typography></div>
        <div><Typography className={classes.purpleBadge} variant="body1" gutterBottom>Software Developer</Typography></div>
        <div><Typography className={classes.purpleBadge} variant="body1" gutterBottom>C.S Student</Typography></div>
    </center>
    </Box>
  );
}