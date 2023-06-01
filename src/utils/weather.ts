import { TemperaturesByCity, WeatherByCity } from "../types/index";

export const extractTemperatureFromWeather = (
  weatherObject: WeatherByCity
): TemperaturesByCity => {
  return {
    cityName: weatherObject.location.name,
    temperatureC: weatherObject.current.temp_c,
    temperatureF: weatherObject.current.temp_f,
    feelsLikeC: weatherObject.current.feelslike_c,
    feelsLikeF: weatherObject.current.feelslike_f,
  };
};

export const validateCityName = (name: string) => {
  const regex = /^[a-zA-Z\s-]+$/;
  return regex.test(name);
};
