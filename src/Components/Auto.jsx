import React from 'react' 
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './styles/Auto.css'

// Huge credit to Leigh Halliday on youtube for his Google Places - Autocomplete in React video
export default function Auto({ updateCoords }) {
    const [address, setAddress] = React.useState("")

    const handleSelect = async (value, num) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0])
        updateCoords(latLng)
    }

    const handleClick = () => {
        console.log("click");
    }

    const autocompleteRender = ({ getInputProps, suggestions, loading }, num) => {
        return (
            <div className="auto--wrapper">
                <input {...getInputProps({placeholder: 'Type address here...'})} className="auto--input-field"/>
                <div className="auto--search-wrapper">
                    {loading ? <div>...Loading</div> : null}
                    {suggestions.map(suggestion => {
                        return <div className="auto--search-item" key={suggestion.description}>{suggestion.description}</div>
                    })}
                </div>
            </div>
        )
    }

    return (
        <PlacesAutocomplete 
                        value={address} 
                        onChange={setAddress} 
                        onSelect={handleSelect}
                    >
                        {autocompleteRender}
                    </PlacesAutocomplete>
    )
}