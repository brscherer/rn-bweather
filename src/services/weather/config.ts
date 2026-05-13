export const OPEN_METEO_API_URL = 'https://api.open-meteo.com/v1/forecast';
export const OPEN_METEO_GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export const OPEN_METEO_CURRENT_FIELDS = [
  'temperature_2m',
  'apparent_temperature',
  'relative_humidity_2m',
  'weather_code',
  'wind_speed_10m',
  'is_day',
] as const;

export const OPEN_METEO_DAILY_FIELDS = [
  'weather_code',
  'temperature_2m_max',
  'temperature_2m_min',
] as const;
