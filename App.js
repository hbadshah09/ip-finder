import { useEffect, useState } from 'react'; 
import Axios from 'axios'; 
import Map from './map'; 
import './App.css'; 

function App() { 
    const [ipDetails, setIpDetails] = useState({}); 
    const [lat, setLat] = useState(22.5726); 
    const [lon, setLon] = useState(88.3832); 

    useEffect(() => { 
        Axios.get('https://ipapi.co/json/').then((res) => { 
            console.log('API Response:', res.data); // Log the API response
            setIpDetails(res.data); 
            if (res.data.latitude && res.data.longitude) {
                setLat(res.data.latitude); 
                setLon(res.data.longitude); 
            }
        }).catch((error) => {
            console.error('API Error:', error); // Log any API errors
        }); 
    }, []) 

    return ( 
        <> 
            <h1 className="heading">IP Address Finder</h1> 
            <div className="App"> 
                <div className="left"> 
                    <h4>What is my IPv4 address?</h4> 
                    <h1 id="ip">{ipDetails.ip}</h1> 
                    <h4>Approximate location:</h4> 
                    <p>{ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}.</p> 
                    <h4>Internet Service Provider(ISP):</h4> 
                    <p>{ipDetails.org}</p> 
                </div> 
                {lat && lon && <Map lat={lat} lon={lon} />} {/* Render Map only if lat and lon are available */}
            </div> 
        </> 
    ); 
} 

export default App;

