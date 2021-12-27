// import  from 'react'
import React, {Component} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import SupportMethods from '../supportMethods';

const location = {
        address: "Commercial Bank Of Ethopia Sawla Branch",
        lat: 6.301887911709774,
        lng: 36.88314525297877
   
    };

const containerStyle = {
    width: '100%',
    height: '400px',
    };

const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
    );

export class MapCity extends Component {
    render() {
        return (
            <div 
                style={
                    {
                        alignItems: "center", 
                        justifyContent: "center", 
                        paddingBottom: "10px",
                        marginTop: "20px",
                        marginBottom: "20px"
                    }
                }>
                <div style={{marginBottom: "40px", marginTop: "20px"}} className="container border">
                    <SupportMethods/>
                </div>
                <h1 style={{alignContent: "center", paddingTop: "5px", paddingBottom: "5px", fontFamily: "cursive", color: "white"}}>Goffa Area Google Maps</h1>
                <div className="container border" style={{marginBottom: "10px"}}>
                    <LoadScript
                    googleMapsApiKey="AIzaSyArvhYeTccGn6Oh-x0mWVXe_2QDdm8fHGs"
                    >
                        <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={location}
                                zoom={10}
                            >
                            <LocationPin
                                lat={location.lat}
                                lng={location.lng}
                                text={location.address}
                            />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
            
        )
    }
  
}

export default MapCity;
