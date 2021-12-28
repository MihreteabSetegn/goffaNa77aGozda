import React from 'react';
import {withRouter} from 'react-router';
import ImageSliderTwo from './imageSliders/imageSliderTwo';
import { SliderDataTwo } from './imageSliders/sliderData';
import Video from './localVideos/video';
import SupportMethods from './supportMethods';



 function Support() {
 
  return (
   <div>
      <Video/>
      <div>
         <ImageSliderTwo slides = {SliderDataTwo}/>
      </div>
      <div style={{marginBottom: "40px"}} className="container border">
         <SupportMethods/>
      </div>
   </div>
  );
}

export default withRouter(Support);