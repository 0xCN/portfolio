import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import htb from './images/htb.png';
import octocat from './images/octocat.png';


const useStyles = makeStyles({
  root: {
    minWidth: '160px',
  },
  button: {
    backgroundColor: '#5EDD98',
    fontFamily: 'Monda',
  },
  margined: {
    marginRight: '10px',
    backgroundColor: '#5EDD98',
    fontFamily: 'Monda',
  },
  paperDiv: {
    display: props => props.first,
    flexWrap: 'wrap',
  },
  paper: {
    backgroundColor: '#494d56',
  },
  Typography: {
    fontFamily: 'Monda',
    textAlign: 'left',
    padding: '10px',
    marginBottom: '20px',
  },
  htb: {
    width: '210px',
    borderRadius: '4px',
    '&:hover': {
      cursor: 'pointer',
    }
  },
  octocat: {
    height: '65px'
  },
  imgdiv: {
    marginBottom: '20px',
  },
  Link: {
    fontFamily: 'Monda',
    padding: '10px',
  },
  a: {
    textDecoration: 'none',
    color: '#5edd98',
    display: 'inline-block',
    marginBottom: '10px',    
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  a2: {
    textDecoration: 'none',
    color: '#5edd98',
    display: 'inline-block',
    marginRight: '10px',
    marginTop: '10px',    
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  a3: {
    textDecoration: 'none',
    color: '#e07be0',
    display: 'inline-block',
    marginRight: '10px',
    marginTop: '10px',    
  },
  projectRoot: {
    flexGrow: 1,
    fontFamily: 'Monda',
  },
  projectPaper: {
    backgroundColor: '#494d56',
    padding: '10px',
    textAlign: 'left',
  },
  typo: {
    fontFamily: 'Monda',
  }
});

function FullHead() {
  const [butt, setButt] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root} container="true">
    <center>
    <Button className={classes.margined} onClick={() => setButt(false)} variant="contained" disabled={!butt}>
      About me
    </Button>
    <Button className={classes.button} onClick={() => setButt(true)} variant="contained" disabled={butt}>
      projects
    </Button>
    <hr/>
    {/* About me block */}
    <div className={classes.paperDiv} style={{display: !butt? 'inline-block' : 'none'}}>
      <Paper className={classes.paper} elevation={3}>
        <Typography className={classes.Typography} variant="subtitle1">
          Hi there!! I'm Noodles, I freelance, work remotely and tutor web-security & programming.
          You can contact me through my email below and I'll answer promptly.
        </Typography>
      </Paper>
      <div className={classes.imgdiv}>
        <img className={classes.htb} src={htb} alt="Hack The Box"></img>
        <img className={classes.octocat} src={octocat} alt="GitHub"></img>
      </div>
      <div className={classes.a}><Typography className={classes.Link} variant="body1">0xnoodles@gmail.com</Typography></div>
      <a className={classes.a} href="https://github.com/0xCN"><Typography className={classes.Link} variant="body1">GitHub</Typography></a>
      <a className={classes.a} href="https://www.hackthebox.eu/profile/58178"><Typography className={classes.Link} variant="body1">HackTheBox</Typography></a>
      <a className={classes.a} href="https://twitter.com/0xcn1"><Typography className={classes.Link} variant="body1">Twitter</Typography></a>
      <a className={classes.a} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><Typography className={classes.Link} variant="body1">click-me</Typography></a>
    </div>
    {/* Projects block */}
    <div className={classes.projectRoot}>
  {/* Project #1 */}
    <Grid style={{display: butt? '' : 'none'}} container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <Paper className={classes.projectPaper} elevation={3}>
          <Typography variant='h6' className={classes.typo}>Kawaii-Vault</Typography>
          <Typography variant='subtitle1' className={classes.typo} color="textSecondary">
            GitHub gist based cli password manager with a custom vim like text-editor.
          </Typography>
          <div className={classes.a3}><Typography className={classes.typo} variant="body1">[Rust]</Typography></div>
          <a className={classes.a2} href="https://github.com/0xCN/kawaii-vault"><Typography className={classes.typo} variant="body1">Code</Typography></a>
          <a className={classes.a2} href="#"><Typography className={classes.typo} variant="body1">Video</Typography></a>
        </Paper>
      </Grid>
    {/* Project #2 */}
      <Grid item xs={12} sm={12} md={6}>
        <Paper className={classes.projectPaper} elevation={3}>
          <Typography variant='h6' className={classes.typo}>WeebMyIP</Typography>
          <Typography variant='subtitle1' className={classes.typo} color="textSecondary">
            Website with a Rest API to get information on IP addresses, and an anime girl to read you it.
          </Typography>
          <div className={classes.a3}><Typography className={classes.typo} variant="body1">[Python-Flask]</Typography></div>
          <a className={classes.a2} href="https://github.com/luxunator/weebmyip"><Typography className={classes.typo} variant="body1">Code</Typography></a>
          <a className={classes.a2} href="https://weebmyip.pythonanywhere.com/"><Typography className={classes.typo} variant="body1">Demo</Typography></a>
        </Paper>
      </Grid>
    {/* Project #3 */}
      <Grid item xs={12} sm={12} md={6}>
        <Paper className={classes.projectPaper} elevation={3}>
          <Typography variant='h6' className={classes.typo}>PasteJS</Typography>
          <Typography variant='subtitle1' className={classes.typo} color="textSecondary">
            Simple Chrome Extension to Prevent PasteJacking.
          </Typography>
          <div className={classes.a3}><Typography className={classes.typo} variant="body1">[JavaScript]</Typography></div>
          <a className={classes.a2} href="https://github.com/0xCN/PasteJS"><Typography className={classes.typo} variant="body1">Code</Typography></a>
          <a className={classes.a2} href="#"><Typography className={classes.typo} variant="body1">Video</Typography></a>
        </Paper>
      </Grid>
    </Grid>
    </div>
    <hr/>
    </center>
    </div>
  );
}


export default FullHead;