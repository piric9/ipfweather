import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Location from "../../../../models/location";
import LocationCard from "./LocationCard";


interface LocationListProps{
    locations : Array<Location>
    handleLocationClick : (woeid:number) => void;
}

const LocationList : React.FC<LocationListProps> = (props) => {

    return(
        <div className = "location-container">
            <div className="container">
                <div className="row fields-row"> 
                    <div className="col-2">
                        <label>Id:</label>
                    </div>
                    <div className="col-3">
                        <label>Name:</label>
                    </div>
                    <div className="col-2">
                        <label>Location Type:</label>
                    </div>
                    <div className="col-2">
                        <label>Distance:</label>
                    </div>
                    <div className="col-3">
                        <label>Longitude/Latitude:</label>
                    </div>
                </div>
                <div className="row">                  
                    {props.locations.map(location => 
                        <LocationCard 
                            key = {location.woeid} 
                            woeid = {location.woeid}
                            title = {location.title} 
                            latt_long = {location.latt_long} 
                            location_type = {location.location_type} 
                            distance = {location.distance}
                            handleLocationClick = {props.handleLocationClick}>
                        </LocationCard>
                )}               
                </div>
            </div>
        </div>
    )
}

export default LocationList;