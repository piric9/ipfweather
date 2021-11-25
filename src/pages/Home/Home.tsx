import React, {useState, useEffect} from 'react';
import Location from 'models/location';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import LocationService from 'services/api/location';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationList from './components/Locations/LocationList';

const Home: React.FC<RouteComponentProps> = (props) => {
  
  const [locations, setLocations] = useState<Array<Location>>([]
  );

  const handleLocationClick = (id: number) => {
    props.history.push({
      pathname: '/forecast',
      state: id})
    }

  const getLocations = () => {
    console.log("called")
    const locationService : LocationService = new LocationService();
      locationService.getLocation(36.96, -122.02)
        .then((data) => {
          setLocations(data);
          console.log(locations)
        })
        .catch((err) => {
          alert(err);
        });
  }

  return(
    <div>
      <div className="container center-container">
        <h1>Weather</h1>
        <p>Enter lattitude: </p>
        <input type="text"></input>
        <p>Enter longitude: </p>
        <input type="text"></input>
        <br/>
        <button className="btn btn-primary button-margin" onClick={getLocations}>Search</button>
      </div>
      
        { locations.length > 0 ? 
        <div className="locations-div">
        <LocationList 
          locations ={locations} handleLocationClick = {handleLocationClick}>
        </LocationList>
        </div> : null }   
    </div>
    );

}

export default Home;
