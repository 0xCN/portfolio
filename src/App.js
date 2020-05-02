import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import SimpleProfileCard from './profileCard';
import FullHead from './head';
import Knowledge from './knowledge';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles({
  darkBg: {
    backgroundColor: '#30343F',
    paddingTop: '40px',
    paddingLeft: '5px',
    paddingRight: '5px',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
    <Grid item container className={classes.darkBg}>
      <Grid item xl={3} lg={2} md={1} sm={1} xs={false}/>
      <Grid item xl={6} lg={8} md={10} sm={10} xs={12} container spacing={2}>
          <Grid item sm={12} md={3} xs={12}>
            <SimpleProfileCard/>
          </Grid>
          <Grid item sm={12} md={9} xs={12}>
            <FullHead/>
          </Grid>
      </Grid>
      <Grid item xl={3} lg={2} md={1} sm={1} xs={false}/>
    </Grid>
    <br/>
    <Knowledge/>
    </ThemeProvider>
    </div>
  );
}

export default App;
