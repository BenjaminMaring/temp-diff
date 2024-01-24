import React from 'react'
import './styles/City.css'
import Auto from './Auto'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default function City() {
    const [firstCoords, setFirstCoords] = React.useState( {
        lat: null,
        lng: null
    })
    const [secondCoords, setSecondCoords] = React.useState( {
        lat: null,
        lng: null
    })

    function handleClick() {
        console.log(firstCoords, secondCoords)
    }

    return (
        <div className="city--wrapper">
            <div className="city--box">
                <div className="city--form-wrapper">
                    <Auto updateCoords={setFirstCoords}/>
                    <button onClick={handleClick}>Click me</button>
                    <Auto updateCoords={setSecondCoords}/>
                </div>
            </div>
        </div>
    )
}