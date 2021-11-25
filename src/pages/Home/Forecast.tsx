import React, {useState, useEffect} from 'react';
import DailyForecast from 'models/daily-forecast';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import LocationService from 'services/api/location';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationList from './components/Locations/LocationList';
import ForecastList from './components/Forecast/ForecastList';

const Forecast: React.FC<RouteComponentProps> = (props) => {
  
  const [forecast, setForecast] = useState<Array<DailyForecast>>([]
    );
    
  const onLoad =  () => {
    console.log(" hey")
    var id = props.location.state
    console.log(id)
    getLocationByWoeid(id)
  }

  const getLocationByWoeid = (id: any) => {
    console.log("called")
    const locationService : LocationService = new LocationService();
      locationService.getLocationByWoeid(id)
        .then((data) => {
          console.log(data.consolidated_weather)
          setForecast(data.consolidated_weather);
          console.log(forecast)
          console.log(props)
        })
        .catch((err) => {
          alert(err);
        });
  }

  const handleClick = () => {
      console.log(forecast)
  }

  useEffect(onLoad, []);

  return(
    <div>
      <div className="container center-container">
        <h1>Weather</h1>
        <button onClick={handleClick}>Click here</button>
        <div className="locations-div">
          <ForecastList 
            forecasts ={forecast} >
          </ForecastList>
        </div>
      </div>
    
    </div>
    );

}

export default Forecast;
