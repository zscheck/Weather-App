import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function MapStoreToProps(store) {
  return {
    cityWeather: store.citySearch.cityWeather
  };
}

export default connect(MapStoreToProps)(CityInformation);
