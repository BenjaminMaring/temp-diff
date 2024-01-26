import React from 'react' 
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './styles/Auto.css'

// Huge credit to Leigh Halliday on youtube for his Google Places - Autocomplete in React video
export default function Auto({ address, setAddress }) {

    const handleSelect = async (value) => {
        setAddress(value);
        console.log(address);
    }

    const autocompleteRender = ({ getInputProps, suggestions, loading }) => {
        return (
            <div className="auto--wrapper">
                <input {...getInputProps({placeholder: 'Type address here...'})} className="auto--input-field" />
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