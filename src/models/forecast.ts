import DailyForecast from "./daily-forecast";
interface WeatherForecast {
    consolidated_weather: DailyForecast;
    time : string;
    sun_rise : string;
    sun_set: string;
    timezone_name: string
  }
export default WeatherForecast;