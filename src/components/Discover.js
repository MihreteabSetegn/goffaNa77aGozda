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
      <div>
        <Data/>
      </div>
      <h2 style={{marginBottom: "20px", marginTop: "20px"}}>
            <Link href="https://en.wikipedia.org/wiki/Gamu-Gofa"  target="_blank" style={{color: "blue", fontFamily: "cursive"}}>Visit Gamo Gofa Area Wiki Page to learn more...</Link>
      </h2>
  </div>
  );
}

export default withRouter(Discover);