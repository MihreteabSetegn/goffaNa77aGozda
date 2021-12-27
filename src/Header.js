import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, MenuItem, Link  } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

import gofagara from "./gofagara.png"


const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#2E3B55",
     paddingRight: "118px",
     "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    paddingTop: 20,
    
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    paddingLeft: "0px",
 },
 toolbar: {
  display: "flex",
  justifyContent: "space-between",
},
imgStyle: {
  maxWidth: 60,
  // justifyContent: "space-between",
  justify: "center",
  paddingTop: "10px",
  paddingRight: "15px",
  alignItems: "left"
 
},
}));

const headersData = [
  {
    label: "About",
    href: "/About",
  },
  {
    label: "Support Us",
    href: "/Support",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];


export default function Header() {

  useEffect(() => {
    document.title = "Gofagara.org"
 }, []);

  const { header, menuButton, toolbar, imgStyle } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })
const { mobileView, drawerOpen  } = state;

  const displayMobile = () => {

    const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
          {/* {<img src={gofagara} alt="gofa gara!" className={imgStyle} />} */}
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
  <div>{femmecubatorLogo}</div>
  </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };



  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);


  const displayDesktop = () => {
    return <Toolbar className={toolbar}>
      {femmecubatorLogo}
      {getMenuButtons()}
      </Toolbar>;
  };


  const femmecubatorLogo = ( <div flexWrap="wrap"  flexDirection= "row">
      <Typography display="inline"> <img src={gofagara} alt="gofa gara!" className={imgStyle} /></Typography> 
      {/* <Typography  variant="h6" component="h1" className={logo} display="inline">
        Goffa Gara
      </Typography> */}
      </div>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };
  
  return (
    <header>
      <AppBar  className={header}>
         {mobileView ? displayMobile() : displayDesktop()}
         </AppBar>
    </header>
  );

  
}