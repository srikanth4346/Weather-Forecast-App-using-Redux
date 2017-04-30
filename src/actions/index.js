import axios from 'axios';

const API_KEY = '7c3ca7e8da35775d6613654f2e6da2f2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };

}


