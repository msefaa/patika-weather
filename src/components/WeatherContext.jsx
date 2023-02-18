import axios from "axios";
import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();
const WheatherProvider = ({ children }) => {
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState(
    localStorage.getItem("city") ? localStorage.getItem("city") : "Amsterdam"
  );
  const [hours, setHours] = useState([]);
  const [country, setCountry] = useState("");
  const [humidity, setHumidity] = useState("");
  const [name, setName] = useState("");
  const [allData, setAllData] = useState("");
  const [wicon, setWicon] = useState("");
  const [days, setDays] = useState([]);
  const getWeatherData = () => {
    axios({
      method: "GET",
      url: `https://api.weatherapi.com/v1/forecast.json?key=6510c32d2c064010af3144502231602&q=${city}&days=7&aqi=no&alerts=no`,
    })
      .then((response) => {
        setTemperature(Math.round(response.data.current.temp_c));
        setHours(response.data.forecast.forecastday[0].hour);
        setCountry(response.data.location.country);
        setName(response.data.location.name);
        setDays(response.data.forecast.forecastday);
        setAllData(response.data);
        setWicon(response.data.current.condition.icon);
        console.log(response.data);
      })
      .catch((error) => {
        alert("Lutfen Gecerli bir Sehir giriniz");
      });
  };

  const values = {
    hours,
    setHours,
    allData,
    setAllData,
    days,
    setDays,
    city,
    temperature,
    setCountry,
    country,
    humidity,
    name,
    wicon,
    setTemperature,
    setCity,
    setHumidity,
    setName,
    setWicon,
    getWeatherData,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
const useWheather = () => useContext(WeatherContext);
export { useWheather, WheatherProvider };
