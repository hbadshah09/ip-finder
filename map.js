
import React, { useEffect, useState } from 'react'; 
import ReactMapGL, { Marker } from 'react-map-gl'; 
import { RiUserLocationFill } from 'react-icons/ri'; 

const API_KEY = ' pk.eyJ1IjoibWRyYWhtYXR1bGxhaDc4NiIsImEiOiJjbHc1MTZnOW8xYm52MnFwaHJva3Q3MXR6In0.KCYp12-XMj6BzDK34kf8EQ'; 

const Map = ({ lat, lon }) => { 
    const [viewport, setViewport] = useState({ 
        latitude: lat || 0, 
        longitude: lon || 0, 
        zoom: 14, 
        bearing: 0, 
        pitch: 0, 
        width: 550, 
        height: 350, 
    }); 

    useEffect(() => { 
        const updatedViewport = { ...viewport }; 
        updatedViewport.latitude = lat || 0; 
        updatedViewport.longitude = lon || 0; 
        setViewport(updatedViewport); 
    }, [lat, lon, viewport]); 

    return ( 
        <div className="map"> 
            <ReactMapGL 
                mapboxApiAccessToken={API_KEY} 
                {...viewport} 
                onViewportChange={setViewport} 
                mapStyle="mapbox://styles/mapbox/streets-v11"> 
                {lat && lon && (
                    <Marker latitude={lat} longitude={lon}> 
                        <div className="mark"> 
                            <RiUserLocationFill size="25px" color="blue" /> 
                        </div> 
                    </Marker> 
                )}
            </ReactMapGL> 
        </div> 
    ); 
}; 

export default Map;
