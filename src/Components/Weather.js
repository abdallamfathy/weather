import React  from 'react';

const Weather = (props)=>{

        return (
            <div className="info">
                {
                    props.temperature && <p className="info-key"><span className="info-value">temperature: {props.temperature}</span></p>

                }
                {
                    props.city && <p className="info-key"><span className="info-value">city: {props.city}</span></p>
                }
                {
                    props.country && <p className="info-key"><span className="info-value">country: {props.country}</span></p>
                }
                {
                    props.humidity && <p className="info-key"><span className="info-value">humidity: {props.humidity}</span></p>
                }
                {
                    props.description && <p className="info-key"><span className="info-value">description: {props.description}</span></p>
                }
                {
                    props.error && <p className="info-key"><span className="info-value">Error: {props.error}</span></p>
                }
            </div>
                  )
}

export default Weather;
