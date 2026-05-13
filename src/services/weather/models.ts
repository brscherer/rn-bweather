import type { Coordinates } from '@/services/location/models';

export type LocationSearchResult = Coordinates & {
  id: number;
  name: string;
  country: string;
  countryCode: string;
  admin1?: string;
  timezone: string;
};

export type CurrentWeather = {
  temperatureCelsius: number;
  apparentTemperatureCelsius: number;
  relativeHumidity: number;
  windSpeedKph: number;
  weatherCode: number;
  isDay: boolean;
};

export type DailyForecastEntry = {
  date: string;
  minTemperatureCelsius: number;
  maxTemperatureCelsius: number;
  weatherCode: number;
};

export type WeatherForecast = {
  coordinates: Coordinates;
  timezone: string;
  current: CurrentWeather;
  daily: DailyForecastEntry[];
};
