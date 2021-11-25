import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface ForecastCardProps{
    id : number;
    icon : string;
    max_temp : number;
    min_temp: number;
}

const ForecastCard : React.FC<ForecastCardProps> = (props) => {

    return(
                <div className="test-hover">
                    <div className="row location-row">
                        <div className="col-2">
                            <span>{props.id}</span>
                        </div>
                        <div className="col-3">
                            <img src="https://www.metaweather.com/static/img/weather/ico/s.ico"/>
                        </div>
                        <div className="col-2">
                            <span>{props.max_temp}</span>
                        </div>
                        <div className="col-2">
                            <span>{props.min_temp}</span>
                        </div>
                    </div>
                </div>

    )
}

export default ForecastCard;