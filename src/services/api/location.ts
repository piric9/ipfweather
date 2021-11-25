import config from './config';
import Location from 'models/location';

class LocationService {
  async getLocation(latt: number, long: number): Promise<any> {
    const response = await fetch(`${config.baseUrl}/location/search/?lattlong=${latt},${long}`, {
      method: 'GET'
    });
    return response.ok ? response.json() : null;
  }

  async getLocationByWoeid(woeid: number): Promise<any> {
    const response = await fetch(`${config.baseUrl}/location/${woeid}`, {
      method: 'GET'
    });
    return response.ok ? response.json() : null;
  }
}

export default LocationService;
