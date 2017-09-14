import axios from 'axios';

const API_KEY =
const ROOT_URL =

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);

  console.log('Request: '+request);

  return{
    type: FETCH_WEATHER,
    payload: request
  }
};
