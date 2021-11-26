import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface ForecastCardProps{
    id : number;
    icon : string;
    max_temp : number;
    min_temp: number;
    day: number;
    date: number;
    handleWeatherClick : (id : number) => void;
}

const ForecastCard : React.FC<ForecastCardProps> = (props) => {

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return(
                <div className="col-2 weather-card" onClick = {() => props.handleWeatherClick(props.id)}>
                    <div>
                        <div>
                            <span><b>{weekday[props.day]} </b></span>
                            <span>{ordinal_suffix_of(props.date)}</span>
                            <div>
                                <img src={"https://www.metaweather.com/static/img/weather/ico/"+props.icon+".ico"}/>
                                <div>
                                    <label><b>{Math.round(props.max_temp)} °C</b></label>
                                    <br></br>
                                    <label>{Math.round(props.min_temp)} °C</label>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
    )
}

function ordinal_suffix_of(i: number) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

export default ForecastCard;