import { connect } from 'react-redux';
import CitySearch from './CitySearch';

function mapStoreToProps(store) {
  return {
    cityList: store.citySearch.cityList,
    cityButton: store.citySearch.cityButton,
    cityWeather: store.citySearch.cityWeather,
    cityName: store.citySearch.cityName
  };
}

export default connect(mapStoreToProps)(CitySearch);
