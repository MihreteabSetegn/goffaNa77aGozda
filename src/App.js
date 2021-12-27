import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const sidebar = {
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};



function App() {
  return (
    <React.Fragment>
        <div className="App">
          <Header/>
          <Footer social={sidebar.social}/>
        </div>
    </React.Fragment>
  );
}
export default App;