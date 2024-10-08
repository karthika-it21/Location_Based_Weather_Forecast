import { DateTime } from 'luxon';



const API_KEY = "ed8531700bdda5c2fab493f1695b7660";
const BASE_URL = "https://api.openweathermap.org/data/2.5";



const getWeatherData = (infoType , searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});


    return fetch(url)
    .then((res) => res.json())
    
};

const formatCurrentWeather = (data) => {
const {
    coord: {lat , lon},
    main: {temp, feels_like, temp_min , temp_max , pressure ,humidity},
    name,
    dt,
    sys: {country, sunrise, sunset},
    weather,
    wind: {speed}

} = data;

const {main: details, icon} = weather[0];

return {lat, lon, temp, feels_like, temp_min, temp_max, pressure , humidity, name, dt, country, sunrise, sunset, details , icon, speed};
};

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly} = data;
    if (daily && hourly) {
    
    daily = daily.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });

    hourly = hourly.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    });
}


    return {timezone , daily , hourly};
};

/*const formatForecastWeather = (data) => {
    if (!data) {
        console.error("Error: No forecast data provided");
        return {}; // Return an empty object if no data is provided
    }

    const { timezone, daily, hourly } = data;

    if (!timezone || !daily || !hourly) {
        console.error("Error: Forecast data is incomplete");
        return {}; // Return an empty object if any required data is missing
    }

    const formattedDaily = daily.slice(1, 6).map(d => {
       return { title: formatToLocalTime(d.dt, timezone, 'ccc'),
        temp: d.temp.day,
        icon: d.weather[0].icon}
    });

    const formattedHourly = hourly.slice(1, 6).map(d => ({
        title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
        temp: d.temp.day,
        icon: d.weather[0].icon
    }));

    return { timezone, daily: formattedDaily, hourly: formattedHourly };
};*/

  
  const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather' , searchParams).then(formatCurrentWeather)
 
 const{lat , lon} = formattedCurrentWeather;

 const formattedForecastWeather = await getWeatherData('onecall', 
 {
    lat, lon, exclude: "current,minutely,alerts",
     units: searchParams.units,
 }).then(formatForecastWeather);
 
 
    return {...formattedCurrentWeather, ...formattedForecastWeather};
 };

const formatToLocalTime = (
    secs , 
    zone ,
    format = "cccc , dd LLL yyyy' | Local time : 'hh:mm a"
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => 
`http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export {formatToLocalTime , iconUrlFromCode};