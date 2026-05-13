export type OpenMeteoLocationResult = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
  country_code: string;
  country: string;
  admin1?: string;
};

export type OpenMeteoLocationSearchResponse = {
  results?: OpenMeteoLocationResult[];
};

export type OpenMeteoForecastResponse = {
  latitude: number;
  longitude: number;
  timezone: string;
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    is_day: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};
