import type {
  Coordinates,
  LocationSearchResult,
  WeatherForecast,
} from '@/services/weather/models';
import type {
  OpenMeteoForecastResponse,
  OpenMeteoLocationResult,
} from '@/services/weather/open-meteo-types';

export function toLocationSearchResult(location: OpenMeteoLocationResult): LocationSearchResult {
  return {
    id: location.id,
    name: location.name,
    latitude: location.latitude,
    longitude: location.longitude,
    timezone: location.timezone,
    country: location.country,
    countryCode: location.country_code,
    admin1: location.admin1,
  };
}

export function toWeatherForecast(response: OpenMeteoForecastResponse): WeatherForecast {
  const coordinates: Coordinates = {
    latitude: response.latitude,
    longitude: response.longitude,
  };

  const daily = response.daily.time.map((date, index) => ({
    date,
    weatherCode: response.daily.weather_code[index],
    maxTemperatureCelsius: response.daily.temperature_2m_max[index],
    minTemperatureCelsius: response.daily.temperature_2m_min[index],
  }));

  return {
    coordinates,
    timezone: response.timezone,
    current: {
      temperatureCelsius: response.current.temperature_2m,
      apparentTemperatureCelsius: response.current.apparent_temperature,
      relativeHumidity: response.current.relative_humidity_2m,
      windSpeedKph: response.current.wind_speed_10m,
      weatherCode: response.current.weather_code,
      isDay: response.current.is_day === 1,
    },
    daily,
  };
}
