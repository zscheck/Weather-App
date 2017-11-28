import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
  return {
    cityList: store.citySearch.cityList
  };
}

export default connect(mapStoreToProps)(SearchHistory);
