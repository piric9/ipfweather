import DailyForecast from "models/daily-forecast";
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ForecastCard from "./ForecastCard";


interface ForecastListProps{
    forecasts : Array<DailyForecast>
}

const ForecastList : React.FC<ForecastListProps> = (props) => {

    return(
        <div className = "forecast-container">

                <div className="row">                  
                    {props.forecasts.map(forecast => 
                        <ForecastCard 
                            key = {forecast.id} 
                            id = {forecast.id}
                            icon = {forecast.weather_state_abbr} 
                            max_temp = {forecast.max_temp} 
                            min_temp = {forecast.min_temp} 
                        >
                        </ForecastCard>
                )}               
                </div>
        </div>
    )
}

export default ForecastList;