import React, {useEffect, useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { useSpring, animated } from 'react-spring/web.cjs';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import ReactMarkdown from 'react-markdown';

var data = {
  id: 'root',
  name: 'knowledge',
  children: [],
};

var text_data = {};

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon className="close" fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    '& .close': {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 7,
    paddingLeft: 18,
    borderLeft: `1px dashed rgba(255, 255, 255, 1)`,
  },
}))((props) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);




const useStyles = makeStyles({
  root: {
    paddingBottom: '20px',
    textAlign: 'center',
  },
  treeRoot: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
    textAlign: 'left',
    color: '#FFD9DA',
    fontFamily: 'Monda',
    padding: '10px',
    paddingBottom: '30px',
  },
  Header: {
    fontFamily: 'Monda',
    fontSize: '30px',
    color: '#FFD9DA',
    display: 'inline-block'
  },
  pre: {
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    'word-wrap': 'break-word',
    'overflow-x': 'none',
  },
  dialog: {
    display: 'inline-block',
    'overflow-x': 'none',
  },
  dialogContent: {
    backgroundColor: 'white',
    color: '#30343f',
  },
  typo: {
    fontFamily: 'Monda',
  },
  listItem: {
    '&.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label:hover': {
      backgroundColor: '#5edd98',
      color: '#30343f',      
    },
    '&.MuiTreeItem-root.Mui-selected:focus > .MuiTreeItem-content .MuiTreeItem-label': {
      backgroundColor: '#5edd98',
      color: '#30343f',
    },
    '&.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label': {
      backgroundColor: '#5edd98',
      color: '#30343f',
    },
    '& .MuiTypography-body1': {
      fontFamily: 'Monda',
    },
  }
})



export default function Knowledge() {
  const [done, setDone] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [dialog, setDialog] = useState(false);
  const [PATH, setPATH] = useState('');

  useEffect(() => {
    async function efFunc() {
      await getData('', data, 1);
      setDone(true);
    }
    const temp_data = localStorage.getItem("data");
    const temp_text_data = localStorage.getItem("text_data"); 
    if (temp_data && temp_text_data) {
      data = JSON.parse(temp_data);
      text_data = JSON.parse(temp_text_data);
      setDone(true);
    }
    else {
      efFunc();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("text_data", JSON.stringify(text_data));

  })

  const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'token b9d1b3cc416c2f9eacde6a33d87a2e5c4c8d668e' },
        // Hey you found me, too bad you can't really do anything with it.
  };

  const getData = async (url, data, num) => {
    var response;
    var Data;
    try {
      response = await fetch(`https://api.github.com/repos/0xCN/knowledge/contents${url}`);
      Data = await response.json();
    } catch {
      response = await fetch(`https://api.github.com/repos/0xCN/knowledge/contents${url}`, requestOptions);
      Data = await response.json();
    }
    for (var key in Data) {
      if (Data[key].type === 'dir') { 
        data.children.push({'name': Data[key].name, id: `${num}`, 'path': Data[key].path, 'type': Data[key].type, 'file': false, children: []});
        var last_elem = data.children[data.children.length - 1];
        await getData(`/${Data[key].path}`, last_elem, ++num);
      }
      else {
        data.children.push({'name': Data[key].name, 'path': Data[key].path, 'type': Data[key].type, 'file': true});
        const re = await fetch(`https://raw.githubusercontent.com/0xCN/knowledge/master/${Data[key].path}`);
        text_data[Data[key].path] = await re.text();
      }
    }
  }


  const classes = useStyles();
  const renderTree = (nodes) => (
      <StyledTreeItem key={nodes.id} className={classes.listItem} onClick={nodes.file ? handleClickOpen('body', nodes.path) : null} nodeId={nodes.id} label={nodes.name}>
       {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
      </StyledTreeItem>
  );

  const dialogText = (datass) => (
      <ReactMarkdown source={ datass[PATH]} />
  );


  const handleClickOpen = (scrollType, path) => async () => {
    await setPATH(path);
    await setDialog(true);
    await setOpen(true);
    await setScroll(scrollType);
  };

  const handleClose = async() => {
    await setDialog(false);
    await setOpen(false);
    await setPATH('');
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <Box className={classes.root}>
    <center>
        <Typography className={classes.Header}>SKILLS</Typography>
        <Typography className={classes.typo} color="textSecondary" >Things I've learned over the years.</Typography>
        <TreeView
          className={classes.treeRoot}
          defaultExpanded={['root']}
          defaultCollapseIcon={<MinusSquare />}
          defaultExpandIcon={<PlusSquare />}
          defaultEndIcon={<CloseSquare />}
        >
          {done?renderTree(data):null}
        </TreeView>

      <Dialog
        className={classes.dialog}
        fullWidth={true}
        maxWidth={'lg'}
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogContent className={classes.dialogContent}>
         <DialogContentText style={{color: 'black', fontFamily: 'Monda'}}>
            {done?(dialog?dialogText(text_data):null):null}
         </DialogContentText>
        </DialogContent>

        <DialogActions style={{textAlign: 'center'}}>
        <center>
          <Button onClick={handleClose} color="textSecondary" style={{fontFamily: 'Monda', display: 'inline-block'}}>
            Close
          </Button>
        </center>
        </DialogActions>
      </Dialog>





    </center>
    </Box>
  );
}