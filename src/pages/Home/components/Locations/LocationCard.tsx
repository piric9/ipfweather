import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface LocationCardProps{
    woeid : number;
    title : string;
    distance : number;
    latt_long: string;
    location_type: string;
    handleLocationClick : (id : number) => void;
}

const LocationCard : React.FC<LocationCardProps> = (props) => {

    return(
                <div className="test-hover" onClick = {() => props.handleLocationClick(props.woeid)}>
                    <div className="row location-row">
                        <div className="col-2">
                            <span>{props.woeid}</span>
                        </div>
                        <div className="col-3">
                            <span>{props.title}</span>
                        </div>
                        <div className="col-2">
                            <span>{props.location_type}</span>
                        </div>
                        <div className="col-2">
                            <span>{props.distance}</span>
                        </div>
                        <div className="col-3">
                            <span>{props.latt_long}</span>
                        </div>
                    </div>
                </div>

    )
}

export default LocationCard;