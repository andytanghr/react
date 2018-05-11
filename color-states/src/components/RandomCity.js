import React, {Component} from 'react';

import {connect} from 'react-redux';

// import GetColors from './GetColors';


// import Counter from './Counter'


  let humidityApi, pressureApi, temperatureApi, windSpeedApi, windDegApi, cloudsApi, longitudeApi, latitudeApi, colorsApi;
  var city;
  var cities = ['London', 'Singapore', 'Paris', 'Beijing', 'Tokyo', 'Dubai', 'Shanghai', 'Sydney', 'Milan', 'Chicago', 'Mumbai', 'Moscow', 'Frankfurt', 'Madrid', 'Warsaw', 'Johannesburg', 'Toronto', 'Seoul', 'Istanbul', 'Jakarta', 'Amsterdam', 'Brussels', 'Dublin', 'Melbourne', 'Washington', 'Bangkok', 'Zurich', 'Vienna', 'Taipei', 'Stockholm', 'Guangzhou', 'Manila', 'Bogotá', 'Miami', 'Luxembourg', 'Riyadh', 'Santiago', 'Barcelona', 'Lisbon']

  var colors = [2, 2, 2];


class RandomCity extends Component {
  // constructor(props) {
  //   super(props);

  // }

  // New York City, Hong Kong, São Paulo, Mexico City, Kuala Lumpur, Tel Aviv, San Francisco, Los Angeles, New Delhi, Buenos Aires, 
  // var { humidity, pressure, temperature, city } = props;
  

  getWeatherData() {
    // Math.random(; // NYC // Math.floor(Math.random() * 100); // 797875; // Lipov, RUS
    
    
    city = cities[Math.floor(Math.random() * cities.length + 1)];
    console.log('component city is: '+ city);
    
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const apiKey = '&appid=e27bb5b36bd6eccc470b0739dbaf0edb';
    fetch(url + city + apiKey)
    .then( (response) => response.json() )
    .then( (weatherData) => {
      humidityApi = weatherData.main.humidity;
      pressureApi = weatherData.main.pressure;
      temperatureApi = weatherData.main.temp;
      windSpeedApi = weatherData.wind.speed;
      windDegApi = weatherData.wind.deg;
      cloudsApi = weatherData.clouds.all;
      latitudeApi = weatherData.coord.lat;
      longitudeApi = weatherData.coord.lon;
      console.log(temperatureApi + ' is API temp'); // this works
    })
    .catch( (err) => console.log(err) )
  }

  getColorData(x, y) {

  


  }


  componentDidMount() {
    console.log(this.props.city + ' did mount');
    this.getWeatherData();
    console.log(this.props.city + ' did mount after API');
  }


  render() {


    var convertToHsl = (x, y) => {
      let hue = Math.floor( 2 * Math.abs(x) );
      let saturation = Math.floor( Math.abs(y) );
      return [hue, saturation, 100];
    }

    convertToHsl(latitudeApi, longitudeApi);


    var getHumidityInHex = (relativeHumidity) => {
      let humidityinHex = relativeHumidity * 255 - 20;
      return 0;
    }




    // let degF = !!temperatureApi ? '' + Math.floor((temperatureApi-273.15) * 1.8 + 32) : 32;
    
    
    let weatherRendered = 
      <div>
        <h3>Welcome to {this.props.currentCity}</h3>
        <h3>current colors: {this.props.currentColors}</h3>
        {/* <h3>{this.pressureApi} mbar</h3> */}
        {/* <h3>{this.humidity}% rel. hum. </h3> */}
        {/* <h3>{degF} &#176;F</h3> */}
      </div>;

    return (
      <div>
        <button onClick={this.props.onChangeCity}>I'm feeling {this.props.currentCity}</button>
        {weatherRendered}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
    // city: state.city,
    // colors: state.colors
    // pressure: state.pressure,
    // temperature: state.temperature,
    // windSpeed: state.windSpeed,
    // windDeg: state.windDeg,
    // clouds: state.clouds,
    // longitude: state.longitude,
    // latitude: state.latitude
  } //, console.log(state.city);
}

const mapDispatchToProps = dispatch => {
  //  var newStateData = {
  //     city: city,
  //     // humidity: humidityApi,
  //     // pressure: pressureApi,
  //     // temperature: temperatureApi,
  //     // windSpeed: windSpeedApi,
  //     // windDeg: windDegApi,
  //     // clouds: cloudsApi,
  //     // longitude: longitudeApi,
  //     // latitude: latitudeApi,
  //     colors: colorsApi,
  //  }
  console.log(city + ' city dispatch to props');
  return {
    onChangeCity: () => dispatch({type: 'CHANGE_CITY', payload: city }),
    
    onChangeColors: () => dispatch({type: 'CHANGE_COLORS', payload: {city, colors}}) // change payload to change CSS

  };
}



export default connect(mapStateToProps, mapDispatchToProps)(RandomCity);