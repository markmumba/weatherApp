import { useEffect, useState } from "react";


const WeatherReport = (props) => {

    const [data, setData] = useState();

    useEffect(() => {

        if (props.weatherData) {
            let updatedData = {
                name: props.weatherData.name || "",
                main: "",
                temperature: "",
                pressure: "",
                humidity: "",
                rain: "",
                description: "",
                windspeed: "",
                winddirection: "",
            }

            if (props.weatherData.weather) {
                for (const weatherObject of props.weatherData.weather) {
                    updatedData.main = weatherObject.main || "";
                    updatedData.description = weatherObject.description || "";
                }
            }

            if (props.weatherData.wind && typeof props.weatherData.wind === 'object') {
                updatedData.windspeed = props.weatherData.wind.speed || "";
                updatedData.winddirection = props.weatherData.wind.deg || "";
            }

            if (props.weatherData.main && typeof props.weatherData.main === 'object') {
                updatedData.temperature = props.weatherData.main.temp || "";
                updatedData.pressure = props.weatherData.main.pressure || "";
                updatedData.humidity = props.weatherData.main.humidity || "";
            }

            setData(updatedData);
        }
    }, [props.weatherData]);






    return (
        <>

            {data && <div className="border rounded-lg p-7 m-4 md:m-0 text-center ">
                <ul>
                    <li>{data.name}</li>
                    <li><i className={`bi ${parseInt(data.temperature - 273.15) > 20 ? 'bi-thermometer-high' : 'bi-thermometer'}`} style={{ fontSize: "1.5rem" }}></i> Temperature: {parseInt(data.temperature - 273.15)}°C</li>
                    <li><i class="bi bi-cloud-sun" style={{ fontSize: "1.5rem" }}></i> Weather : {data.main}</li>
                    <li>Description : {data.description}</li>
                    <li> <i class="bi bi-speedometer2" style={{ fontSize: "1.5rem" }}></i> Pressure : {data.pressure} hPa</li>
                    <li><i class="bi bi-moisture" style={{ fontSize: "1.5rem" }}></i> Humidity: {data.humidity} % </li>
                    <li><i class="bi bi-wind" style={{ fontSize: "1.5rem" }}></i> Wind Speed : {parseInt(parseFloat(data.windspeed) * 3.6)} km/hr </li>
                    <li><i class="bi bi-compass" style={{ fontSize: "1.5rem" }}></i> wind Direction : {data.winddirection}°</li>
                </ul>
            </div>}
        </>
    )
}

export default WeatherReport;