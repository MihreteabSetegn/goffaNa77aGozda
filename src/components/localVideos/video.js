import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import vido1 from '../../images/vido1.mp4';
import vido2 from '../../images/vido2.mp4';

class Video extends Component  {
    render() {
        return (
            <div 
                className='helpVideo container border'
                style={{
                    marginTop: "15px",
                    marginBottom: "15px",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                    paddingRight: "10px"
                }}
                >
               <h1 style={{color: "white", fontFamily: "cursive"}}>Transporting patients to the nearest health fascility and it's difficulties</h1>
               <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "10px"
                    }}
                >
                <ReactPlayer
                        url={vido1}
                        className='reactPlayer'
                        controls = {true}
                    />
               </div>
              
                <h1 style={{color: "white", fontFamily: "cursive"}}>How we are impacting our community and it has been broadcasted on local media</h1>
                <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "40px"
                    }}
                >
                    <ReactPlayer
                        url={vido2}
                        className='reactPlayer'
                        controls = {true}
                    />
                </div>
                
            </div>
        )
    }
 
}

export default Video;
