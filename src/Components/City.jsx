import React from 'react'
import './styles/City.css'
import Auto from './Auto'
import Weather from './Weather'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default function City() {
    const OPENWEATHER_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

    const [address1, setAddress1] = React.useState("");
    const [address2, setAddress2] = React.useState("");
    const [firstAddressData, setFirstAddressData] = React.useState()
    const [secondAddressData, setSecondAddressData] = React.useState()


    async function getCoords(address) {
        try {
            const results = await geocodeByAddress(address);
            const latLng = await getLatLng(results[0])
            return latLng
        } catch(e) {
            window.alert("Invalid Address: " + address)
        }
    }

    async function getWeatherData(address) {
        const {lat, lng} = await getCoords(address);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${OPENWEATHER_KEY}`)
            const data = await response.json()
            return data;
        } catch(e) {
            window.alert("error getting weather data: " + e)
        }
    }

    async function handleClick() {
        const data1 = await getWeatherData(address1)
        const data2 = await getWeatherData(address2)
        setFirstAddressData(data1);
        setSecondAddressData(data2);
    }

    return (
        <div className="city--wrapper">
            <div className="city--box">
                <div className="city--form-wrapper">
                    <Auto address={address1} 
                          setAddress={setAddress1}
                    />
                    <button className="city--weather-btn" onClick={handleClick}>Compare</button>
                    <Auto address={address2} 
                          setAddress={setAddress2}
                    />
                </div>
                <div className="city--data-wrapper">
                    <Weather data={firstAddressData} />
                    <div className="city--buffer"></div>
                    <Weather data={secondAddressData}/>
                </div>
            </div>
        </div>
    )
}