import React from 'react'
import './styles/City.css'
import { LoadScript, GooglePlacesAutocomplete } from '@react-google-maps/api'

export default function City() {
    const [locations, setLocations] = React.useState({ location1: "", location2: "" });
    const API_KEY = import.meta.env.VITE_API_KEY

    function updateLocation(e, locationNumber) {
        const location = e.target.value
        setLocations(prev => {
            return (locationNumber === 1 ? {...prev, location1: location} : {...prev, location2: location})
        })
    }

    function loadLocationInfo() {
        console.log(locations)
    }

    const handlePlaceSelect = (place) => {
        console.log('selected Place: ' + place)
    }

    return (
        <div className="city--wrapper">
            <div className="city--box">
                <div className="city--form-wrapper">
                <LoadScript googleMapsApiKey={API_KEY}>
      
                </LoadScript>
                </div>
            </div>
        </div>
    )
}