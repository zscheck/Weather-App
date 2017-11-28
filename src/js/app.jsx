import React, { Component } from 'react';
import CitySearch from './components/CitySearch/index';
import CityInformation from './components/CityInformation/index';
import SearchHistory from './components/SearchHistory/index';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron jumbotron-fluid pl-4 pb-3'>
          <div className='container'>
            <h1 className='display-3 mb-3'>Weather Application</h1>
            <p className='lead mt-3'>Always know if you'll need an umbrella!</p>
          </div>
        </div>
        <CitySearch />
        <div className='row'>
          <CityInformation />
          <SearchHistory />
        </div>
      </div>
    );
  }
}
