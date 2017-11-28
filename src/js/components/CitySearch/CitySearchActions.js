export function addCity(city) {
  return {
    type: 'ADD_CITY',
    payload: city
  };
}

export function addButton(city) {
  return {
    type: 'ADD_BUTTON',
    payload: city
  };
}

export function updateSearch(name) {
  return {
    type: 'UPDATE_SEARCH',
    payload: { name }
  };
}

export function cityWeather(city) {
  return {
    type: 'UPDATE_WEATHER',
    payload: city
  };
}
