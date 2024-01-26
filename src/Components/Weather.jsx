import React from 'react';
import './styles/Weather.css'

export default function Weather({ data }) {
    
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
                <div className="weather--sun">
                    <p>sunrise {data.sys.sunrise}</p>
                    <p>sunset {data.sys.sunrise}</p>
                </div>
            </div>
            


            : null }
            </div>
            )
}