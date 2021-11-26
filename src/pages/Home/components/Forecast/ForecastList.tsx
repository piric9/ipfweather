import DailyForecast from "models/daily-forecast";
import Forecast from "pages/Home/Forecast";
import React, {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ForecastCard from "./ForecastCard";


interface ForecastListProps{
    forecasts: Array<DailyForecast>
}

const ForecastList : React.FC<ForecastListProps> = (props) => {
    const [weather, setWeather] = useState<DailyForecast>(props.forecasts[0] as DailyForecast)

    const onLoad =  () => {
        console.log(weather)
      }
    
    const handleWeatherClick = (id: number) => {
        const forecast = props.forecasts.find(fc => fc.id === id) as DailyForecast
        console.log(forecast)
        setWeather(forecast);
        }

    useEffect(onLoad, []);

    
    return(

        <div className="center-container">

                <div className="row center-container test-hover">                  
                    {props.forecasts.slice(0,5).map(forecast => 
                        <ForecastCard 
                            key = {forecast.id} 
                            id = {forecast.id}
                            icon = {forecast.weather_state_abbr} 
                            max_temp = {forecast.max_temp} 
                            min_temp = {forecast.min_temp} 
                            day = {new Date(forecast.applicable_date).getDay()}
                            date = {new Date(forecast.applicable_date).getDate()}
                            handleWeatherClick = {handleWeatherClick}                         
                        >
                        </ForecastCard>
                )}  
                </div>
                { weather !== undefined ? 
                <div className="weather-mode-details">
                    <div className="row">
                        <div className="col-2">
                        </div>
                        <div className="col-2">
                            <label><b>Air pressure:</b></label>
                            <p><i>{Math.round(weather.air_pressure)}</i></p>
                        </div>
                        <div className="col-2">
                            <label><b>Humidity:</b></label>
                            <p><i>{Math.round(weather.humidity)}%</i></p>
                        </div>
                        <div className="col-2">
                            <label><b>Current temperature:</b></label>
                            <p><i>{Math.round(weather.the_temp)}</i></p>
                        </div>
                        <div className="col-2">
                            <label><b>Visiblity:</b></label>
                            <p><i>{Math.round(weather.visibility)}</i></p>
                        </div>
                        <div className="col-2">
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-2">
                        </div>
                        <div className="col-2">
                            <label><b>Wind direction:</b></label>
                            <p><i>{Math.round(weather.wind_direction)}°</i></p>
                        </div>
                        <div className="col-2">
                            <label><b>Wind direction compass:</b></label>
                            <p><i>{weather.wind_direction_compass}</i></p>
                        </div>
                        <div className="col-2">
                            <label><b>Wind speed:</b></label>
                            <p><i>{Math.round(weather.wind_speed)}mph</i></p>
                        </div>
                        <div className="col-2">
                            <label><b>Forecast created:</b></label>
                            <p><i>{weather.weather_state_name}</i></p>
                        </div>
                        <div className="col-2">
                        </div>
                </div>
            </div>
                
                
                : null }   
        </div>
    )
}

export default ForecastList;