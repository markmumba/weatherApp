
import { useState } from "react";
import Form from "./Form/form";
import Navbar from "./Navbar/navbar";
import WeatherReport from './weather/weather';




const MainComponent = () => {
    const APIKEY = `e820811d91b3c755aafb2aa9f18e201a`;

    const [weatherData, setWeatherData] = useState()


    const getLocationWeather = (data) => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${data.city},${data.code}&limit=1&appid=${APIKEY}`)
            .then(response => response.json())
            .then(data => {
                for (const city of data) {
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${APIKEY}`)
                        .then(response => response.json())
                        .then(data => setWeatherData(data))
                }

            })

    }



    return (
        <>
       
            <Navbar />
            <h2  className="ml-4 ">Tip: adding the country code makes the result more precise </h2>
            <div className="grid md:grid-cols-2">
                <Form getLocationWeather={getLocationWeather} />
                <WeatherReport weatherData={weatherData} />
            </div>
        </>
    )
}

export default MainComponent;