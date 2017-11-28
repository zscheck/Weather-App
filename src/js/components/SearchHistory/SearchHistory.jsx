import React, { Component } from 'react';

export default class SearchHistory extends Component {
  render() {
    const { cityList } = this.props;
    return (
      <div className='col-6 p-3'>
        <div className='card'>
          <div className='card-header alert-info'>
            Search History
          </div>
          <div className='card-block p-1'>
            <table className='table table-striped'>
              <tbody>
                { cityList.length === 0 ?
                  <tr>
                    <td>City</td>
                    <td />
                    <td />
                    <td>Date</td>
                    <td>Time</td>
                  </tr> :
                cityList.map(city =>
                  <tr>
                    <td>{city.name}</td>
                    <td />
                    <td />
                    <td>{city.date}</td>
                    <td>{city.time}</td>
                  </tr>
                )
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
