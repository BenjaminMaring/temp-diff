import React from 'react';
import './styles/Weather.css'

export default function Weather({ data }) {

    function getTime(unixTime, timezone) {
        const date = new Date(unixTime * 1000 - timezone);

        const options = { timeZone: 'your-time-zone-here' };

        let hours = date.getHours();
        let minutes = date.getMinutes();

        hours = (hours < 10 ? "0" : "") + hours;
        minutes = (minutes < 10 ? "0" : "") + minutes;
        return hours + ":" + minutes;
    }
    
    return(
            <div className="weather--wrapper">
            { data 
            ? 
            <div className="weather--inner-wrapper">
                <div className="weather--title">
                    <p>{data.name}</p>
                </div> 
                <div className="weather--temp">
                    <p>{data.main.temp.toFixed(1)}</p>
                </div>
                <div className="weather--limits">
                    <p>L  {data.main.temp_min.toFixed(1)} &nbsp;&nbsp; H {data.main.temp_max.toFixed(1)}</p>
                </div>
                <div className="weather--weather-desc">
                    <p>{data.weather[0].description}</p>
                </div>
                <div className="weather--feels-like">
                    <p>Feels like {data.main.feels_like}</p>
                </div>
                <div className="weather--wind-speed">
                    <p>Wind {data.wind.speed}mph</p>
                </div>
                <div className="weather--humidity">
                    <p>Humidity {data.main.humidity}%</p>
                </div>
                <div className="weather--sun">
                    <p>sunrise {getTime(data.sys.sunrise, data.timezone)}</p>
                </div>
                <div className="weather--sun">
                    <p>sunset {getTime(data.sys.sunset, data.timezone)}</p>
                </div>
            </div>
            


            : null }
            </div>
            )
}