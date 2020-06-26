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

var data = {"id":"root","name":"knowledge","children":[{"name":"cyber-security","id":"1","path":"cyber-security","type":"dir","file":false,"children":[{"name":"Cryptography.md","path":"cyber-security/Cryptography.md","type":"file","file":true},{"name":"Network-Pentesting.md","path":"cyber-security/Network-Pentesting.md","type":"file","file":true},{"name":"OSINT.md","path":"cyber-security/OSINT.md","type":"file","file":true},{"name":"Privilege-Escalation.md","path":"cyber-security/Privilege-Escalation.md","type":"file","file":true},{"name":"Reverse-Engineering.md","path":"cyber-security/Reverse-Engineering.md","type":"file","file":true},{"name":"Social-Engineering.md","path":"cyber-security/Social-Engineering.md","type":"file","file":true},{"name":"Web-Exploitaion.md","path":"cyber-security/Web-Exploitaion.md","type":"file","file":true}]},{"name":"databases","id":"2","path":"databases","type":"dir","file":false,"children":[{"name":"MongoDB.md","path":"databases/MongoDB.md","type":"file","file":true},{"name":"MySQL.md","path":"databases/MySQL.md","type":"file","file":true},{"name":"PostgreSQL.md","path":"databases/PostgreSQL.md","type":"file","file":true},{"name":"SQLite.md","path":"databases/SQLite.md","type":"file","file":true}]},{"name":"programming-langs","id":"3","path":"programming-langs","type":"dir","file":false,"children":[{"name":"Java.md","path":"programming-langs/Java.md","type":"file","file":true},{"name":"JavaScript.md","path":"programming-langs/JavaScript.md","type":"file","file":true},{"name":"PHP.md","path":"programming-langs/PHP.md","type":"file","file":true},{"name":"Python.md","path":"programming-langs/Python.md","type":"file","file":true},{"name":"Rust.md","path":"programming-langs/Rust.md","type":"file","file":true},{"name":"Shell.md","path":"programming-langs/Shell.md","type":"file","file":true}]},{"name":"web-development","id":"4","path":"web-development","type":"dir","file":false,"children":[{"name":"back-end","id":"5","path":"web-development/back-end","type":"dir","file":false,"children":[{"name":"Actix-Web.md","path":"web-development/back-end/Actix-Web.md","type":"file","file":true},{"name":"Django.md","path":"web-development/back-end/Django.md","type":"file","file":true},{"name":"ExpressJS.md","path":"web-development/back-end/ExpressJS.md","type":"file","file":true},{"name":"Flask.md","path":"web-development/back-end/Flask.md","type":"file","file":true},{"name":"PHP.md","path":"web-development/back-end/PHP.md","type":"file","file":true}]},{"name":"front-end","id":"6","path":"web-development/front-end","type":"dir","file":false,"children":[{"name":"HTML-CSS.md","path":"web-development/front-end/HTML-CSS.md","type":"file","file":true},{"name":"JavaScript.md","path":"web-development/front-end/JavaScript.md","type":"file","file":true},{"name":"React.md","path":"web-development/front-end/React.md","type":"file","file":true}]}]}]};

var text_data = {"cyber-security/Cryptography.md":"## Cryptography\nCryptography or cryptology is the practice and study of techniques for secure communication in the presence of third parties called adversaries.\n\n### Hash Cracking Tools\n- [John-The-Ripper](https://github.com/magnumripper/JohnTheRipper)\n- [HashCat](https://github.com/hashcat/hashcat)\n\n### Crypto Libraries\n#### rust\n- [rust-crypto](https://github.com/DaGenix/rust-crypto) - Mostly pure-Rust implementation of various cryptographic algorithms.\n- [ring](https://github.com/briansmith/ring) - Safe, fast, small crypto using Rust & BoringSSL's cryptography primitives.\n\n#### python\n- [bcrypt](https://github.com/pyca/bcrypt) - Modern password hashing for your software and your servers.\n\n### Tools\n- [ironssh](https://github.com/IronCoreLabs/ironssh): Secure end-to-end encrypted file sharing over ssh.\n- [git-crypt](https://github.com/AGWA/git-crypt): Transparent file encryption in git.\n- [kawaii-vault](https://github.com/0xCN/kawaii-vault): CLI Password manager built in gist.\n\n## [Asymmetric Encryptions](https://en.wikipedia.org/wiki/Public-key_cryptography)\n## [Symetric Encryptions](https://en.wikipedia.org/wiki/Symmetric-key_algorithm)\n\n### Ciphers\n- Caesar\n- Polygram Substitution\n- Hill","cyber-security/Network-Pentesting.md":"## Network Pentesting\nNetwork pentesting or identifying exploitable vulnerabilities in networks, systems, hosts and network devices (ie: routers, switches)\n\n- SSH Attacks\n- DNS Poisoning\n- AV Evasion\n- Tunneling\n- Payloads\n- DLL Hijacking\n- Hash Dumping\n- MITM Attacks\n- Wifi Pentesting\n- ARP Spoofing\n- Port Forwarding & reverse shells\n- Getting past Firewalls\n- AD Attacks\n- NMAP","cyber-security/OSINT.md":"## Open-source intelligence (OSINT)\nOpen-source intelligence is data collected from publicly available sources to be used in an intelligence context. In the intelligence community, the term \"open\" refers to overt, publicly available sources. It is not related to open-source software or collective intelligence.\n\n\n- Google Hacking: To Find Unsecure Systems\n- ReUsed Credentials: Leaks on the internet\n- Reverse Image Searches\n- Email/Phone/Username Lookups\n- Metadata Analysis\n\ncheck these [resources](https://github.com/jivoi/awesome-osint) out.","cyber-security/Privilege-Escalation.md":"## Privilege Escalation\nPrivilege escalation is the act of exploiting a bug, design flaw or configuration oversight in an operating system or software application to gain elevated access to resources that are normally protected from an application or user.\n\n\n### Linux\n- [GTFOBins](https://gtfobins.github.io/)\n- Escaping restricted shells\n- Exploiting Sudo-rights\n- Suid misconfigurations\n- Kernal Exploits\n- Cronjobs\n- Writable files or script as root\n- Bad path configuration\n- Unmounted filesystems\n- Inside service\n- Wildcard Injection\n- Enumeration\n\n### Windows\n- Active Directory Exploitaion\n- Potato\n- Juicy Potato\n- DLL Hijacking \n- Enumeration\n\n### Tools\nUseful Enumeration Tools I Use.\n\n#### Linux\n- [LinEnum](https://github.com/rebootuser/LinEnum)\n- [Unix PrivEsc](http://pentestmonkey.net/tools/audit/unix-privesc-check)\n- [Linprivchecker.py](https://github.com/reider-roque/linpostexp/blob/master/linprivchecker.py)\n\n#### Windows\n- [JAWS](https://github.com/411Hall/JAWS)\n- [Sherlock](https://github.com/rasta-mouse/Sherlock)\n- [Enum4Linux](https://github.com/portcullislabs/enum4linux)\n\n\n[Metasploit-Framework](https://github.com/rapid7/metasploit-framework)\n","cyber-security/Reverse-Engineering.md":"## Reverse Engineering\nReverse engineering, the process of taking a software program's binary code and recreating it so as to trace it back to the original source code, is being widely used in computer hardware and software to enhance product features or fix certain bugs.\n\n\n### Android\n- Malware Analyses\n- Finding Security Vulns in APKs\n- [Apkool](https://github.com/iBotPeaches/Apktool): A tool for reverse engineering Android apk files\n- [dex2jar](https://github.com/pxb1988/dex2jar): Tools to work with android .dex and java .class files \n- [jd-gui](https://github.com/java-decompiler/jd-gui): A standalone Java Decompiler GUI\n- [jadx](https://github.com/skylot/jadx): Dex to Java decompiler\n\n### Frimware Images\nAnalyzing for bugs and security vulnerabilites\n- [binwalk](https://github.com/ReFirmLabs/binwalk): Firmware Analysis Tool\n","cyber-security/Social-Engineering.md":"## Social Engineering\nSocial engineering, in the context of information security, is the psychological manipulation of people into performing actions or divulging confidential information.\n\n\n- Phishing\n- Spear Phishing\n- Vishing\n- Pretexting\n- Email Spoofing\n- RFID Card Cloning\n\n### Books\n- Social Engineering: The Science of Human Hacking\n- The Art of Deception: Controlling the Human Element of Security\n\nnote: some aspects of social-engineering largely depends on [OSINT](https://en.wikipedia.org/wiki/Open-source_intelligence).","cyber-security/Web-Exploitaion.md":"## Web Exploitation\nWeb exploitation is when an attacker exploits vulnerabilities or misconfiguration in a website or web application code that allows him to gain some level of control of the site\n\n\n### Vulnerabilites\n- Open Redirects\n- Command Injections\n- CRLF\n- File Uploads\n- Local File Inclusions\n- Remote File Inclusions\n- XSLT - Code execution\n- SSRF\n- CSRF\n- Server-side template Injections\n- SQL Injections\n  - Blind\n  - Time-Based\n  - Authentications\n  - Routed\n  - Numeric\n  - Insert\n  - File Reading\n  - Error\n  - String\n- SQL Truncation\n- NoSQL Injections\n- PHP - Serialization\n- PHP - Path Truncation\n- PHP - Type Juggling\n- PHP - Loose Comparison\n- LDAP Injections\n- XXE (XML External Entity)\n- XPath Injections\n- Insecure Deserializations\n","databases/MongoDB.md":"## MongoDB\nMongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema.\n\n\nMERN stack amirite?\n\n### Used it for\n- MongoDB with node.js\n- MongoDB for Content Management Systems\n","databases/MySQL.md":"## MySQL\nMySQL is an open-source relational database management system (RDBMS).\n\n\nused it for developing an e-commerce website with django ¯\\_(ツ)_/¯","databases/PostgreSQL.md":"## PostgreSQL\nPostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.\n\n\nschool forces you to learn things, ya kno?\n\n```\n         |\n         |  /\n         | /\n   .~^(,&|/o.\n  |`-------^|\n  \\         /\n   `======='\n```\n","databases/SQLite.md":"## SQLite\nSQLite is a relational database management system contained in a C library. In contrast to many other database management systems, SQLite is not a client–server database engine. Rather, it is embedded into the end program.\n\nthis boi helps me a lot with smol projects.\n\n### Used it for\n- Temporary Databases\n- Low traffic websites\n- Demos\n- CLI Tools that needs a DB\n","programming-langs/Java.md":"## Java\nJava is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.\n\nYes! I use java mostly because of school, shut up.\n\n## Used it for\n- Understanding Reverse Engineered APKs\n- Android malware analysis\n- Developing/(Experimenting with) Android Apps\n- Understanding Spring Framework Vulnerabilities\n- ~~schoolshit~~ ah. schoolShit","programming-langs/JavaScript.md":"## JavaScript (JS)\nJavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.\n\n### Used it for\n- Your everyday web-apps\n- DOM manipulations\n- Node\n- React\n- understanding XSS(cross-site scripting)\n- making browser extensions\n- JQuery technically not JS but still \n\n\nNPM is bae","programming-langs/PHP.md":"## PHP\nPHP is a popular general-purpose scripting language that is especially suited to web development.\n\nLAMP stack huh?\n\n### Used it for\n- Websites n Webapps\n- CLI Tools\n- Rest APIs\n- Cryptography extension\n- Understanding PHP WebSecurity Vulnerabilities\n  - Serialization\n  - Path Truncation\n  - Type Juggling\n  - Loose Comparison\n  - Command Injection\n  - etc\n","programming-langs/Python.md":"## Python\nPython is an interpreted, high-level, general-purpose programming language.\n\nI'm a PySlut. \n\n### Used it for\n- Automations\n- high level Web-Scraping\n  - selenium\n  - beautifulsoup\n  - requests\n  - scrapy\n  - urllib\n- Web-Development\n  - flask\n  - django\n- Asynchronous Tools\n- CLI/GUI Tools (QT for Python)\n- Cryptography Libraries\n- Game Development (PyGames)\n- Web Vulnerability Exploitaions\n- Binary Exploit Developments (PwnTools)\n- Creating Neural Nets\n- Image Processing\n\n\nConclusion: I Love PY.\n","programming-langs/Rust.md":"## Rust\nRust is a multi-paradigm programming language focused on performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but provides memory safety without using garbage collection.\n\na steep learning curve tho\n\n## Used it for\n- Cryptography Libraries\n- Web-Development\n- CLI Tools\n- Terminal UI(tui.rs)\n- Writing Text-Editors\n\n\nP.S. Cargo is awesome.","programming-langs/Shell.md":"## Shell\nthese are more of scripting languages rather than programming. typical operations performed by shell scripts include file manipulation, program execution, and printing text.\n\n\n### Bash\nGNU Bash or simply Bash is a Unix shell and command language.\n\n### ZSH\nThe Z shell is a Unix shell that can be used as an interactive login shell and as a command interpreter for shell scripting.\n\n### Fish\nThe friendly interactive shell is a Unix shell that attempts to be more interactive and user-friendly than those with a longer history or those formulated as function-compatible replacements for the aforementioned.\n","web-development/back-end/Actix-Web.md":"## [Actix Web](https://github.com/actix/actix-web)\nActix web is a small, pragmatic, and extremely fast rust web framework.\n\n    Supported HTTP/1.x and HTTP/2.0 protocols\n    Streaming and pipelining\n    Keep-alive and slow requests handling\n    Client/server WebSockets support\n    Transparent content compression/decompression (br, gzip, deflate)\n    Configurable request routing\n    Multipart streams\n    Static assets\n    SSL support with OpenSSL or Rustls\n    Middlewares (Logger, Session, CORS, etc)\n    Includes an asynchronous HTTP client\n    Supports Actix actor framework\n\n\nthe framework got criticized for using `unsafe` too much","web-development/back-end/Django.md":"## [Django](https://github.com/django/django)\nDjango is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.\n\n- Django comes with a flexible Admin Panel\n- DRY Principle (Don’t Repeat Yourself)\n\n### Used it for\n- Restaurant web-systems\n- e-commerce websites\n","web-development/back-end/ExpressJS.md":"## [ExpressJS](https://github.com/expressjs/express)\nFast, unopinionated, minimalist web framework for node.\n\n    Robust routing\n    Focus on high performance\n    Super-high test coverage\n    HTTP helpers (redirection, caching, etc)\n    View system supporting 14+ template engines\n    Content negotiation\n    Executable for generating applications quickly\n\n","web-development/back-end/Flask.md":"## [Flask](https://github.com/pallets/flask)\nFlask is a lightweight WSGI web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications.\n\n### Used it for\n- Rest APIs\n- Microservices\n\n\nSimple, yet fast.","web-development/back-end/PHP.md":"## PHP\nPHP is a popular general-purpose scripting language that is especially suited to web development.\n\nLAMP Stack, nothing else.","web-development/front-end/HTML-CSS.md":"## HTML - Hypertext Markup Language\nHypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.\n\n## CSS - Cascading Style Sheets\nCascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML.\n\n\n### Some Design Stuff\n- [coolors.co](https://coolors.co/) - color schemes generator.\n- [figma](https://www.figma.com/) - design, prototype.\n- [google-fonts](https://fonts.google.com/) - Offering an intuitive and robust directory of open source designer web fonts.\n- [typeanything](https://app.typeanything.io/) - Create great font combinations.\n- [flaticons](https://www.flaticon.com) - Thousands of free flat icons.\n- [iconfinder](https://www.iconfinder.com/) - Millions of icons.","web-development/front-end/JavaScript.md":"## JavaScript\nJavaScript is a programming language that adds interactivity to your website (for example games, responses when buttons are pressed or data is entered in forms, dynamic styling, and animation).\n\n### Used it for\n- Data Visualization\n- Animations\n- Image Processing\n- Over all webapp shit","web-development/front-end/React.md":"## React\nReact is a JavaScript library for building user interfaces.\n- REST APIs: Working with Rest APIs.\n- material-ui: React components for faster and easier web development.\n\nThe virtual dom <3\n"};

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
// DISABLED BECAUSE OF SLOW REQUESTS
/*
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
*/

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
          {renderTree(data)}
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
            {dialogText(text_data)}
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