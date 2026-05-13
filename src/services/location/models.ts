export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type LocationPermissionStatus = 'granted' | 'denied' | 'undetermined';

export type ForegroundLocationPermission = {
  status: LocationPermissionStatus;
  canAskAgain: boolean;
  granted: boolean;
};
