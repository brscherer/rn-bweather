import {
  OPEN_METEO_API_URL,
  OPEN_METEO_CURRENT_FIELDS,
  OPEN_METEO_DAILY_FIELDS,
  OPEN_METEO_GEOCODING_URL,
} from '@/services/weather/config';
import {
  toLocationSearchResult,
  toWeatherForecast,
} from '@/services/weather/open-meteo-adapters';
import type { Coordinates } from '@/services/location/models';
import type { LocationSearchResult, WeatherForecast } from '@/services/weather/models';
import type {
  OpenMeteoForecastResponse,
  OpenMeteoLocationSearchResponse,
} from '@/services/weather/open-meteo-types';

type SearchLocationsOptions = {
  count?: number;
  language?: string;
};

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return (await response.json()) as T;
}

export async function searchLocations(
  query: string,
  options: SearchLocationsOptions = {}
): Promise<LocationSearchResult[]> {
  const normalizedQuery = query.trim();

  if (normalizedQuery.length < 2) {
    return [];
  }

  const params = new URLSearchParams({
    name: normalizedQuery,
    count: String(options.count ?? 10),
    language: options.language ?? 'en',
    format: 'json',
  });

  const response = await fetchJson<OpenMeteoLocationSearchResponse>(
    `${OPEN_METEO_GEOCODING_URL}?${params.toString()}`
  );

  return (response.results ?? []).map(toLocationSearchResult);
}

export async function fetchWeatherForecast(coordinates: Coordinates): Promise<WeatherForecast> {
  const params = new URLSearchParams({
    latitude: String(coordinates.latitude),
    longitude: String(coordinates.longitude),
    timezone: 'auto',
    current: OPEN_METEO_CURRENT_FIELDS.join(','),
    daily: OPEN_METEO_DAILY_FIELDS.join(','),
  });

  const response = await fetchJson<OpenMeteoForecastResponse>(
    `${OPEN_METEO_API_URL}?${params.toString()}`
  );

  return toWeatherForecast(response);
}
