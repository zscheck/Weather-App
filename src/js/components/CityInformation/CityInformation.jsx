import React, { Component } from 'react';

export default class CityInformation extends Component {
  render() {
    const { cityWeather } = this.props;
    return (
      <div className='col-6 p-3'>
        <div className='card'>
          <div className='card-header alert-info'>
            City Information
          </div>
          <div className='card-block text-center my-2'>
            <img className='img-fluid' src={ `http://openweathermap.org/img/w/${cityWeather.condition}.png` } alt='Weather' />
            <h3>{cityWeather.name}</h3>
            <p>Lat/Long: {cityWeather.lat}, {cityWeather.lon}</p>
          </div>
          <div className='card-block'>
            <div className='row'>
              <div className='col-4 my-2 text-center'>
                Temperature
                <p className='text-success'>{Math.round(cityWeather.temperature)}F</p>
              </div>
              <div className='col-4 my-2 text-center'>
                Pressure
                <p className='text-success'>{cityWeather.pressure}</p>
              </div>
              <div className='col-4 my-2 text-center'>
                Humidity
                <p className='text-success'>{cityWeather.humidity}%</p>
              </div>
              <div className='col-4 my-2 text-center'>
                Lowest Temp
                <p className='text-success'>{Math.round(cityWeather.lowTemp)}F</p>
              </div>
              <div className='col-4 my-2 text-center'>
                Highest Temp
                <p className='text-success'>{Math.round(cityWeather.highTemp)}F</p>
              </div>
              <div className='col-4 my-2 text-center'>
                Wind Speed
                <p className='text-success'>{cityWeather.windSpeed}mph</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
