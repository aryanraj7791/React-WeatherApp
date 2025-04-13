import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    let apiUrl = import.meta.env.VITE_API_URL;
    let apiKey = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () => {
        setError(false);
        try{
            let weatherData = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            let jsonResponse = await weatherData.json();
            let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMax: jsonResponse.main.temp_max,
            tempMin: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            seaLevel: jsonResponse.main.sea_level,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
            }
       console.log(result);
       return result;
        } catch(err){
            throw {err};
        } 
    }

    let handleInputChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch{
            setError(true);
        }
    }

    return(<div className="SearchBox">
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="Search City" variant="outlined" value={city} onChange={handleInputChange} required /><br/><br/>
        <Button variant="contained" type="submit">Search</Button>
        </form>
        {error && <p style={{color: "red"}}>No such city exists in our API</p>}
    </div>)
}