import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    let [weather,setWeather] = useState({
        city: "Mumbai",
        temp: 17.06,
        tempMax: 17.06,
        tempMin: 17.06,
        weather: "haze",
        humidity: 72,
        feelsLike: 16.7,
        seaLevel: 1014,
        pressure: 1014,
    });

    let updateInfo = (newInfo) => {
        setWeather(newInfo);
    }

    return(<div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weather}/>
    </div>)
}