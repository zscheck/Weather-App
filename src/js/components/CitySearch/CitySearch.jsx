import React, { Component } from 'react';
import axios from 'axios';

import {
  addCity,
  addButton,
  updateSearch,
  cityWeather
} from './CitySearchActions';
// const env = require('dotenv').config();
let count = 0;

export default class CitySearch extends Component {
  constructor(props) {
    super(props);

    this.handleCityName = this.handleCityName.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(e) {
    const { dispatch, cityName, cityButton } = this.props;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=33e8a1e07f499288e98713162709c4f1`;
    if (e.target.value !== '') {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=33e8a1e07f499288e98713162709c4f1`;
    }
    // const apiKey = process.env.OpenWeatherMapAPIKey;
    axios.get(url)
    .then((result) => {
      const city = result.data;
      // console.log(city);
      const searchInfo = {
        name: city.name,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        id: count += 1
      };
      const cityInfo = {
        name: city.name,
        lat: city.coord.lat,
        lon: city.coord.lon,
        temperature: (((9 / 5) * ((city.main.temp) - 273)) + 32),
        lowTemp: (((9 / 5) * ((city.main.temp_min) - 273)) + 32),
        highTemp: (((9 / 5) * ((city.main.temp_max) - 273)) + 32),
        pressure: city.main.pressure,
        humidity: city.main.humidity,
        windSpeed: city.wind.speed,
        condition: city.weather[0].main,
        id: city.id
      };
      if (cityButton.indexOf(city.name) === -1) {
        dispatch(addButton(city.name));
      }
      dispatch(addCity(searchInfo));
      dispatch(cityWeather(cityInfo));
    })
    .catch((err) => {
      alert('Please correctly spell the city name!');
      console.log(err);
    });
  }

  handleCityName(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSearch(value));
  }


  render() {
    const { cityName, cityList, cityWeather, cityButton } = this.props;
    return (
      <div className='row p-3'>
        <div className='btn-group' role='group' aria-label='Basic example'>
          {cityButton.map(city => <input type='button' value={ city } className='btn btn-primary' onClick={ this.getWeather } />)}
        </div>
        <div className='input-group'>
          <input
            type='text'
            value={ cityName }
            onChange={ this.handleCityName }
            className='form-control'
            placeholder='ENTER CITY NAME...'
          />
          <span className='input-group-btn'>
            <button
              className='btn btn-outline-secondary'
              onClick={ this.getWeather }
              type='button'
            >
              Go!
            </button>
          </span>
        </div>
      </div>
    );
  }
}
