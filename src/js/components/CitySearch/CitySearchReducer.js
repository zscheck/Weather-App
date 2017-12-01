const defaultState = {
  cityList: [],
  cityButton: ['San Diego', 'Chicago', 'New York', 'London'],
  cityWeather: {
    name: 'City',
    lat: '0',
    lon: '0',
    temperature: '0',
    lowTemp: '0',
    highTemp: '0',
    pressure: '0',
    humidity: '0',
    windSpeed: '0',
    condition: '01d'
  },
  cityName: ''
};

export default function CitySearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_CITY': {
      return {
        ...state,
        cityName: '',
        cityList:
          [payload, ...state.cityList]
      };
    }

    case 'ADD_BUTTON': {
      return {
        ...state,
        cityName: '',
        cityButton:
         [payload, ...state.cityButton]
      };
    }

    case 'UPDATE_SEARCH': {
      return {
        ...state,
        cityName: payload.name
      };
    }

    case 'UPDATE_WEATHER': {
      return {
        ...state,
        cityWeather: payload
      };
    }
    default: {
      return state;
    }
  }
}
