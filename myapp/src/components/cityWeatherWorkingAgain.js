import React, {Component} from 'react';

class CityWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: 'default',
      degC: -1,
    };
  };

  // const url = 'http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas';
  // const apiKey = 'e27bb5b36bd6eccc470b0739dbaf0edb';

  getData() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas&appid=9361bd03ec7175e9eea92fdf7a717518')
      .then( (response) => {
      return response.json();
    })
    .then( (weatherData) => {
      const condition = weatherData.weather[0].main;
      const degC = weatherData.main.temp - 273.15;
      this.setState( {condition, degC} );
    })
    .catch( err => {console.log(err);} )

  }

  componentDidMount() {
    this.getData();
    console.log('component did mount')

  }


  render() {

    let degF = '' + Math.floor(this.state.degC * 1.8 + 32);
    let weatherNow =
      <div>
        <p>Current conditions: {this.state.condition}</p>
        <p>Current temperature:  {degF}&#176;F</p>
      </div>
    return (
      <div>
        <h1>Houston</h1>
        {weatherNow}
      </div>
    );
  }
}

export default CityWeather;