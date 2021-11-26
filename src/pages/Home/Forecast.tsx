import React, {useState, useEffect} from 'react';
import DailyForecast from 'models/daily-forecast';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import LocationService from 'services/api/location';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationList from './components/Locations/LocationList';
import ForecastList from './components/Forecast/ForecastList';
import Location from 'models/location';

const Forecast: React.FC<RouteComponentProps> = (props) => {
  
  const [forecast, setForecast] = useState<Array<DailyForecast>>([]
    );
  
  const [location, setLocation] = useState<Location>(props.location.state as Location);
    
  const onLoad =  () => {
    console.log(" hey")
    const id = location.woeid
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

  const handleLocationClick = (id: number) => {
    props.history.push({
      pathname: '/'})
    }

  useEffect(onLoad, []);

  return(
    <div>
      <div className="container center-container">
        <h3>Five Day Weather Forecast</h3>
        <div>
          <div>
            <h3><i>{location.location_type} of</i></h3>
            <h2><b>{location.title}</b> </h2>
            <p><i>Please click on the date to show more info</i></p>
          </div>
        </div>
        <div>
          <ForecastList 
            forecasts ={forecast} >
          </ForecastList>
        </div>
      </div>
    
    </div>
    );

}

export default Forecast;
