import React from 'react'
import './styles/City.css'
import Auto from './Auto'
import Weather from './Weather'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useParams } from "react-router-dom";

export default function City() {
    const OPENWEATHER_KEY = process.env.VITE_OPENWEATHER_KEY;
    const params = useParams();

    const [address1, setAddress1] = React.useState(params.search1 || "");
    const [address2, setAddress2] = React.useState(params.search2 || "");
    const [firstAddressData, setFirstAddressData] = React.useState()
    const [secondAddressData, setSecondAddressData] = React.useState()

    React.useEffect(() => {
        if (params.search1 && params.search2) {
            handleClick();
        }
    }, [])

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
        updateLocalStorage(address1, address2);
    }

    function updateLocalStorage(address1, address2) {
        let inquiries = JSON.parse(localStorage.getItem("recents"));

        if (inquiries) {

            //check to make sure its not a recently searched item
            for (let i in inquiries) {
                if (inquiries[i].first == address1 && inquiries[i].second == address2) {
                    return;
                }
            }
            if (inquiries.length >=7) {
                inquiries.shift();
                inquiries.push({first: address1, second: address2})
            } else {
                inquiries.push({first: address1, second: address2});
            }
            
            localStorage.setItem("recents", JSON.stringify(inquiries));
            return;
        } else {    
            localStorage.setItem("recents", JSON.stringify([{first: address1, second: address2}]));
        }
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