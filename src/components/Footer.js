import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

function Copyright() { 
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://gofagara.org">
        Goffa Gara
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const {  social } = props;

  const handleUrl = (name) => {
    
    if(name === "Facebook") return "https://www.facebook.com/gofa.gara";
    else if(name === "Twitter") return "http://twitter.com/gofagara";
    else if(name === 'YouTube') return "https://www.youtube.com/channel/UC6KGBPA-tjbh34JjNeEGQDw";
    else return "http://instagram.com/gofagara/";
  }

  return (
    <footer className={classes.footer} style={{marginTop: "10px"}}>
      {social.map((network) => (
        <Link display="block" variant="body1" href={handleUrl(network.name)} key={network} style={{justifyContent: "space-between", alignContent: "center"}} target="_blank">
          <Grid spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Greater Gofa Area Relief Association
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Let's give back to our community!
          <div>Developer: Mihreteab Y Setegn</div>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}