import "./HeaderBar.css";
import benzene from "../../Logos/benzene_ring.png";
import { ethers } from "ethers";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const HeaderBar = () => {
  const [name, setName] = useState("");

  const classes = useStyles();

  async function handleWalletConnect() {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const ens = await provider.lookupAddress(address);
      console.log(ens);
      if (ens !== null) {
        setName(ens);
      } else {
        setName(address);
      }
    } else {
      alert("no wallet detected!");
    }
  }

  let connectBtn;

  if (name) {
    connectBtn = <Chip label={name} variant="outlined" />;
  } else {
    connectBtn = (
      <Button
        variant="contained"
        color="error"
        style={{ float: "right" }}
        onClick={() => handleWalletConnect()}
      >
        CONNECT WALLET
      </Button>
    );
  }

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <a href="/">
          <div className="home-button">
            <img src={benzene} className="app-logo" />
          </div>
        </a>
        <Typography variant="h5" className={classes.logo}>
          Social Protocol
        </Typography>

        <Box sx={{ flexGrow: 1, height: "100%", marginLeft: "100px" }}>
          {/* <Link to="/projects">
              <Button color="inherit">Projects</Button>
            </Link>
            |
            <Link to="/governance">
              <Button color="inherit">Governance</Button>
            </Link>
            |
            <Link to="/timeline">
              <Button color="inherit">Timeline</Button>
            </Link>
            |
            <Link to="/about">
              <Button color="inherit">About</Button>
            </Link> */}
        </Box>

        <Box>{connectBtn}</Box>
      </Toolbar>
    </AppBar>

    // <div className = "container">
    //     <a href="#" ><div className = "home-button"><img src={benzene} className="app-logo " /></div></a> {/*to add logo image later*/}
    //     <div className='menu-item'>Item 1</div>
    //     <div className='menu-item'>Item 2</div>
    //     <div className='menu-item'>Item 3</div>
    //     <div className='menu-item'>Item 4</div>
    //     <div className="user menu-item">{name}</div>
    //     <button className="user menu-item" onClick={() => handleWalletConnect()}>Connect Wallet</button>
    // </div>
  );
};

export default HeaderBar;
