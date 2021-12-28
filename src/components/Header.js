import {Typography, makeStyles, Link,
   List, ListItem, ListItemText} from "@material-ui/core";
import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";

import InfoIcon from "@material-ui/icons/Info"
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';


import About from "./About";
import Support from "./Support";
import Discover from "./Discover";
import Contact from "./Contact";

import gofagara from "../images/gofagara.png"
import MapCity from "./body/maps";


const useStyles = makeStyles(() => ({
 customDivStyle: {
  backgroundColor: "#FA8072",
  borderRadius: "50px",
  width: "100%"
}
}));

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Support Us",
    href: "/support",
  },
  {
    label: "Discover Goffa/Invest",
    href: "/discover",
  },
  {
    label: "Contact Us",
    href: "/contact",
  }
];


export default function Header() {
  const { customDivStyle } = useStyles();

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none", padding: "0px 10px",
            wordWrap: "normal"},
            key: label,
          }}
          style={{display: "inline-block", textDecoration: 'none'}}
        >
          <List>
            <Link to= {href}  style={{color: "white", textDecoration: 'none'}}>
              <ListItem button >
                 {label=== "About" && <Switch > <InfoIcon/> </Switch> }
                 {label=== "Support Us" && <Switch> <MonetizationOnIcon/> </Switch> }
                 {label=== "Discover Goffa/Invest" && <Switch> <AddLocationIcon/> </Switch>}
                 {label=== "Contact Us" && <Switch> <ContactPageIcon/> </Switch>}
                 {label=== "Home" && <Switch> <HomeIcon/> </Switch>}
                <ListItemText style={{justifyContent: "space-between"}}>
                  {label}
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        </Link>
      );
    });
  };


  const displayDesktop = () => {
    return  <Router> 
              <div className={customDivStyle}>
                    {getDrawerChoices()}
              </div>
              <Switch>
                <Route exact path="/" component={MapCity}>
                  <MapCity/>
                </Route>
                <Route exact path="/about" component={About}>
                  <About/>
                </Route>
                <Route exact path="/support" component={Support}>
                  <Support/>
                </Route>
                <Route exact path="/discover" component={Discover}>
                  <Discover/>
                </Route>
                <Route exact path="/contact" component={Contact}>
                  <Contact/>
                </Route>
              </Switch>
           
      </Router>
  };


  const femmecubatorLogo = ( 
    <div
      flexWrap="wrap"  
      flexDirection= "row"
      >
      <Typography 
        display="inline"> 
        <Link style={{borderRadius: "50%", marginTop: "10px", marginBottom: "10px"}} href="/"><img src={gofagara} alt="gofa gara!" style={{borderRadius: "50%", maxWidth: "100px", marginBottom: "10px"}} /></Link>
      </Typography> 
    </div>
  );

  
  return ( <header>
      {femmecubatorLogo}
      { displayDesktop()}
    </header>
  );

  
}