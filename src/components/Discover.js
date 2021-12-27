import React from 'react';
import {withRouter} from 'react-router';
import Data from './demographic/data';
import ImageSlider from './imageSliders/imageSlider';
import { SliderData } from './imageSliders/sliderData';

import {Link} from "@material-ui/core";


 function Discover() {
  return (
  <div>
      <div>
        <ImageSlider slides= {SliderData}/>
      </div>
      <div 
        style={
          {  
            marginTop: "5px", 
          }
              } 
        >
        <Data/>
      </div>
      <div style={{marginBottom: "10px", marginTop: "10px"}}>
            <Link href="https://en.wikipedia.org/wiki/Gamu-Gofa"  target="_blank" style={{color: "white", fontFamily: "cursive"}}>Visit Gamo Goffa Area Wiki Page to learn more...</Link>
      </div>
  </div>
  );
}

export default withRouter(Discover);