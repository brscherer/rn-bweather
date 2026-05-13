import * as ExpoLocation from 'expo-location';

import type { Coordinates, ForegroundLocationPermission } from '@/services/location/models';

function toForegroundLocationPermission(
  permission: ExpoLocation.LocationPermissionResponse
): ForegroundLocationPermission {
  return {
    status: permission.status,
    canAskAgain: permission.canAskAgain,
    granted: permission.granted,
  };
}

export async function getForegroundLocationPermission(): Promise<ForegroundLocationPermission> {
  const permission = await ExpoLocation.getForegroundPermissionsAsync();

  return toForegroundLocationPermission(permission);
}

export async function requestForegroundLocationPermission(): Promise<ForegroundLocationPermission> {
  const permission = await ExpoLocation.requestForegroundPermissionsAsync();

  return toForegroundLocationPermission(permission);
}

export async function getCurrentCoordinates(): Promise<Coordinates> {
  const isLocationEnabled = await ExpoLocation.hasServicesEnabledAsync();

  if (!isLocationEnabled) {
    throw new Error('Location services are disabled on this device.');
  }

  const permission = await getForegroundLocationPermission();

  if (!permission.granted) {
    throw new Error('Foreground location permission has not been granted.');
  }

  const location = await ExpoLocation.getCurrentPositionAsync({
    accuracy: ExpoLocation.Accuracy.Balanced,
  });

  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
}
