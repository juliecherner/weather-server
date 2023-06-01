import axios from "axios";
import {
  extractTemperatureFromWeather,
  validateCityName,
} from "../utils/weather";
import { cityNamePayload, TemperaturesByCity, WeatherByCity } from "../types";

export const findTemperatureByCity = async (
  cityPayload: cityNamePayload
): Promise<TemperaturesByCity> => {
  if (!validateCityName(cityPayload.name)) {
    throw new Error("City name is not correct");
  }

  try {
    const currentWeather = await getCurrentWeatherByCity(cityPayload);
    const temperaturesByCity = extractTemperatureFromWeather(currentWeather);
    return temperaturesByCity;
  } catch {
    throw new Error(`Weather for city ${cityPayload.name} is not found`);
  }
};

export const getCurrentWeatherByCity = async (
  cityPayload: cityNamePayload
): Promise<WeatherByCity> => {
  const apiKey = process.env.WEATHER_API_KEY || "";
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityPayload.name}`;
    const currentWeather = await axios.get(url);
    return currentWeather?.data;
  } catch {
    throw new Error(`Something went wrong`);
  }
};
