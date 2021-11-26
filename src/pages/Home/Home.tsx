import React, {useState, useEffect} from 'react';
import Location from 'models/location';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import LocationService from 'services/api/location';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationList from './components/Locations/LocationList';

const Home: React.FC<RouteComponentProps> = (props) => {
  
  const [locations, setLocations] = useState<Array<Location>>([]
  );
  const [longitude, setLongitude] = useState(0);
  const [lattitude, setLattitude] = useState(0);

  const handleLocationClick = (id: number) => {
    const location = locations.find(loc => loc.woeid === id)
    props.history.push({
      pathname: '/forecast',
      state: location})
    }

  const getLocations = () => {
    console.log(lattitude)
    console.log(longitude)
    const locationService : LocationService = new LocationService();
      locationService.getLocation(lattitude, longitude)
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
        <input type="text" onChange={e => e.target.value ? setLattitude(parseInt(e.target.value)): setLattitude(0)}></input>
        <p>Enter longitude: </p>
        <input type="text" onChange={e => e.target.value ?  setLongitude(parseInt(e.target.value)): setLongitude(0)}></input>
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
