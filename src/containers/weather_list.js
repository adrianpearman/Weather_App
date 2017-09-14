import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMaps from '../components/google_maps';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.nameconst temp = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressures)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const {lon, lat} = cityData.city.coord

    if (cityData ===404) {
      return
    }

    return(
      <tr key={name}>
        <td>
          <GoogleMaps
          lon={lon}
          lat={lat}/>
        </td>
        <td>
          <Chart
          data={temp}
          color ='red'
          units='K'/>
        </td>
        <td>
          <Chart
          data={pressures}
          color ='blue'
          units='hPa'/>
        </td>
        <td>
          <Chart
          data={humidities}
          color ='green'
          units='%'/>
        </td>
      </tr>
    )
  }

  render(){
    return(
      <table className = 'table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(wWeatherList);
